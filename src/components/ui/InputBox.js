import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp } = props;

    return (
        <input autoFocus
            type="text"
            className="form-control add-story"
            value={value}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            placeholder="Add new story"
        />
    );
}

export default enhance(InputBox);
