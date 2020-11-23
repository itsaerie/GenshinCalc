import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const STATS = [
    'HP_BASE', 'HP_PERC', 'HP_TOTAL',
    'ATK_BASE', 'ATK_PERC', 'ATK_TOTAL',
    'DEF_BASE', 'DEF_PERC', 'DEF_TOTAL',
    'ELEMENTAL_MASTERY',
    'STAMINA', // this shit is useless
    'CRIT_RATE', 'CRIT_DAMAGE',
    'HEAL_BONUS', 'HEAL_RECEIVED',
    'ENERGY_RECHARGE',
    'COOLDOWN_REDUCTION',
    'POWERFUL_SHIELD',
    'PYRO_DAMAGE', 'PYRO_BONUS', 'PYRO_RESISTANCE',
    'HYDRO_DAMAGE', 'HYDRO_BONUS', 'HYDRO_RESISTANCE',
    'DENDRO_DAMAGE', 'DENDRO_BONUS', 'DENDRO_RESISTANCE',
    'ELECTRO_DAMAGE', 'ELECTRO_BONUS', 'ELECTRO_RESISTANCE',
    'ANEMO_DAMAGE', 'ANEMO_BONUS', 'ANEMO_RESISTANCE',
    'CRYO_DAMAGE', 'CRYO_BONUS', 'CRYO_RESISTANCE',
    'GEO_DAMAGE', 'GEO_BONUS', 'GEO_RESISTANCE',
    'PHYSICAL_DAMAGE', 'PHYSICAL_BONUS', 'PHYSICAL_RESISTANCE',
]
const ASCENSIONS = [
    0, 1, 2, 3, 4, 5, 6
]
const CHARS = [
    "Amber",
    "Ningguang",
    "Razor"
]
const LEVELS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90
]
const WEAPONS = {
    "Bow": ['Favonius Warbow'],
    "Catalyst": [],
    "Greatsword": ["The Bell"],
    "Spear": [],
    "Sword": [],
}
const ART_SUBSTATS = [
    'HP_BASE', 'HP_PERC',
    'ATK_BASE', 'ATK_PERC',
    'DEF_BASE', 'DEF_PERC',
    'ELEMENTAL_MASTERY',
    'CRIT_RATE', 'CRIT_DAMAGE',
    'ENERGY_RECHARGE'
]
const ART_MAIN_HOURGLASS = [
    'HP_PERC',
    'DEF_PERC',
    'ATK_PERC',
    'ELEMENTAL_MASTERY',
    'ENERGY_RECHARGE'
]
const ART_MAIN_GOBLET = [
    'HP_PERC',
    'DEF_PERC',
    'ATK_PERC',
    'ELEMENTAL_MASTERY',
    'PYRO_BONUS',
    'HYDRO_BONUS',
    'DENDRO_BONUS',
    'ELECTRO_BONUS',
    'ANEMO_BONUS',
    'CRYO_BONUS',
    'GEO_BONUS',
    'PHYSICAL_BONUS',
]
const ART_MAIN_HAT = [
    'HP_PERC',
    'DEF_PERC',
    'ATK_PERC',
    'ELEMENTAL_MASTERY',
    'CRIT_RATE', 'CRIT_DAMAGE',
    'HEAL_BONUS'
]
// We're going map each variable in the array to a strongly typed float
let baseStatDict = STATS.reduce((a, x) => ({ ...a, [x]: 0.0 }), {})

