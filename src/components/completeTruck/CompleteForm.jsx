import React, { useState } from 'react'

const CompleteForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [chocolateChip, setChocolateChip] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIceCream = {
            flavor, quantity: quantity, chocolateChip, isUrgent: false
        }
        props.onCreate(newIceCream)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Flavor:</label>
                <select name="flavor" value={flavor} onChange={e => setFlavor(e.target.value)}>
                    <option hidden>Please pick one man!!!</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="earl Grey">earl Grey</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Cookies and cream">Cookies and cream</option>
                </select>
            </div>
            <div>
                <label>Quantity</label>
                <input type='number' name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)}></input>
            </div>
            <div>
                <label>Chocolate CHip??</label>
                <input type="checkbox" name="chocolateChip" checked={chocolateChip} onChange={e =>setChocolateChip(e.target.checked)}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CompleteForm