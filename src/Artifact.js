import React, { useEffect, useState } from 'react';

// needs a dictionary of artifact set bonuses
import { STATS } from './CharStats';

export default function Artifact(props) {
    const [flower, setFlower] = useState([]);
    const [feather, setFeather] = useState([]);
    const [time, setTime] = useState([]);
    const [cup, setCup] = useState([]);
    const [hat, setHat] = useState([]);

    return (
        <div className="artifact">
            <p>
                filler TODO
            </p>
        </div>
    )
}