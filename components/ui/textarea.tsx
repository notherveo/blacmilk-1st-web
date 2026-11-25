"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-aria-invalid-ring-color aria-invalid:ring-aria-invalid-ring-width aria-invalid:ring-offset-4 focus-visible:ring-ring/50 focus-visible:ring-2 focus-visible:ring-offset-2 resize-y",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
