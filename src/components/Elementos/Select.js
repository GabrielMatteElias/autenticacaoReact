import React from 'react';

const SelectPadrao = ({ nome, options, valueRetorno, onSelect, campos }) => {

    return (
        <label>
            <span>{nome}</span>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value=''></option>
                    {options.map((option) => (
                        <option key={option.codigo} value={option[valueRetorno]}>
                            {`${option[campos[0]]} - ${option[campos[1]]}`}
                        </option>
                    ))}
            </select>
        </label>
    );
};

export default SelectPadrao;