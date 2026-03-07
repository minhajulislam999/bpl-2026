
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Available from './components/Available/Available'
import Selected from './components/Selected/Selected'

function App() {

  return (
    <>
      <div  className="bg-white min-h-screen">
        <Navbar />
        <Available />
        <Selected />

      </div>
     
    </>
  )
}

export default App
