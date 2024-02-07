import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todo.todos)

  return (
    <>
      <h1 className="text-center text-3xl mt-3 font-bold mb-5 text-white">Todos</h1>
      <AddTodo/>
      <div className='w-full'>
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todos todo={todo} id={todo.id}/>
            
          </div>

        ))}
      </div>
    </>
  )
}

export default App
