import React from 'react';
import { Box } from '@mui/material';

const MyTitle = (props: any) => {

    return (
        <Box sx={{ marginTop: props.smallScreen ? '2rem' : '3rem', fontSize: props.smallScreen ? '2rem' : '3rem', fontWeight: '700', color: '#fff', textAlign: 'center'  }}>
            <h1 className='TitleSection' > {props.texto} </h1>
        </Box>
    )
}

export default MyTitle;