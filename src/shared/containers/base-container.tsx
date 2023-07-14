import React, { PropsWithChildren } from 'react';
import Grid from '@mui/material/Grid';


export const BaseContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Grid container >
            {children}
        </Grid>
    );
}