import * as React from 'react';
import './CSS/Input.css'

//Input  de texto sem restricoes
// aceita numero, letras, caracteres especiais
// maxLength

export default function TextArea({ nome, maximo }) {
    return (
        <label className='label-input-span'>
            <span>{nome}</span>
            <textarea
                type='text'
                className='input textarea'
                maxLength={maximo}
                onChange={(value) => console.log(value)}
            />
        </label>
    )
}