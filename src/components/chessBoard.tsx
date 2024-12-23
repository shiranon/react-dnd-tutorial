import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './boardSquare'
import Knight from './knight'

interface BoardProps {
  knightPosition: [number, number]
}

function renderSquare(i: number, knightPosition: [number, number]) {
  const x = i % 8
  const y = Math.floor(i / 8)

  return (
    <div key={i} className="size-[12%]">
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x: number, y: number, knightPosition: [number, number]) {
  const [knightX, knightY] = knightPosition
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

export default function ChessBoard({ knightPosition }: BoardProps) {
  const square = []
  for (let i = 0; i < 64; i++) {
    square.push(renderSquare(i, knightPosition))
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex size-full flex-wrap">{square}</div>
    </DndProvider>
  )
}
