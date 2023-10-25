import { v4 as uuidv4 } from 'uuid'

const mockData = [
  {
    id: uuidv4(),
    title: '📋 To Do',
    tasks: [
      {
        id: uuidv4(),
        title: 'Sign to JavaScript course',
      },
      {
        id: uuidv4(),
        title: 'Study JavaScript',
      },
      {
        id: uuidv4(),
        title: 'Workout',
      },
    ],
  },
  {
    id: uuidv4(),
    title: '📝 In Progress',
    tasks: [
      {
        id: uuidv4(),
        title: 'Read',
      },
      {
        id: uuidv4(),
        title: 'React course',
      },
    ],
  },
  {
    id: uuidv4(),
    title: '✅ Done',
    tasks: [
      {
        id: uuidv4(),
        title: 'Clean Code course',
      },
    ],
  },
]

export default mockData