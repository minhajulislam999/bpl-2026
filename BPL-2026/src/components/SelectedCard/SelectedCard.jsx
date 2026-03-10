import React from 'react'

function SelectedCard({ player, onRemove }) {
    console.log("Selected Player in Card:", player);

   
  return (
    <div>
         <div className=' flex items-center justify-between col-span-1 md:col-span-2 lg:col-span-3 border-b-2 border-gray-300 pb-4'>
        <div className='flex items-center gap-4 '>
          <div>
            <img className='w-8 h-8 rounded-full' src={player?.picture} alt={player?.name} />


          </div>
          <div className='text-left' >
            <h2 className='text-lg text-gray-800 font-semibold'>{player.name}</h2>
            <p className='text-sm text-gray-800'>{player.country}</p>
          </div>

        </div>
        <div>
          <button onClick={() => onRemove(player)} className='hover:opacity-80 transition'>
            <img className='w-full h-auto' src="https://i.ibb.co.com/HvwY1YS/Frame.png"/>
          </button>
        </div>
      </div>

    </div>
  )
}

export default SelectedCard
