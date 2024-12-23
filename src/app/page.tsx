'use client'

import ChessBoard from '@/components/chessBoard'
import { observe } from '@/libs/game'
import { useEffect, useState } from 'react'

export default function Tutorial() {
  const [knightPos, setKnightPos] = useState<[number, number]>([1, 7])

  useEffect(() => {
    observe((position) => {
      setKnightPos(position)
    })
  }, [])

  return (
    <div>
      <ChessBoard knightPosition={knightPos} />
    </div>
  )
}
