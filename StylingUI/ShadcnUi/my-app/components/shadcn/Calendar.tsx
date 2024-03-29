
"use client"

import { Calendar } from "@/components/ui/calendar"
import React from "react"

export const Shadcn_Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div>
        <p>Calendar:</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
    </div>
  )

}