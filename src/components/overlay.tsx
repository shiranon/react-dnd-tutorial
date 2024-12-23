import { cn } from '@/libs/utils'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const overlayVariants = cva('absolute left-0 top-0 z-10 size-full opacity-50', {
  variants: {
    variant: {
      default: 'bg-neutral-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500',
      green: 'bg-green-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {}

const Overlay = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(overlayVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Overlay.displayName = 'Overlay'

export { Overlay }
