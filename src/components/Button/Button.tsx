import React from 'react'

interface ButtonProps {
    text ?: string,
    onClick ?: () => void,
    submit ?: boolean,
    color ?: string,
    customColor ?: boolean
}

export const Button = (props:ButtonProps) => {


    return <button type={props.submit?'submit':'button'} className={`border p-2 rounded-md w-full ${props.customColor?`${'bg-'+props.color+'-600 hover:bg-'+props.color+'-700'}`:`${'bg-green-600 hover:bg-green-700'}`} text-white`} onClick={props.onClick}>{props.text}</button>

}