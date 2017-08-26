import React from 'react'
import ReactDOM from 'react-dom'
import Board from './App'
import registerServiceWorker from './registerServiceWorker'

let knightPosition = [0, 0]
let observer = null

function emitChange() {
  observer(knightPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange()
}

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

observe(knightPosition =>
  ReactDOM.render(
    <div
      style={{
        width: 500,
        height: 500,
        border: '1px solid gray'
      }}
    >
      <Board knightPosition={knightPosition} />
    </div>,
    root
  )
)

registerServiceWorker()
