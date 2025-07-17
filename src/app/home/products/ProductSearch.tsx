"use client";
import React, { useState, useDeferredValue } from 'react';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

type Props = {
    onChange?: (value: string) => void;
}

const ProductSearch = ({ onChange }: Props) => {
    const [inputValue, setInputValue] = useState<string>('');

    const filteredValue = useDeferredValue(inputValue);

    const handleChange = (event: InputChangeEvent) => {
        const value = event.target.value as string;
        setInputValue(value);
        if (onChange) {
            onChange(filteredValue);
        }
    };

    return (
        <div style={{ padding: '0 5px 5px' }}>
            <div className="input-wrapper">
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                    placeholder='Search products...'
                />
            </div>
        </div>
    );
};

export default ProductSearch;
