import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface Item {
    displayText: string;
    value: string;
};

interface DropdownProps {
    onChange: (event: SelectChangeEvent, item: Item) => void;
    items: Array<Item>;
}


export const Dropdown: React.FC<DropdownProps> = ({ items, onChange }) => {

    const changeHandler = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        console.log(event);
    };

    return (
        <Select onChange={changeHandler}>
            {
                items.map((item) => (
                    <option value={item.value}>{item.displayText}</option>
                ))
            }
        </Select>
    )
}