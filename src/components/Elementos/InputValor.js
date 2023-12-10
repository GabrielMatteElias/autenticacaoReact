import * as React from 'react';
import CurrencyInput from 'react-currency-input-field';
import './CSS/Input.css'

//Input de valores aceitando:
// apenas virgulas(nao ponto)
// apenas numeros
// nao aceita numeros negativos
// maxLength

export default function InputValor({ nome, maximo, onChange, value }) {

    return (
        <label className='label-input-span'>
            <span>{nome}</span>
            <CurrencyInput
                className='input'
                name="input-valor-virgula"
                decimalsLimit={2}
                allowNegativeValue={false}
                maxLength={maximo}
                value={value}
                disableGroupSeparators={false}
                onValueChange={(value) => onChange(value)}
            />
        </label>
    )
}