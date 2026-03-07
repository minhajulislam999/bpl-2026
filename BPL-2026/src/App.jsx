
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Available from './components/Available/Available'
import Selected from './components/Selected/Selected'
import { Suspense } from 'react'

const fetchPlayers = async () => {
  const rest = await  fetch('/data.json')
  const data = await rest.json()
  return data
}


function App() {
  const playerPromise = fetchPlayers()

  return (
    <>
      <div  className="bg-white min-h-screen">
        <Navbar />
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>
}>
          <Available playerPromise={playerPromise} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Selected />
        </Suspense>
       

      </div>
     
    </>
  )
}

export default App
