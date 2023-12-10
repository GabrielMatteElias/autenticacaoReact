import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import '../Elementos/CSS/Modal.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

export default function ModalBase({ titulo, textoBotaoModal, children }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>{textoBotaoModal}</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <header style={{ backgroundColor: '#557483', textAlign: 'center', padding: '1.5rem' }}>
                        <Typography sx={{ margin: 0, color: 'text.secundaria', fontSize: '2rem', textShadow: '1px 1px 1px black' }} variant='h2'>{titulo}</Typography>
                    </header>
                    {children}

                </Box>
            </Modal>
        </div>
    );
}
