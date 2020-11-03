import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form'

// Toggleables about passive abilities and shit
// Dropdowns to change the char and weap values
export default function Dropdown(props) {
    // pulling these from props
    let charInfo = props.charInfo;
    let setCharInfo = props.setCharInfo;
    let weapInfo = props.weapInfo;
    let setWeapInfo = props.setWeapInfo;
    // can modify stats
    let statState = props.statState;
    let setStatState = props.setStatState;
    setStatState(statState);

    // changing character with dropdowns
    function ChangeChar(charInfo, setCharInfo, statState, setStatState) {
        // making states for this char
        const [char, setChar] = useState(charInfo['CHAR_NAME']);
        const [charLevel, setCharLevel] = useState(charInfo['CHAR_ASCENSION']);
        const [charAscension, setCharAscension] = useState(charInfo['CHAR_LEVEL']);
        // TODO Replace these with const arrays in a different file with limited characters
        let chars=['Amber', 'Razor'];
        let levels=[1,2,3,4,5,6,7,8,9,70];
        let ascensions=[0,1,2,3,4,5,6]

        useEffect(() => {
            // update stats
        }, [char, charLevel, charAscension, charInfo]);

        // TODO replace with dropdowns
        return (
            <div className="charChange">
                <Form>
                    {/* To select level */}
                    <Form.Control as="select" defaultValue={char} onChange={setChar(char)}>
                        {chars.map((char) => (
                            <option>{char}</option>
                        ))}
                    </Form.Control>
                    {/* To select level */}
                    <Form.Control as="select" defaultValue={charLevel} onChange={setCharLevel(charLevel)}>
                        {levels.map((level) => (
                            <option>{level}</option>
                        ))}
                    </Form.Control>
                    {/* To select ascension */}
                    <Form.Control as="select" defaultValue={charAscension} onChange={setCharAscension(charAscension)}>
                        {ascensions.map((ascension) => (
                            <option>{ascension}</option>
                        ))}
                    </Form.Control>
                </Form>
            </div>
        )
    }

    // changing weapon with dropdowns
    function ChangeWeapon(weapInfo, setWeapInfo, statState, setStatState) {
        // making states for this gear
        const [weap, setWeap] = useState(weapInfo['WEAP_NAME'])
        const [weapLevel, setWeapLevel] = useState(weapInfo['WEAP_ASCENSION']);
        const [weapAscension, setWeapAscension] = useState(weapInfo['WEAP_LEVEL']);
        // TODO Replace these with const arrays in a different file with limited characters
        let weaps=['Favonius Greatsword', 'The Bell'];
        let levels=[1,2,3,4,5,6,7,8,9,70];
        let ascensions=[0,1,2,3,4,5,6]

        useEffect(() => {
            // update stats
        }, [weapInfo, weap, weapLevel, weapAscension]);

        // TODO replace with dropdowns
        return (
            <div className="charChange">
                <Form>
                    {/* To select level */}
                    <Form.Control as="select" defaultValue={weap} onChange={setWeap(weap)}>
                        {weaps.map((weap) => (
                            <option>{weap}</option>
                        ))}
                    </Form.Control>
                    {/* To select level */}
                    <Form.Control as="select" defaultValue={weapLevel} onChange={setWeapLevel(weapLevel)}>
                        {levels.map((level) => (
                            <option>{level}</option>
                        ))}
                    </Form.Control>
                    {/* To select ascension */}
                    <Form.Control as="select" defaultValue={weapAscension} onChange={setWeapAscension(weapAscension)}>
                        {ascensions.map((ascension) => (
                            <option>{ascension}</option>
                        ))}
                    </Form.Control>
                </Form>
            </div>
        )
    }

    return (
        <div className="drop">
            {ChangeChar(charInfo, setCharInfo, statState, setStatState)}
            {ChangeWeapon(weapInfo, setWeapInfo, statState, setStatState)}
        </div>
    )
}