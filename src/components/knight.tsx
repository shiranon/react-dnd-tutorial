import { PieceTypes } from '@/const/dndTypes'
import { cn } from '@/libs/utils'
import type { Ref } from 'react'
import type { DragSourceMonitor } from 'react-dnd'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { knightImage } from '../const/image'

export default function Knight() {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: PieceTypes.KNIGHT,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        const img = new Image()
        img.src = knightImage
        preview(img)
        if (!monitor.didDrop()) {
          return
        }
      }
    },
  }))

  const knightClass = cn(
    'text-[12vmin] cursor-move aspect-square size-full',
    isDragging ? 'opacity-50' : 'opacity-100',
  )
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div ref={drag as unknown as Ref<HTMLDivElement>} className={knightClass}>
        ♘
      </div>
    </>
  )
}
