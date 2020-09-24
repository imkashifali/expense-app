import React from "react";

export const Transcation = ( transcation ) => {
  console.log(transcation);
  return (
    <div>
      <li className="plus">
       <p>{transcation.description}</p> 
        <span>{transcation.transactionAmount}</span>
        <button className="delete-btn">X</button>
      </li>
    </div>
  );
};
