import React, { useState } from 'react'
import namImg from '../../../src/assets/user-1.png'
import crountryImg from '../../../src/assets/Group.png'



function PlayersCard({ player }) {
    const [isSelected, setSelected] = useState(false);
    const [follow, setFollow] = useState(false);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    className='w-full h-60 object-cover'
                        src={player.picture}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex items-center gap-4">
                        < img className="w-4 h-4 rounded-full" src={namImg} alt="Player Image" />
                        <h2 className="card-title">{player.name}</h2>

                    </div>

                    <div className="flex  justify-between border-b-2 border-gray-200 pb-2">
                        <div className="flex items-center gap-2">
                            <img className="w-4 h-4" src={crountryImg} alt="Country Image" />
                        <span>{player.country}</span>

                        </div>
                        
                        <span>{player.role}</span>
                    </div>
                    <div className="flex  justify-between">
                        <span>Rating</span>
                        <span>{player.rating}</span>
                    </div>
                    <div className = "flex  justify-between">
                        <span>Betting</span>
                        <span>{player.betting}</span>
                    </div>
                    <div className="flex  justify-between">
                        <span>Price:</span>
                        <span>{player.price}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <button disabled={isSelected} onClick={()=> setSelected(!isSelected)} className="btn btn-primary">{isSelected === true ? "Selected" : 'Choose Player'}</button>
                    </div>
                </div>
                {/* <button onClick={()=> setFollow(!follow)}  className = "btn btn-outline">{follow === true ? "following" : "follow" }</button> */}
            </div> 
    

    
  )
}

export default PlayersCard
