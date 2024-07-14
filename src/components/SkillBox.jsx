import React from 'react'

export const Box = ({text,img}) => {
  return (
    <div className={`py-1.5 px-3 md:py-2 md:px-5 w-fit bg-sky-700 border-r-4 border-b-4 border-sky-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-bold font-mono text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box2 = ({text,img}) => {
  return (
    <div className={`py-1.5 px-3 md:py-2 md:px-5  w-fit bg-amber-700 border-r-4 border-b-4 border-amber-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-bold font-mono  text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box3 = ({text,img}) => {
  return (
    <div className={`py-1.5 px-3 md:py-2 md:px-5 w-fit bg-lime-700 border-r-4 border-b-4 border-lime-900 rounded-b-lg rounded-tr-md rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg font-bold font-mono  text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box4 = ({text,img}) => {
  return (
    <div className={`py-1.5 px-3 md:py-2 md:px-5 w-fit bg-red-800 border-r-4 border-b-4 border-red-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-bold font-mono  text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box5 = ({text,img}) => {
  return (
    <div className={`py-1.5 px-3 md:py-2 md:px-5 w-fit bg-fuchsia-700 border-r-4 border-b-4 border-fuchsia-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-bold font-mono text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}


