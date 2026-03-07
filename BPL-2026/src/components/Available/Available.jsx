import React, { use } from 'react'


function Available({playerPromise}) {

    const playerData = use(playerPromise);
    console.log(playerData);
  return (
    <div>
        <h1 className='text-3xl font-bold  mt-10 text-green-400'>Available Players</h1>
    </div>
  )
}

export default Available
