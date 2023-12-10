import React, { useState } from 'react'
import ModalBase from './components/Elementos/Modal'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SelectPadrao from './components/Elementos/Select';
import InputValor from './components/Elementos/InputValor';
import InputTexto from './components/Elementos/InputTexto';
import TextArea from './components/Elementos/TextArea';
import AvatarUsuario from './components/Elementos/Avatar';
import CardBase from './components/Elementos/Card';
import ModalPda from './components/Modals/ConteudoModalPda';

const theme = createTheme({
  palette: {
    background: {
      principal: '#557483',
      secundario: '#ef7c00',

    },
    text: {
      principal: '#557483',
      secundaria: '#fff',
    },
    action: {
      active: '#001E3C',
      hover: '#ef7b00a2'
    },
    success: {
      main: '#efc700',
      dark: '#009688',
    },
  },
});

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

const App = () => {

  const handleSelect = (selectedValue) => {
    // Faça algo com o valor selecionado
    console.log('Opção selecionada:', selectedValue);
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '15px' }}>
      <ThemeProvider theme={theme}>

        <ModalBase titulo={'PDA'} textoBotaoModal={'Pda'} textoBotao={'gerar relatorio'} >
          <ModalPda />
        </ModalBase>

        <SelectPadrao options={json} valueRetorno="codigo" campos={['unidade', 'nome']} />

        <InputTexto nome={'Cidade'} maximo={8} />

        <TextArea nome={'Justificativa'} />

        <InputValor nome={'Valor total'} />

        <AvatarUsuario foto={false} />

        <CardBase largura={'80%'} titulo={'Renegociação'} textoBotao={'Card botao'} funcao={'pix'} conteudo={<InputValor nome={'Valor total'} />} />


      </ThemeProvider >

    </div>
  )
}

export default App