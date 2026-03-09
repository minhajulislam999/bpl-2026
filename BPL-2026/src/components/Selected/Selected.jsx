import React from 'react'

function Selected({ selectedPlayers }) {
  console.log("Selected Players:", selectedPlayers);

  return (

    <div className='max-w-[1200px] mx-auto flex items-center justify-center mt-10'>
        <h1 className='text-3xl font-bold  mt-10 text-green-400'>Selected Players</h1>
    </div>
  )
}

export default Selected
