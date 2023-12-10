import React, { useState } from 'react';
import './CSS/Input.css'

//Input  de texto sem restricoes
// aceita numero, letras, caracteres especiais
// maxLength

export default function InputTexto({ nome, maximo, onChange, texto }) {    

    return (
        <label className='label-input-span'>
            <span>{nome}</span>
            <input
                type='text'   
                className='input' 
                maxLength={maximo}  
                onChange={(value) => onChange(value.target.value)}
                value={texto}
            />
        </label>
    )
}