import React from 'react'

export default function Button({ text, func }) {
    return (
        <button onClick={func} className='duration-200 px-8 mx-auto py-4 bg-slate-950 blueShadow rounded-md border-2 border-blue-400 border-solid'>
            <p>
                {text}
            </p>
        </button>
    )
}
