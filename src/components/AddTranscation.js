import React,{useState} from 'react'

export const AddTranscation = () => {

const [Description, setDescription] = useState();
const [transactionAmount, setransactionAmount] = useState();

    return (
        <div>
           <h3>Add New Transaction</h3>
           <form >
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text"
                            id="description"
                            placeholder="Detail of Trandcation"
                            value={Description}
                            onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>


                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number"    
                            id="transactionAmount"  
                            placeholder="Enter transactionamount Amount" 
                            value={transactionAmount}
                            onChange={ (e) => setransactionAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>

        </div>
    )
}
