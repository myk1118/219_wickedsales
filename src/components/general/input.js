import React from 'react';

export default ({ col = 's12', input, id, label, meta: { error, touched }, type = 'text' }) => {
    return (
        <div className={`input-field col ${col}`}>
            <input {...input} id={id} type={type} />
            <label htmlFor={id}>{label}</label>
            <p className="red-text text-darken-2">{touched && error}</p>
        </div >
    );
}