import React from 'react'

const CompleteTable = (props) => {

    const handleDelete = (arrIdx) => {
        props.removeItemWithIdx(arrIdx)
    }

   const handleToggleUrgent = (arrIdx, targetBool) => {
        props.updateUrgentWithIdx(arrIdx, targetBool)
   }


  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Flavor</th>
                    <th>Quantity</th>
                    <th>Chocolate Chip</th>
                    <th>Is Urgent</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.iceCreamList.map((eachIceCream, idx) => 
                        <tr key={idx} style={eachIceCream.isUrgent? {backgroundColor: "red", color: "white"}: {backgroundColor:"blanchedalmond", color:"black"}}>
                            <td>{eachIceCream.flavor}</td>
                            <td>{eachIceCream.quantity}</td>
                            <td>{eachIceCream.chocolateChip?"Yes":"No"}</td>
                            <td>{eachIceCream.isUrgent?"Yes":"No"}</td>
                            <td>
                                <input type="checkbox" checked={eachIceCream.isUrgent} onChange={e => handleToggleUrgent(idx, e.target.checked)}/>

                            </td>
                            <td><button onClick={() => handleDelete(idx)}>Delete</button></td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default CompleteTable