import React from 'react'
import SelectedCard from '../SelectedCard/SelectedCard';

function Selected({ selectedPlayers, setSelectedPlayers, setAvailableBalance }) {
  // console.log("Selected Players:", selectedPlayers);

  const handleRemove = (playerToRemove) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== playerToRemove.id));
    setAvailableBalance(prev => prev + playerToRemove.price);
  };

  return (

    <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10  border-2 border-gray-300 p-10 rounded-lg'>
      {/* <SelectedCard /> */}
      {
        selectedPlayers.map(player => <SelectedCard selectedPlayers={selectedPlayers} player={player} key={player.id} onRemove={handleRemove} />)
      }

    </div>
  )
}

export default Selected
