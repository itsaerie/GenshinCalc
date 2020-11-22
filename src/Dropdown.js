import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { rerender } from './index';

// Toggleables about passive abilities and shit
// Dropdowns to change the char and weap values
export function Dropdown(props) {
    // pulling these objects from props:
    //  character is props.char
    //  weapon is props.weap
    var data = {
        "chars": [
            "Amber",
            "Ningguang",
            "Razor"
        ],
        "weapons": [
            "Favonius Greatsword",
            "The Bell"
        ],
        "levels": [
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
        ],
        "ascensions": [
            0, 1, 2, 3, 4, 5, 6
        ]
    };
    let chars = data["chars"];
    let weaps = data["weapons"];
    let levels = data["levels"];
    let ascensions = data["ascensions"]
    // import this from a json file- data.json

    return (
        <div className="drop">
            <Form key="classChange">
                <Form.Group controlId="Character Selection">
                    <Form.Label>Character</Form.Label>
                    {/* To select level */}
                    <Form.Control as="select" defaultValue={chars[0]} onChange={(event) => {
                        props.char.setName(event.target.value);
                        rerender();
                    }}>
                        {chars.map((char) => (
                            <option key={char}>{char}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Level</Form.Label>
                        {/* To select level */}
                        <Form.Control as="select" defaultValue={levels[0]} onChange={(event) => {
                            props.char.setLevel(event.target.value);
                        }}>
                            {levels.map((level) => (
                                <option key={level}>{level}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Ascension</Form.Label>
                        {/* To select ascension */}
                        <Form.Control as="select" defaultValue={ascensions[0]} onChange={(event) => {
                            props.char.setAscension(event.target.value);
                        }}>
                            {ascensions.map((ascension) => (
                                <option key={ascension}>{ascension}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Weapon</Form.Label>
                    {/* To select level */}
                    <Form.Control as="select" defaultValue={weaps[0]} onChange={(event) => {
                        props.weap.setName(event.target.value);
                    }}>
                        {weaps.map((weap) => (
                            <option key={weap}>{weap}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Level</Form.Label>
                        {/* To select level */}
                        <Form.Control as="select" defaultValue={levels[0]}  onChange={(event) => {
                            props.weap.setLevel(event.target.value);
                        }}>
                            {levels.map((level) => (
                                <option key={level}>{level}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Ascension</Form.Label>
                        {/* To select ascension */}
                        <Form.Control as="select" defaultValue={ascensions[0]}  onChange={(event) => {
                            props.weap.setAscension(event.target.value);
                        }}>
                            {ascensions.map((ascension) => (
                                <option key={ascension}>{ascension}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    )
}

export default Dropdown;