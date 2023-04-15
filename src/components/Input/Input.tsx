import React from 'react'

import {AiOutlineEye} from 'react-icons/ai'

interface InputProps {
    placeholder ?: string,
    type: string,
    id: string,
    className ?: string,
    eyeVisible ?: boolean,
    onChange ?: (e:any)=>void,
    name ?: string,
    value ?: string,
    minValue ?: number
}

export const Input = (props:InputProps) => {

    return <>
        <div className={props.className}>

            <div className='flex items-center'>
                <input className='border border-black rounded-md p-1 w-full' type={props.type} placeholder={props.placeholder} id={props.id} onChange={props.onChange} value={props.value} name={props.name} min={props.minValue} defaultValue={props.minValue}/>
                
                {props.eyeVisible?<button type='button' className='bg-slate-200 border-2 border-black p-2 rounded-md hover:bg-slate-400' onClick={()=>{
                    let inDoc:any = document.getElementById(props.id);
                    if (inDoc.type == 'password'){
                        inDoc.type = 'text';
                    }
                    else {
                        inDoc.type = 'password';
                    }
                }}><AiOutlineEye/></button>:''}
            </div>
            
        </div>
    </>

}