import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// all fields are read-only
export function Stats(props) {
    //  stats is props.stats
    //console.log(Object.keys(props.stats.stats))

    // legit go do all the calculations given the character, weapon, and artifacts

    return (
        <div className="stats">
            <Row>
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
                                {props.stats.stats["PYRO_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["PYRO_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["PYRO_RESISTANCE"]}
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
                                {props.stats.stats["HYDRO_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["HYDRO_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["HYDRO_RESISTANCE"]}
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
                                {props.stats.stats["DENDRO_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["DENDRO_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["DENDRO_RESISTANCE"]}
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
                                {props.stats.stats["ELECTRO_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["ELECTRO_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["ELECTRO_RESISTANCE"]}
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
                                {props.stats.stats["ANEMO_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["ANEMO_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["ANEMO_RESISTANCE"]}
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
                                {props.stats.stats["CRYO_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["CRYO_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["CRYO_RESISTANCE"]}
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
                                {props.stats.stats["GEO_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["GEO_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["GEO_RESISTANCE"]}
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
                                {props.stats.stats["PHYSICAL_DAMAGE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["PHYSICAL_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["PHYSICAL_RESISTANCE"]}
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
                                {props.stats.stats["HP_BASE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["HP_PERC"]}
                            </Col>
                            <Col>
                                {props.stats.stats["HP_TOTAL"]}
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
                                {props.stats.stats["ATK_BASE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["ATK_PERC"]}
                            </Col>
                            <Col>
                                {props.stats.stats["ATK_TOTAL"]}
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
                                {props.stats.stats["DEF_BASE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["DEF_PERC"]}
                            </Col>
                            <Col>
                                {props.stats.stats["DEF_TOTAL"]}
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
                                {props.stats.stats["ELEMENTAL_MASTERY"]}
                            </Col>
                            <Col>
                                {props.stats.stats["ENERGY_RECHARGE"]}
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
                                {props.stats.stats["CRIT_RATE"]}
                            </Col>
                            <Col>
                                {props.stats.stats["CRIT_DAMAGE"]}
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
                                {props.stats.stats["HEAL_BONUS"]}
                            </Col>
                            <Col>
                                {props.stats.stats["HEAL_RECEIVED"]}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Stats;