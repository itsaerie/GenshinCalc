import React, { useState } from 'react';

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

import { Artifact } from './Artifact';
import { Dropdown } from './Dropdown';
import { Skills } from './Skills';
import { Stats } from './Stats';
import { STATS } from './CharStats';

// This space is for the default values because amber is heccin' amazing I promise
let baseCharInfo = {
    'CHAR_NAME': 'Amber',
    'CHAR_ASCENSION': 0,
    'CHAR_LEVEL': 0
}
let baseWeapInfo = {
    'WEAP_NAME': 'Favonius Greatsword',
    'WEAP_ASCENSION': 0,
    'WEAP_LEVEL': 0
}
// We're going map each variable in the array to a strongly typed float
let baseStatDict = Object.assign({}, ...STATS.map((stat) => ({ stat: 0.0 })))


// Container for all of the different things in the calculator
export function Calculator() {
    // Shared char, weapon, stats
    const [charInfo, setCharInfo] = useState(baseCharInfo);
    const [weapInfo, setWeapInfo] = useState(baseWeapInfo);
    const [statState, setStatState] = useState(baseStatDict);

    // 3-column container:
    //  left = stats
    //  middle = dropdown above skills
    //  right = artifact
    return (
        <Container>
            <Col>
                {Stats(
                    charInfo, 
                    weapInfo, 
                    statState
                )}
            </Col>
            <Col xs={7}>
                {Dropdown(
                    charInfo, setCharInfo,
                    weapInfo, setWeapInfo,
                    statState, setStatState
                )}
                {Skills(
                    charInfo, setCharInfo,
                    statState
                )}
            </Col>
            <Col xs={3}>
                {Artifact(
                    charInfo, setCharInfo,
                    weapInfo, setWeapInfo,
                    statState, setStatState
                )}
            </Col>
        </Container>
    )
};

export default Calculator;