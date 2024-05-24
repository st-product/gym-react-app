import React from 'react'

export default function Button(props){
    const {text, func} = props

    return (
        <button onClick={func} className="px-8 py-4 mx-auto rounded-md bg-slate-950 duration-200 border-blue-400 border-[2px] border-solid blueShadow">
            <p>{text}</p>
        </button>
    )
}