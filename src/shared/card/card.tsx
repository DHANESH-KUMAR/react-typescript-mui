import React, { PropsWithChildren } from 'react';
import MUICard from '@mui/material/Card';

interface CardProps extends PropsWithChildren {

}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <MUICard>
            {
                children
            }
        </MUICard>
    )
}