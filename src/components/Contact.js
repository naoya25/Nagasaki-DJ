import React from 'react';
import Grid from '@mui/material/Grid';
import Content from './Content';

const Contact = () => {
    return (
        <>
            <Grid container direction="column">
                <div style={{ padding: 30 }}>
                    <Content />
                </div>
            </Grid>
        </>
    );
};

export default Contact
