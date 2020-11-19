import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Artifact } from './Artifact';
import { Dropdown } from './Dropdown';
import { Skills } from './Skills';
import { Stats } from './Stats';
import { Character, Weapon, Artifacts, CalcStats } from './Wrappers'

// We're going map each variable in the array to a strongly typed float
//let baseStatDict = Object.assign({}, ...STATS.map((stat) => ({ stat: 0.0 })))

// Container for all of the different things in the calculator
export function Calculator() {
    // Shared char, weapon, stats
    let char = new Character();
    let weap = new Weapon();
    let florafact = new Artifacts('Flower');
    let featherfact = new Artifacts('Feather');
    let timefact = new Artifacts('Time');
    let cupfact = new Artifacts('Cup');
    let hatifact = new Artifacts('Hat');
    let stats = new CalcStats();

    // 3-column container:
    //  left = stats
    //  middle = dropdown above skills
    //  right = artifact
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Stats
                        char={char} weap={weap}
                        florafact={florafact}
                        featherfact={featherfact}
                        timefact={timefact}
                        cupfact={cupfact}
                        hatifact={hatifact}
                        stats={stats}
                    />
                </Col>
                <Col>
                    <Row>
                        <Dropdown char={char} weap={weap} />
                    </Row>
                    <br /><br /><br /><br />
                    <Row>
                        {Skills(
                            char
                        )}
                    </Row>
                </Col>
                <Col>
                    <Artifact
                        florafact={florafact}
                        featherfact={featherfact}
                        timefact={timefact}
                        cupfact={cupfact}
                        hatifact={hatifact}
                    />
                </Col>
            </Row>
        </Container>
    )
};

export default Calculator;