import React from 'react'

export const Box = ({text,img}) => {
  return (
    <div className={`py-1 px-2.5 md:py-2 md:px-5 w-fit bg-sky-700 border-r-4 border-b-4 border-sky-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-semibold md:font-bold font-mono text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box2 = ({text,img}) => {
  return (
    <div className={`py-1 px-2.5 md:py-2 md:px-5  w-fit bg-amber-700 border-r-4 border-b-4 border-amber-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-semibold md:font-bold font-mono  text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box3 = ({text,img}) => {
  return (
    <div className={`py-1 px-2.5 md:py-2 md:px-5 w-fit bg-green-700 border-r-4 border-b-4 border-green-900 rounded-b-lg rounded-tr-md rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-semibold md:font-bold font-mono  text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box4 = ({text,img}) => {
  return (
    <div className={`py-1 px-2.5 md:py-2 md:px-5 w-fit bg-rose-700 border-r-4 border-b-4 border-rose-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-semibold md:font-bold font-mono  text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}
export const Box5 = ({text,img}) => {
  return (
    <div className={`py-1 px-2.5 md:py-2 md:px-5 w-fit bg-fuchsia-700 border-r-4 border-b-4 border-fuchsia-900 rounded-b-lg rounded-r-lg rounded-t-lg rounded-l-lg`}>
       <div className='flex flex-row justify-evenly gap-1 md:gap-4 items-center text-sm md:text-lg  font-semibold md:font-bold font-mono text-slate-950'><div>{img}</div> <div>{text}</div> </div>
    </div>
  )
}


