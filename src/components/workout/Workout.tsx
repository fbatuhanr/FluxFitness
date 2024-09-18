import React from 'react'

interface WorkoutProps {
    title: string
    img: string
}
const Workout: React.FC<WorkoutProps> = ({title, img}) => {
    return (
        <div className="flex">
            <div className="bg-black flex items-center justify-center w-[55px] h-[230px] rounded-ss-2xl rounded-es-2xl">
                <div className="text-white font-medium text-[20px] -rotate-90 min-w-[230px] text-center">{title}</div>
            </div>
            <div className="bg-white w-[350px] h-[350px] p-5 rounded-[4px] shadow flex justify-center items-center">
                <img src={img} />
            </div>
        </div>
    )
}

export default Workout