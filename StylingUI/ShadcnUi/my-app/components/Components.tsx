import React from 'react'
import { Shadcn_Accordion } from './shadcn/Accordion'
import { Shadcn_Alert } from './shadcn/Alert'
import { Shadcn_AlertDialog } from './shadcn/AlertDialog'
import { Shadcn_AspectRatio } from './shadcn/AspectRatio'
import { Shadcn_Avatar } from './shadcn/Avatar'
import { Shadcn_Badge } from './shadcn/Badge'
import { Shadcn_Breadcrumb } from './shadcn/Breadcrumb'
import { Shadcn_Button } from './shadcn/Button'
import { Shadcn_Calendar } from './shadcn/Calendar'
import { Shadcn_DatePicker } from './shadcn/DatePicker'
import { Shadcn_Card } from './shadcn/Card'
import { Shadcn_Carousel } from './shadcn/Carousel'

const Components = () => {
  return (
    <div className='flex flex-col w-4/5 lg:w-1/3 mx-auto center gap-10 mb-20'>

      <Shadcn_Accordion />
      <Shadcn_Alert />
      <Shadcn_AlertDialog />
      <Shadcn_AspectRatio />
      <Shadcn_Avatar />
      <Shadcn_Badge />
      <Shadcn_Breadcrumb />
      <Shadcn_Button />
      <Shadcn_Calendar />
      <Shadcn_DatePicker />
      <Shadcn_Card />
      <Shadcn_Carousel />

    </div>

  )
}

export default Components