// Container for all of the different things in the calculator
export function Calculator() {
    // basic char stuff
    const [char, setChar] = useState(
        {
            name: CHARS[0],
            level: LEVELS[0],
            ascension: ASCENSIONS[0],
            type: "Bow"
        }
    );
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
            mainStat: 'ATK',
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
    const [stats, setStats] = useState(baseStatDict)

    // wonder if i update stats here
    //setStats(stats => ({...stats, HP_BASE: char['HP_BASE']+weap['HP_BASE']+flower['HP_BASE']}))

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
                        <Form key="classChange">
                            <Form.Group controlId="Character Selection">
                                <Form.Label>Character</Form.Label>
                                {/* To select char */}
                                <Form.Control as="select" defaultValue={char['name']} onChange={(event) => {
                                    setChar(char => ({ ...char, name: event.target.value }));
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
                                        setChar(char => ({ ...char, level: Number(event.target.value) }))
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
                                        setChar(char => ({ ...char, level: Number(event.target.value) }))
                                    }}>
                                        {ASCENSIONS.map((ascension) => (
                                            <option key={ascension}>{ascension}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="Weapon Selection">
                                <Form.Label>Weapon</Form.Label>
                                {/* To select weapon */}
                                <Form.Control as="select" defaultValue={weap['name']} onChange={(event) => {
                                    setWeap(weap => ({ ...weap, name: event.target.value }));
                                }}>
                                    {WEAPONS[char.type].map((char) => (
                                        <option key={char}>{char}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Level</Form.Label>
                                    {/* To select level */}
                                    <Form.Control as="select" defaultValue={weap['level']} onChange={(event) => {
                                        setWeap(weap => ({ ...weap, level: Number(event.target.value) }))
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
                                        setWeap(weap => ({ ...weap, level: Number(event.target.value) }))
                                    }}>
                                        {ASCENSIONS.map((ascension) => (
                                            <option key={ascension}>{ascension}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Row>
                    <br /><br /><br /><br />
                    <Row>
                        Skills
                        -{char.name}
                        -{char.level}
                        -{char.ascension}
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
                                                setFlower(flower => ({ ...flower, mainStat: event.target.value }))
                                            }}>
                                                <option key={"HP_BASE"}>{"HP_BASE"}</option>{"HP_BASE"}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                setFlower(flower => ({ ...flower, mainVal: event.target.value }));
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
                                                        setFlower(flower => ({ ...flower, sub1: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val1: event.target.value }));
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
                                                        setFlower(flower => ({ ...flower, sub2: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val2: event.target.value }));
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
                                                        setFlower(flower => ({ ...flower, sub3: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val3: event.target.value }));
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
                                                        setFlower(flower => ({ ...flower, sub4: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFlower(flower => ({ ...flower, val4: event.target.value }));
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
                                                setFeather(feather => ({ ...feather, mainStat: event.target.value }))
                                            }}>
                                                <option key={"ATK_BASE"}>{"ATK_BASE"}</option>{"HP_BASE"}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                setFeather(feather => ({ ...feather, mainVal: event.target.value }));
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
                                                        setFeather(feather => ({ ...feather, sub1: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val1: event.target.value }));
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
                                                        setFeather(feather => ({ ...feather, sub2: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val2: event.target.value }));
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
                                                        setFeather(feather => ({ ...feather, sub3: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val3: event.target.value }));
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
                                                        setFeather(feather => ({ ...feather, sub4: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setFeather(feather => ({ ...feather, val4: event.target.value }));
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
                                                setHourglass(hourglass => ({ ...hourglass, mainStat: event.target.value }))
                                            }}>
                                                {ART_MAIN_HOURGLASS.map((stat) => (
                                                    <option key={stat}>{stat}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                setHourglass(hourglass => ({ ...hourglass, mainVal: event.target.value }));
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
                                                        setHourglass(hourglass => ({ ...hourglass, sub1: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val1: event.target.value }));
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
                                                        setHourglass(hourglass => ({ ...hourglass, sub2: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val2: event.target.value }));
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
                                                        setHourglass(hourglass => ({ ...hourglass, sub3: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val3: event.target.value }));
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
                                                        setHourglass(hourglass => ({ ...hourglass, sub4: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHourglass(hourglass => ({ ...hourglass, val4: event.target.value }));
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
                                                setGoblet(goblet => ({ ...goblet, mainStat: event.target.value }))
                                            }}>
                                                {ART_MAIN_GOBLET.map((stat) => (
                                                    <option key={stat}>{stat}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                setGoblet(goblet => ({ ...goblet, mainVal: event.target.value }));
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
                                                        setGoblet(goblet => ({ ...goblet, sub1: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val1: event.target.value }));
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
                                                        setGoblet(goblet => ({ ...goblet, sub2: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val2: event.target.value }));
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
                                                        setGoblet(goblet => ({ ...goblet, sub3: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val3: event.target.value }));
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
                                                        setGoblet(goblet => ({ ...goblet, sub4: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setGoblet(goblet => ({ ...goblet, val4: event.target.value }));
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
                                                setHat(hat => ({ ...hat, mainStat: event.target.value }))
                                            }}>
                                                {ART_MAIN_HAT.map((stat) => (
                                                    <option key={stat}>{stat}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                setHat(hat => ({ ...hat, mainVal: event.target.value }));
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
                                                        setHat(hat => ({ ...hat, sub1: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val1: event.target.value }));
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
                                                        setHat(hat => ({ ...hat, sub2: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val2: event.target.value }));
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
                                                        setHat(hat => ({ ...hat, sub3: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val3: event.target.value }));
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
                                                        setHat(hat => ({ ...hat, sub4: event.target.value }))
                                                    }}>
                                                        {ART_SUBSTATS.map((substat) => (
                                                            <option key={substat}>{substat}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='input' type="number" step="0.01" placeholder={0} onChange={(event) => {
                                                        setHat(hat => ({ ...hat, val4: event.target.value }));
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