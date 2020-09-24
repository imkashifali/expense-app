import React,{ useContext } from "react";


// Import the Transcation 
import { Transcation } from './Transcation'

// Import the Global State
import { GlobalContext } from '../context/GlobalState'


export const TranscationHistory = () => {

  const { transcations } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
      
                {transcations.map(transcation => 
                    (
                    <Transcation key={transcation.id} transcation={transcation} />
                    )
                )}  
          
      </ul>
    </div>
  );
};



