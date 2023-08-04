import React, { useState } from 'react'
import CompleteForm from '../completeTruck/CompleteForm'
import CompleteTable from '../completeTruck/CompleteTable'

const CompleteTruck = () => {
    const [iceCreamList, setIceCreamList ] = useState([])

    const receiveNewItem = newIceCream => {
        setIceCreamList([...iceCreamList, newIceCream])
    }

    const removeItemWithIdx = (deleteIdx) => {
        const filteredList = iceCreamList.filter((eachIceCream, idx) => deleteIdx !== idx)
        setIceCreamList(filteredList);
    }

    const updateUrgentWithIdx = (targetIdx, targetBool) => {
        const updateList = iceCreamList.map((eachIceCream, idx) => {
            if (targetIdx === idx) {
                return {...eachIceCream, isUrgent: targetBool};
            }
            else {
                return eachIceCream;
            }
        })
        setIceCreamList(updateList)
    }

  return (
    <div>
        <CompleteForm onCreate = {receiveNewItem}/>
        <CompleteTable iceCreamList = {iceCreamList} updateUrgentWithIdx={updateUrgentWithIdx} removeItemWithIdx={removeItemWithIdx}/>
    </div>
  )
}

export default CompleteTruck