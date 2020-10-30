import React, { useState } from 'react';

import { Artifact } from './Artifact';
import { Dropdown } from './Dropdown';
import { Skill } from './Skill';
import { Stats } from './Stats';
import { STATS } from './CharStats';

// Container for all of the different things in the calculator
export default function Calculator() {
    // We're going map each variable in the array to a strongly typed float
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
    let baseStatDict = Object.assign({}, ...STATS.map((stat) => ({ stat: 0.0 })))
    // Shared char, weapon, stats
    const [charInfo, setCharInfo] = useState(
        baseCharInfo
    );
    const [weapInfo, setWeapInfo] = useState(
        baseWeapInfo
    );
    const [statState, setStatState] = useState(
        baseStatDict
    );
    
    // 3-column container:
    //  left = stats
    //  middle = dropdown above skills
    //  right = artifact
    return (
        <div className="calc">
            <div class="column">
                {Stats(
                    charInfo, setCharInfo,
                    weapInfo, setWeapInfo,
                    statState, setStatState
                )}
            </div>
            <div class="column">
                {Dropdown(
                    charInfo, setCharInfo,
                    weapInfo, setWeapInfo,
                    statState, setStatState
                )}
                {Skill(
                    charInfo, setCharInfo,
                    weapInfo, setWeapInfo,
                    statState, setStatState
                )}
            </div>
            <div class="column">
                {Artifact(
                    charInfo, setCharInfo,
                    weapInfo, setWeapInfo,
                    statState, setStatState
                )}
            </div>
        </div>
    )
};