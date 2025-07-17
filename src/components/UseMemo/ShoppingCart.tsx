import { useMemo, useState } from "react";

interface Item {
    id: number;
    name: string;
    price: number
}

export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: "Item 1", price: 2.0 },
        { id: 2, name: "Item 2", price: 3.0 },
        { id: 3, name: "Item 3", price: 5.0 }
    ]);
    
    const [discount, setDiscount] = useState<number>(0);

    // const totalCost = items.reduce((total, item) => total + item.price, 0);
    const totalCost = useMemo(
        () => items.reduce((total, item) => total + item.price, 0),
        [items]
    );
    // const finalCost = totalCost - discount;
    const finalCost = useMemo(
        () => totalCost - discount,
        [totalCost, discount]
    );


    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Item ${items.length + 1}`,
            price: Math.random() * 5
        };
        setItems([...items, newItem]);
    };
 
    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}: ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            <p>Discount: 
                <input 
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    placeholder="Enter discount amount"
                />
            </p>
            <p>Discounted Total: ${finalCost.toFixed(2)}</p>
            <button onClick={addItem}>Add Item</button>
            
        </div>
    );
}