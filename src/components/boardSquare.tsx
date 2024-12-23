import { PieceTypes } from '@/const/dndTypes'
import { canMoveKnight, moveKnight } from '@/libs/game'
import type { ReactNode, Ref } from 'react'
import { useDrop } from 'react-dnd'
import { Overlay } from './overlay'
import Square from './square'

interface BoardSquareProps {
  x: number
  y: number
  children: ReactNode
}

export default function BoardSquare({ x, y, children }: BoardSquareProps) {
  const black = (x + y) % 2 === 1

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: PieceTypes.KNIGHT,
      canDrop: () => canMoveKnight(x, y),
      drop: () => moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y],
  )

  return (
    <div
      ref={drop as unknown as Ref<HTMLDivElement>}
      className="relative size-full"
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay variant={'red'} />}
      {!isOver && canDrop && <Overlay variant={'yellow'} />}
      {isOver && canDrop && <Overlay variant={'green'} />}
    </div>
  )
}
