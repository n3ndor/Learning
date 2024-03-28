import React from 'react'
import { Shadcn_Accordion } from './shadcn/Accordion'
import { Shadcn_Alert } from './shadcn/Alert'
import { Shadcn_AlertDialog } from './shadcn/AlertDialog'
import { Shadcn_AspectRatio } from './shadcn/AspectRatio'

const Components = () => {
  return (
    <div className='flex flex-col w-4/5 lg:w-1/3 mx-auto center gap-10'>

      <Shadcn_Accordion />
      <Shadcn_Alert />
      <Shadcn_AlertDialog />
      <Shadcn_AspectRatio />

    </div>

  )
}

export default Components