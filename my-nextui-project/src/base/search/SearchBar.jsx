import styles from './SearchBar.module.css';

import React from "react";
import {
        Select,
        SelectItem} from '@nextui-org/react'


export default function SearchBar() {
    const [value, setValue] = React.useState(new Set([]));
    return (
        <Select
            label="Select a font"
            placeholder="sans-serif"
            className="max-w-xs"
            selectedKeys={value}
            onSelectionChange={setValue}
            >
            <SelectItem>font style 1</SelectItem>
            <SelectItem>font style 2</SelectItem>
            <SelectItem>font style 3</SelectItem>
            <SelectItem>font style 4</SelectItem>
            <SelectItem>font style 5</SelectItem>
            <SelectItem>font style 6</SelectItem>
        </Select>
                
    );
}