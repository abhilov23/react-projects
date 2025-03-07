import React from 'react';

interface PropType {
    placeholder: string;
    size: "big" | "small";
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
    placeholder,
    size,
    onChange,
}: PropType) {
    return (
        <input 
            placeholder={placeholder}
            style={{
                padding: size === "big" ? 20 : 10,
                margin: size === "big" ? 20 : 10,
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 1
            }}
            onChange={onChange}
        />
    );
}
