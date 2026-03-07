
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
        <div className='max-w-[1200px] mx-auto flex items-center justify-between mt-10'>
          <h1 className='text-3xl font-bold text-center mt-10'>Available Players</h1>
          <div>
            <button className="btn btn-primary">Available</button>
            <button className="btn btn-secondary">Selected</button>

          </div>
        </div>
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
