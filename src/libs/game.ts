type Position = [number, number]
type Observer = (position: Position) => void

let knightPosition: Position = [1, 7]
let observer: Observer | null = null

export function canMoveKnight(toX: number, toY: number) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

function emitChange() {
  if (observer) {
    observer(knightPosition)
  }
}

export function observe(o: Observer) {
  if (observer) {
    throw new Error('multiple observers not implemented.')
  }
  observer = o
  emitChange()
}

export function moveKnight(toX: number, toY: number) {
  knightPosition = [toX, toY]
  emitChange()
}
