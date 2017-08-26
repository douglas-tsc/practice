import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { canMoveKnight, moveKnight } from './index'
import { DragDropContext, DragSource, DropTarget } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const ItemTypes = {
  KNIGHT: 'knight'
}

class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  }

  renderSquare(i) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    )
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    }
  }

  render() {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i))
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    )
  }
}

class Square extends Component {
  static propTypes = {
    black: PropTypes.bool
  }

  render() {
    const { black } = this.props
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: '100%',
          height: '100%'
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

class _BoardSquare extends Component {
  renderOverlay(color) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color
        }}
      />
    )
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props
    const black = (x + y) % 2 === 1

    return connectDropTarget(
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    )
  }
}

_BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
}

const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y)
  },

  drop(props) {
    moveKnight(props.x, props.y)
  }
}

function kollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

const BoardSquare = DropTarget(ItemTypes.KNIGHT, squareTarget, kollect)(
  _BoardSquare
)

class _Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props
    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: '3rem',
          fontWeight: 'bold',
          cursor: 'move'
        }}
      >
        ♘
      </div>
    )
  }
}

const knightSource = {
  beginDrag(props) {
    return {}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

_Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

const Knight = DragSource(ItemTypes.KNIGHT, knightSource, collect)(_Knight)

export default DragDropContext(HTML5Backend)(Board)
