import { cn } from '@/libs/utils'
import type { ReactNode } from 'react'

interface SquareProps {
  black: boolean
  children: ReactNode
}

export default function Square({ black, children }: SquareProps) {
  const squareClass = cn(
    'aspect-square size-full',
    black ? 'bg-black text-white' : 'bg-white text-black',
  )
  return <div className={squareClass}>{children}</div>
}
