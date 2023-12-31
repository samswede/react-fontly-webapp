import styles from './SearchBar.module.css';

import React from "react";
import {
        Select,
        SelectItem} from '@nextui-org/react'


export default function SearchBar({value, setValue}) {
    const handleSelectionChange = (newValue) => {
        console.log("Selected Font ID:", newValue); // Log the new selection
        setValue(newValue); // Update the state with the new value
    };
    return (
        <Select
            label="Select a font"

            className="max-w-xs"
            selectedKeys={value}
            onSelectionChange={handleSelectionChange}
            >
            <SelectItem 
                //value={0}
                >ABeeZee</SelectItem>
            <SelectItem
                //value={1}
                >Abel</SelectItem>
            <SelectItem
                //value={2}
                >Abhaya-Libre</SelectItem>
            <SelectItem
                //value={3}
                >Aboreto</SelectItem>

        </Select>
                
    );
}