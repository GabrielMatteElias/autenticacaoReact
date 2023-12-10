import React, { useState } from 'react'
import InputValor from '../Elementos/InputValor'
import TextArea from '../Elementos/TextArea'
import InputTexto from '../Elementos/InputTexto'
import Box from '@mui/material/Box';
import BotaoModal from '../Elementos/Botao';
import SelectPadrao from '../Elementos/Select';

const json = [
    {
        unidade: 'SEC',
        nome: 'Securitizadora',
        codigo: '11111'
    },
    {
        unidade: 'PA4',
        nome: 'Poa quarto andar',
        codigo: '77777'
    },
    {
        unidade: 'PA5',
        nome: 'Poa quinto andar',
        codigo: '444444'
    },
    {
        unidade: 'RIO',
        nome: 'Rio de janeiro hoepers',
        codigo: '22222'
    },
]

const ModalPda = () => {
    const [texto, setTexto] = useState('')
    const [unidade, setUnidade] = useState('')
    const [valorInput, setValorInput] = useState('')


    function executarBotao() {
        const valorFormatado = valorInput.replace(',','.')
        alert(`Unidade: ${unidade}, Cidade: ${texto}, Valor: ${valorFormatado}`)
    }

    return (
        <div style={{ padding: '1rem 1rem 0 5rem ', display: ' flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <InputTexto nome={'Cidade'} maximo={81} onChange={setTexto} texto={texto} />

                <SelectPadrao options={json} valueRetorno="codigo" campos={['unidade', 'nome']} onSelect={setUnidade} />

                <InputValor nome={'Valor total'} onChange={setValorInput} value={valorInput}/>
            </div>
            <TextArea nome={'Justificativa'} />

            <Box className={'container-botao-modal-base'}>
                <BotaoModal textoBotao={'Alertar'} funcao={executarBotao} />
            </Box>
        </div>
    )
}

export default ModalPda