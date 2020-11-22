import React from 'react';

// Char is read/write
// Stats is read only
export function Skills(props) {
    // props.char is char
    
    // gonna wanna use popovers (react-bootstrap)
    return (
        <div className="skills">
            {props.char.name}
            {console.log(props.char)}
        </div>
    )
}

export default Skills;