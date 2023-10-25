import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { Card } from '../card/Card'
import mockData from '../../mockData'

export function Kanban() {
  const [data, setData] = useState(mockData)

  const onDragEnd = (result) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex(
        (column) => column.id === source.droppableId
      )
      const destinationColIndex = data.findIndex(
        (column) => column.id === destination.droppableId
      )
      const sourceCol = data[sourceColIndex]
      const destinationCol = data[destinationColIndex]

      const sourceTask = [...sourceCol.tasks]
      const destinationTask = [...destinationCol.tasks]

      const [removed] = sourceTask.splice(source.index,1)
      destinationTask.splice(destination.index,0,removed)

      data[sourceColIndex].tasks = sourceTask
      data[destinationColIndex].tasks = destinationTask

      setData(data)  
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {data.map((section) => {
          <Droppable key={section.id} droppableId={section.id}>
           
          </Droppable>
        })}
      </div>
    </DragDropContext>
  )
}
