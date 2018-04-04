import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    let inputStyle = { marginBottom: '5px' };
    let errorIcon = null;

    if (touched && error) {
        inputStyle = {
            marginBottom: '5px',
            borderBottom: '2px solid #ff7373'
        };

        errorIcon = <i className="tiny material-icons right">error</i>;
    }

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={inputStyle} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {errorIcon}
                {touched && error}
            </div>
        </div>
    );
};
