import React from 'react';

// Char is read/write
// Stats is read only
export function Skills(props) {
    // props.char is char
    console.log(props.char)
    
    // gonna wanna use popovers (react-bootstrap)
    return (
        <div className="skills">
            {console.log(props.char)}
        </div>
    )
}

export default Skills;