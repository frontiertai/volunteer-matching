"use client"

import * as React from "react"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: DateRange
  onChange?: (date: DateRange) => void
}

export function DatePickerWithRange({ className, value, onChange }: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(
    value || {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    },
  )

  React.useEffect(() => {
    if (value) {
      setDate(value)
    }
  }, [value])

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate)
    if (onChange && newDate) {
      onChange(newDate)
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal border-primary/20 focus:ring-primary/30",
              !date && "text-muted-foreground",
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "yyyy/MM/dd", { locale: ja })} - {format(date.to, "yyyy/MM/dd", { locale: ja })}
                </>
              ) : (
                format(date.from, "yyyy/MM/dd", { locale: ja })
              )
            ) : (
              <span>日付を選択</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
            locale={ja}
            className="border-primary/20"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
