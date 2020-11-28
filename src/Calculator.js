import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// local imports
import { CHARINFO } from './CharVals'
import { ASCENSIONS, CHARS, LEVELS, SKILLLEVELS, WEAPONS } from './GenVals'
import { STATS, ART_SUBSTATS, ART_MAIN_HOURGLASS, ART_MAIN_GOBLET, ART_MAIN_HAT } from './StatVals';

// Container for all of the different things in the calculator
export function Calculator() {
    // basic char stuff
    const [char, setChar] = useState(
        {
            name: CHARS[0],
            level: LEVELS[0],
            ascension: ASCENSIONS[0]
        }
    );
    const [skillLevels, setSkillLevels] = useState(
        [1, 1, 1]
    )
    // basic weapon stuff
    const [weap, setWeap] = useState(
        {
            name: "Favonius Greatsword",
            level: LEVELS[0],
            ascension: ASCENSIONS[0]
        }
    );
    // basic artifact stuff
    const [flower, setFlower] = useState(
        {
            slot: 'Flower',
            set: '',
            // main stats
            mainStat: 'HP_BASE',
            mainVal: 0,
            // substats
            sub1: '',
            val1: 0,
            sub2: '',
            val2: 0,
            sub3: '',
            val3: 0,
            sub4: '',
            val4: 0,
        }
    );
    const [feather, setFeather] = useState(
        {
            slot: 'Feather',
            set: '',
            // main stats
            mainStat: 'ATK_BASE',
            mainVal: 0,
            // substats
            sub1: '',
            val1: 0,
            sub2: '',
            val2: 0,
            sub3: '',
            val3: 0,
            sub4: '',
            val4: 0,
        }
    );
    const [hourglass, setHourglass] = useState(
        {
            slot: 'Hourglass',
            set: '',
            // main stats
            mainStat: '',
            mainVal: 0,
            // substats
            sub1: '',
            val1: 0,
            sub2: '',
            val2: 0,
            sub3: '',
            val3: 0,
            sub4: '',
            val4: 0,
        }
    );
    const [goblet, setGoblet] = useState(
        {
            slot: 'Goblet',
            set: '',
            // main stats
            mainStat: '',
            mainVal: 0,
            // substats
            sub1: '',
            val1: 0,
            sub2: '',
            val2: 0,
            sub3: '',
            val3: 0,
            sub4: '',
            val4: 0,
        }
    );
    const [hat, setHat] = useState(
        {
            slot: 'Hat',
            set: '',
            // main stats
            mainStat: '',
            mainVal: 0,
            // substats
            sub1: '',
            val1: 0,
            sub2: '',
            val2: 0,
            sub3: '',
            val3: 0,
            sub4: '',
            val4: 0,
        }
    );
    // stats used for skills
    const [stats, setStats] = useState(
        STATS.reduce((a, x) => ({ ...a, [x]: 0.0 }), {}) // maps each stat to 0.0
    )

    // a function which updates all of the stats given char, weap, and artifact input
    function calcStats(char, weap, flower, feather, hourglass, goblet, hat) {
        let statDict = STATS.reduce((a, x) => ({ ...a, [x]: 0.0 }), {});

        // load char stats
        let charStats = STATS.reduce((a, x) => ({ ...a, [x]: 0.0 }), {});
        // index 1 is ascension (char.ascension)
        // index 2 is level (char.level)
        let calcLevel = char.level
        if (char.ascension < 2) {
            calcLevel -= 1 + char.ascension * 19
        } else {
            calcLevel -= 20 + (char.ascension * 10)
        }
        charStats["HP_BASE"] = CHARINFO[char.name]["HP_BASE"][char.ascension][calcLevel]
        charStats["ATK_BASE"] = CHARINFO[char.name]["ATK_BASE"][char.ascension][calcLevel]
        charStats["DEF_BASE"] = CHARINFO[char.name]["DEF_BASE"][char.ascension][calcLevel]
        charStats[CHARINFO[char.name]["BONUS_STAT"]] = CHARINFO[char.name][CHARINFO[char.name]["BONUS_STAT"]][char.ascension]
        // try to map it to statDict
        Object.keys(charStats).map((stat) => {
            statDict[stat] += charStats[stat]
            statDict[stat] = Number(statDict[stat].toFixed(2))
            return null
        })

        // TODO load weapon stats
        let weapStats = STATS.reduce((a, x) => ({ ...a, [x]: 0.0 }), {});
        // try to map it to statDict
        Object.keys(weapStats).map((stat) => {
            statDict[stat] += weapStats[stat]
            statDict[stat] = Number(statDict[stat].toFixed(2))
            return null
        })

        // add artifact values
        let artArray = [flower, feather, hourglass, goblet, hat];
        let artStats = STATS.reduce((a, x) => ({ ...a, [x]: 0.0 }), {});
        artArray.map((artifact) => {
            // main stat
            artStats[artifact.mainStat] += Number(artifact.mainVal)
            // substat 1
            artStats[artifact.sub1] += Number(artifact.val1)
            // substat 2
            artStats[artifact.sub2] += Number(artifact.val2)
            // substat 3
            artStats[artifact.sub3] += Number(artifact.val3)
            // substat 4
            artStats[artifact.sub4] += Number(artifact.val4)

            return null
        })
        // try to map it to statDict
        Object.keys(artStats).map((stat) => {
            statDict[stat] += artStats[stat]
            statDict[stat] = Number(statDict[stat].toFixed(2))
            return null
        })

        // calculate the 'total' values now
        statDict['HP_TOTAL'] = Number(((statDict['HP_BASE'] * statDict['HP_PERC']) / 100 + statDict['HP_BASE']).toFixed(2));
        statDict['ATK_TOTAL'] = Number(((statDict['ATK_BASE'] * statDict['ATK_PERC']) / 100 + statDict['ATK_BASE']).toFixed(2));
        statDict['DEF_TOTAL'] = Number(((statDict['DEF_BASE'] * statDict['DEF_PERC']) / 100 + statDict['DEF_BASE']).toFixed(2));
        // and damages for elements
        statDict['PYRO_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['PYRO_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));
        statDict['HYDRO_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['HYDRO_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));
        statDict['DENDRO_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['DENDRO_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));
        statDict['ELECTRO_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['ELECTRO_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));
        statDict['ANEMO_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['ANEMO_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));
        statDict['CRYO_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['CRYO_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));
        statDict['GEO_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['GEO_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));
        statDict['PHYSICAL_DAMAGE'] = Number((statDict['ATK_TOTAL'] * statDict['PHYSICAL_BONUS'] / 100 + statDict['ATK_TOTAL']).toFixed(2));

        return statDict;
    }

    // a function which returns skill with given stats
    function skillDefault(char, skillLevels, stats) {
        return (
            <Card> {/** Default */}
                {CHARINFO[char.name]["Default"]["Name"]} Level
                <Form.Control as="select" defaultValue={skillLevels[0]} onChange={(event) => {
                    setSkillLevels(skillLevels => ({ ...skillLevels, 0: event.target.value }));
                    setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                }}>
                    {SKILLLEVELS.map((lvl) => (
                        <option key={lvl}>{lvl}</option>
                    ))}
                </Form.Control>
            </Card>
        )
    }
    function skillSkill(char, skillLevels, stats) {
        return (
            <Card> {/** Skill */}
                {CHARINFO[char.name]["Skill"]["Name"]} level
                <Form.Control as="select" defaultValue={skillLevels[1]} onChange={(event) => {
                    setSkillLevels(skillLevels => ({ ...skillLevels, 1: event.target.value }));
                    setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                }}>
                    {SKILLLEVELS.map((lvl) => (
                        <option key={lvl}>{lvl}</option>
                    ))}
                </Form.Control>
            </Card>
        )
    }
    function skillBurst(char, skillLevels, stats) {
        return (
            <Card> {/** Burst */}
                {CHARINFO[char.name]["Burst"]["Name"]} level
                <Form.Control as="select" defaultValue={skillLevels[2]} onChange={(event) => {
                    setSkillLevels(skillLevels => ({ ...skillLevels, 2: event.target.value }));
                    setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                }}>
                    {SKILLLEVELS.map((lvl) => (
                        <option key={lvl}>{lvl}</option>
                    ))}
                </Form.Control>
            </Card>
        )
    }

    // 3-column container:
    //  left = stats
    //  middle = dropdown above skills
    //  right = artifact
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Row> {/**Stats display */}
                        <Col sm={5}>
                            {/* PYRO */}
                            <Card bg="danger" text="light">
                                <Row><Col></Col><Col>PYRO</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["PYRO_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["PYRO_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["PYRO_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* HYDRO */}
                            <Card bg="primary" text="light">
                                <Row><Col></Col><Col>HYDRO</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["HYDRO_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["HYDRO_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["HYDRO_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* DENDRO */}
                            <Card bg="success" text="light">
                                <Row><Col></Col><Col>DENDRO</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["DENDRO_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["DENDRO_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["DENDRO_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* ELECTRO */}
                            <Card bg="warning" text="black">
                                <Row><Col></Col><Col>ELECTRO</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["ELECTRO_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["ELECTRO_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["ELECTRO_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* ANEMO */}
                            <Card bg="success" text="light">
                                <Row><Col></Col><Col>ANEMO</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["ANEMO_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["ANEMO_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["ANEMO_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* CRYO */}
                            <Card bg="info" text="light">
                                <Row><Col></Col><Col>CRYO</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["CRYO_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["CRYO_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["CRYO_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* GEO */}
                            <Card bg="dark" text="light">
                                <Row><Col></Col><Col>GEO</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["GEO_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["GEO_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["GEO_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* PHYSICAL */}
                            <Card bg="white" text="black">
                                <Row><Col></Col><Col>PHYSICAL</Col><Col></Col></Row>
                                <Row>
                                    <Col>Damage</Col>
                                    <Col>%</Col>
                                    <Col>Res</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["PHYSICAL_DAMAGE"]}
                                    </Col>
                                    <Col>
                                        {stats["PHYSICAL_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["PHYSICAL_RESISTANCE"]}
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col>
                            {/* HP */}
                            <Card bg="dark" text="light">
                                <Row>
                                    <Col>
                                        Base HP
                            </Col>
                                    <Col>
                                        HP%
                            </Col>
                                    <Col>
                                        Total HP
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["HP_BASE"]}
                                    </Col>
                                    <Col>
                                        {stats["HP_PERC"]}
                                    </Col>
                                    <Col>
                                        {stats["HP_TOTAL"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* ATK */}
                            <Card bg="dark" text="light">
                                <Row>
                                    <Col>
                                        Base ATK
                            </Col>
                                    <Col>
                                        ATK%
                            </Col>
                                    <Col>
                                        Total ATK
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["ATK_BASE"]}
                                    </Col>
                                    <Col>
                                        {stats["ATK_PERC"]}
                                    </Col>
                                    <Col>
                                        {stats["ATK_TOTAL"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* DEF */}
                            <Card bg="dark" text="light">
                                <Row>
                                    <Col>
                                        Base DEF
                            </Col>
                                    <Col>
                                        DEF%
                            </Col>
                                    <Col>
                                        Total DEF
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["DEF_BASE"]}
                                    </Col>
                                    <Col>
                                        {stats["DEF_PERC"]}
                                    </Col>
                                    <Col>
                                        {stats["DEF_TOTAL"]}
                                    </Col>
                                </Row>
                            </Card>
                            <br />
                            {/* Random shit */}
                            <Card bg="dark" text="light">
                                <Row>
                                    <Col>
                                        Elemental Mastery
                            </Col>
                                    <Col>
                                        Energy Recharge
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["ELEMENTAL_MASTERY"]}
                                    </Col>
                                    <Col>
                                        {stats["ENERGY_RECHARGE"]}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Crit Rate
                            </Col>
                                    <Col>
                                        Crit Damage
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["CRIT_RATE"]}
                                    </Col>
                                    <Col>
                                        {stats["CRIT_DAMAGE"]}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Healing Bonus
                            </Col>
                                    <Col>
                                        Healing Received
                            </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {stats["HEAL_BONUS"]}
                                    </Col>
                                    <Col>
                                        {stats["HEAL_RECEIVED"]}
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row> {/**Dropdown menus for char and weapon selection */}
                        <Col>
                            <Card> {/**Character */}
                                <Form key="charChange">
                                    <Form.Group controlId="Character Selection">
                                        <Form.Label>Character</Form.Label>
                                        {/* To select char */}
                                        <Form.Control as="select" defaultValue={char['name']} onChange={(event) => {
                                            setChar(char => ({ ...char, name: event.target.value }));
                                            setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                        }}>
                                            {CHARS.map((char) => (
                                                <option key={char}>{char}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Level</Form.Label>
                                            {/* To select level */}
                                            <Form.Control as="select" defaultValue={char['level']} onChange={(event) => {
                                                setChar(char => ({ ...char, level: Number(event.target.value) }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                {LEVELS.map((level) => (
                                                    <option key={level}>{level}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>Ascension</Form.Label>
                                            {/* To select ascension */}
                                            <Form.Control as="select" defaultValue={char['ascension']} onChange={(event) => {
                                                setChar(char => ({ ...char, ascension: Number(event.target.value) }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                {ASCENSIONS.map((ascension) => (
                                                    <option key={ascension}>{ascension}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Card>
                        </Col>
                        <Col></Col>
                        <Col>
                            <Card> {/**Weapon */}
                                <Form key="weapChange">
                                    <Form.Group controlId="Weapon Selection">
                                        <Form.Label>Weapon</Form.Label>
                                        {/* To select weapon */}
                                        <Form.Control as="select" defaultValue={weap['name']} onChange={(event) => {
                                            setWeap(weap => ({ ...weap, name: event.target.value }));
                                            setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                        }}>
                                            {WEAPONS[CHARINFO[char.name]['WEAPON_TYPE']].map((char) => (
                                                <option key={char}>{char}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Level</Form.Label>
                                            {/* To select level */}
                                            <Form.Control as="select" defaultValue={weap['level']} onChange={(event) => {
                                                setWeap(weap => ({ ...weap, level: Number(event.target.value) }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                {LEVELS.map((level) => (
                                                    <option key={level}>{level}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>Ascension</Form.Label>
                                            {/* To select ascension */}
                                            <Form.Control as="select" defaultValue={weap['ascension']} onChange={(event) => {
                                                setWeap(weap => ({ ...weap, ascension: Number(event.target.value) }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                {ASCENSIONS.map((ascension) => (
                                                    <option key={ascension}>{ascension}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                    <br /><br /><br /><br />
                    <Row> {/**Skill damages */}
                        {/**LMB=default, E=skill, Q=burst */}
                        <Col>
                            {skillDefault(char, skillLevels, stats)}
                        </Col>
                        <Col>
                            {skillSkill(char, skillLevels, stats)}
                        </Col>
                        <Col>
                            {skillBurst(char, skillLevels, stats)}
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row> {/**Artifact Display: Flower */}
                        <Card>
                            Flower
                            <Form key="Flower">
                                <Form.Group controlId="MainStat">
                                    <Form.Label>Main Stat</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control as="select" defaultValue={flower['mainStat']} onChange={(event) => {
                                                setFlower(flower => ({ ...flower, mainStat: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                <option key={"HP_BASE"}>{"HP_BASE"}</option>{"HP_BASE"}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                setFlower(flower => ({ ...flower, mainVal: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 1">
                                            <Form.Label>Substat 1</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={flower['sub1']} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, sub1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 2">
                                            <Form.Label>Substat 2</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={flower['sub2']} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, sub2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 3">
                                            <Form.Label>Substat 3</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={flower['sub3']} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, sub3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 4">
                                            <Form.Label>Substat 4</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={flower['sub4']} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, sub4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Row>
                    <Row> {/**Artifact Display: Feather */}
                        <Card>
                            Feather
                            <Form key="Feather">
                                <Form.Group controlId="MainStat">
                                    <Form.Label>Main Stat</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control as="select" defaultValue={feather['mainStat']} onChange={(event) => {
                                                setFeather(feather => ({ ...feather, mainStat: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                <option key={"ATK_BASE"}>{"ATK_BASE"}</option>{"ATK_BASE"}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                setFeather(feather => ({ ...feather, mainVal: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 1">
                                            <Form.Label>Substat 1</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={feather['sub1']} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, sub1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 2">
                                            <Form.Label>Substat 2</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={feather['sub2']} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, sub2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 3">
                                            <Form.Label>Substat 3</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={feather['sub3']} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, sub3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 4">
                                            <Form.Label>Substat 4</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={feather['sub4']} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, sub4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Row>
                    <Row> {/**Artifact Display: Hourglass */}
                        <Card>
                            Hourglass
                            <Form key="Hourglass">
                                <Form.Group controlId="MainStat">
                                    <Form.Label>Main Stat</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control as="select" defaultValue={hourglass['mainStat']} onChange={(event) => {
                                                setHourglass(hourglass => ({ ...hourglass, mainStat: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                {ART_MAIN_HOURGLASS.map((stat) => (
                                                    <option key={stat}>{stat}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                setHourglass(hourglass => ({ ...hourglass, mainVal: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 1">
                                            <Form.Label>Substat 1</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hourglass['sub1']} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, sub1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 2">
                                            <Form.Label>Substat 2</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hourglass['sub2']} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, sub2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 3">
                                            <Form.Label>Substat 3</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hourglass['sub3']} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, sub3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 4">
                                            <Form.Label>Substat 4</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hourglass['sub4']} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, sub4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Row>
                    <Row> {/**Artifact Display: Goblet */}
                        <Card>
                            Goblet
                            <Form key="Goblet">
                                <Form.Group controlId="MainStat">
                                    <Form.Label>Main Stat</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control as="select" defaultValue={goblet['mainStat']} onChange={(event) => {
                                                setGoblet(goblet => ({ ...goblet, mainStat: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                {ART_MAIN_GOBLET.map((stat) => (
                                                    <option key={stat}>{stat}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                setGoblet(goblet => ({ ...goblet, mainVal: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 1">
                                            <Form.Label>Substat 1</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={goblet['sub1']} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, sub1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 2">
                                            <Form.Label>Substat 2</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={goblet['sub2']} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, sub2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 3">
                                            <Form.Label>Substat 3</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={goblet['sub3']} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, sub3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 4">
                                            <Form.Label>Substat 4</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={goblet['sub4']} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, sub4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Row>
                    <Row> {/**Artifact Display: Hat */}
                        <Card>
                            Hat
                            <Form key="Hat">
                                <Form.Group controlId="MainStat">
                                    <Form.Label>Main Stat</Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control as="select" defaultValue={hat['mainStat']} onChange={(event) => {
                                                setHat(hat => ({ ...hat, mainStat: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }}>
                                                {ART_MAIN_HAT.map((stat) => (
                                                    <option key={stat}>{stat}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                setHat(hat => ({ ...hat, mainVal: event.target.value }));
                                                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                            }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 1">
                                            <Form.Label>Substat 1</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hat['sub1']} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, sub1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val1: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 2">
                                            <Form.Label>Substat 2</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hat['sub2']} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, sub2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val2: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="Substat 3">
                                            <Form.Label>Substat 3</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hat['sub3']} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, sub3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val3: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="Substat 4">
                                            <Form.Label>Substat 4</Form.Label>
                                            <Row>
                                                <Col>
                                                    <Form.Control as="select" defaultValue={hat['sub4']} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, sub4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.1" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val4: event.target.value }));
                                                        setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
                                                    }} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Calculator;