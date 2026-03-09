
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Available from './components/Available/Available'
import Selected from './components/Selected/Selected'
import { Suspense, useState } from 'react'
import Button from './components/prButton/Button'
import ColorBtn from './components/prButton/ColorBtn'

const fetchPlayers = async () => {
  const rest = await  fetch('/data.json')
  const data = await rest.json()
  return data
}


function App() {
  const [toggle, setToggle] = useState(true);
  const playerPromise = fetchPlayers()
  const [availableBalance, setAvailableBalance] = useState(60000000);

  return (
    <>
      <div  className = "bg-white min-h-screen">
        <Navbar availableBalance={availableBalance} />
        <div className='max-w-[1200px] mx-auto flex items-center justify-between mt-10'>
          <div>
                      <h1 className='text-3xl font-bold text-center mt-10 text-gray-800'>Available Players</h1>

          </div>
          <div>
            <button onClick={() => setToggle(true)} className={` btn  border-radius border-r-none ${toggle === true ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`btn  border-radius border-r-none ${toggle === false ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Selected</button>

          </div>
        </div>
        
        

        {
          toggle == true ? <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <Available availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise} />
        </Suspense> : <Selected />
        }
          
{/*        
       <Button />
       <ColorBtn /> */}

      </div>
     
    </>
  )
}

export default App
