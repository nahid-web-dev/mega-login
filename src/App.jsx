import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className=' bg-[#fbfef9]'>
      <Outlet />
    </div>
  )
}

export default App
