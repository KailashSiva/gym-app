import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header({ index, title, description }) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl
                font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}



export default function Generator({ poison, setPoison, muscles,
    setMuscles, goal, setGoal, updateWorkout }) {
    const [showModal, setShowModal] = useState(false);



    function toggleModal() {
        setShowModal(!showModal)
        console.log('toggled modal')
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val != muscleGroup))
            return
        }

        if (muscles.length > 3) {
            return;
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }


        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 3) {
            setShowModal(false)
        }
    }

    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'time', 'to', 'exercise']}>
            <Header index={'01'} title={'Pick your poison'}
                description={'Select the workout you wish to endure'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    console.log(type)
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }} className={'duration-200 px-4 hover:border-blue-600 bg-slate-950 border border-blue-400 py-3 rounded-lg ' + (type == poison ? 'border-blue-600' : 'border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
            <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'px-4 hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>



            <Header index={'03'} title={'Become Juggernaut'}
                description={'Select your objective.'} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    console.log(scheme)
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={'px-4 duration-200 hover:border-blue-600 bg-slate-950 border border-blue-400 py-3 rounded-lg ' + (goal == scheme ? 'border-blue-600' : 'border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Button func={updateWorkout} text={'Formulate'} />
        </SectionWrapper >


    )
}
