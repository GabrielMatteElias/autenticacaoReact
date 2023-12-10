import * as React from 'react';
import Button from '@mui/material/Button';

export default function BotaoModal({ textoBotao, funcao }) {

    return (
        <Button onClick={funcao}
            sx={{
                backgroundColor: 'background.secundario',
                color: 'text.secundaria',
                boxShadow: 3,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.85)',
                width: '80%',
                "&:hover": {
                    backgroundColor: 'action.hover',

                },
            }}>
            {textoBotao}
        </Button>
    );
}