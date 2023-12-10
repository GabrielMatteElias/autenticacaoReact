import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import BotaoModalBase from './Botao';
import Box from '@mui/material/Box';

export default function CardBase({ largura, titulo, conteudo, textoBotao, funcao }) {
    return (
        <Card sx={{ width: largura }}>
            <CardHeader
                sx={{ backgroundColor: 'background.principal', color: 'text.secundaria', textShadow: '1px 1px 1px black' }}
                align='center'
                title={titulo}
            />
            <CardContent>
                {conteudo}                
            </CardContent>

        </Card>
    );
}