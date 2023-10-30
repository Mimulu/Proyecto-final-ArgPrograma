import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ListaTareas from './components/taskList'
import Tarea from './components/task'
import TareaFormulario from './components/form'


function App() {
  return (
    <main className='container'>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ListaTareas/>}/>
        <Route path="/tarea" element={<Tarea/>}/>
        <Route path="/tareaFormulario" element={<TareaFormulario/>}/>
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
