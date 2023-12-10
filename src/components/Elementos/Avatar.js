import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AvatarUsuario({ foto }) {

    const [conteudoAvatar, setConteudoAvatar] = useState('')

    // useEffect(() => {
    //     if (foto) {
    //         const foto = sessionStorage.getItem('usu_foto')
    //         setConteudoAvatar(foto)
    //     } else {
    //         const nome = sessionStorage.getItem('usu_nome_completo')
    //         const nomeArray = nome.split(' ')
    //         let primeiraLetraPrimeiroItem = nomeArray[0][0];
    //         let ultimaLetraUltimoItem = nomeArray[nomeArray.length - 1][0];
    //         setConteudoAvatar(primeiraLetraPrimeiroItem + ultimaLetraUltimoItem)
    //     }
    // }, [])

    return (
        <React.Fragment>
            <Avatar sx={{ bgcolor: 'background.principal' }}>{foto ? <img src={conteudoAvatar}/> : 'GM'}</Avatar>
        </React.Fragment>
    );
}
