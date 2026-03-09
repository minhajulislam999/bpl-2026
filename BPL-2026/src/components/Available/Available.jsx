import React, { use } from 'react'
// import PlayersCard from '../PlayesCard/PlayersCard';
// import PlayersCard from '../PlayesCard/PlayersCard';
// import namImg from '../../../src/assets/user-1.png'
// import crountryImg from '../../../src/assets/Group.png'
import PlayersCard from '../PlayesCard/PlayersCard';



function Available({ playerPromise, setAvailableBalance, availableBalance , selectedPlayers, setSelectedPlayers}) {

    const playerData = use(playerPromise);
    // console.log(playerData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>

            {
                playerData.map(player => <PlayersCard selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} key={player.id} player={player} />)
            }
           
        </div>
    )
}

export default Available
