import React from 'react';


const design = "bg-transparent hover:bg-blue-500 text-blue-700 font-semi-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

interface ButtonProps{
    onClick:React.MouseEventHandler<HTMLButtonElement>;
    label:string;
}

export function Button(props:ButtonProps){





        return (
            <button className={design} onClick={props.onClick}>
                {props.label}
            </button>
        )



 }

