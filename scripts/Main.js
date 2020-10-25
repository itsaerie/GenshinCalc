import React, {useState} from 'react';

const [char, setChar] = useState("amber");
const [charLevel, setCharLevel] = useState(1);
const [charAscension, setCharAscension] = useState(0);

const calculator = <Calculator character={char} />;

React.DOM.render(calculator, document.getElementById('calc'))