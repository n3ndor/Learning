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
import { Shadcn_Checkbox } from './shadcn/Checkbox'
import { Shadcn_Collapsible } from './shadcn/Collapsible'
import { Shadcn_Combobox } from './shadcn/Combobox'
import { Shadcn_Command } from './shadcn/Command'
import { Shadcn_ContextMenu } from './shadcn/ContextMenu'
import { Shadcn_Dialog } from './shadcn/Dialog'
import { Shadcn_Drawer } from './shadcn/Drawer'

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
      <Shadcn_Checkbox />
      <Shadcn_Collapsible />
      {/* <Shadcn_Combobox /> somehow is not working for me  */}
      <Shadcn_Command />
      <Shadcn_ContextMenu />
      <Shadcn_Dialog />
      <Shadcn_Drawer />



    </div>

  )
}

export default Components