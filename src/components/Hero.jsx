import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center
        justify-center text-center max-w[700px] w-full mx-auto'>
            <div className='flex flex-col gap-4 p-4'>
                <p>Time to get</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Big</h1>
            </div>
            <p className='text-sm md:text-base font-light'> Acknowledgement</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={'Accept and Begin'} />
        </div>
    )
}
