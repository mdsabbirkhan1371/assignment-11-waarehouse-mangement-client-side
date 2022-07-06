import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'
const InventoryItems = () => {
    const [inventoryies, setInventoryies] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setInventoryies(data))

    }, [])
    return (
        <div className='container'>
            <h3 className='text-primary text-center mt-5 border-bottom border-success border-2'>Inventory_Items</h3>

            <div className="inventories py-5">
                {
                    inventoryies.map(inventory =>
                        <InventoryItem
                            key={inventory._id}
                            inventory={inventory}
                        ></InventoryItem>)
                }
            </div>

        </div>
    );
};

export default InventoryItems;