import React, {useState} from 'react';

const artifact = <Artifact />;
const skill = <Skill />;
const stat = <Stats />;
const dropdown = <Dropdown />;

React.DOM.render(artifact, document.getElementById('arts'))
React.DOM.render(skill, document.getElementById('skill'))
React.DOM.render(stat, document.getElementById('stat'))
React.DOM.render(dropdown, document.getElementById('drop'))