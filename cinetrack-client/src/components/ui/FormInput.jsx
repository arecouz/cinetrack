import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const FormInput = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <div className="flex items-center border rounded-md border-input bg-background">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none -ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
FormInput.displayName = "FormInput"

export { FormInput }