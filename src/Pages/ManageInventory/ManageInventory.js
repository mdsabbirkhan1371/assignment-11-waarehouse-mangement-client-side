import React from 'react';

import useInventories from '../hooks/useInventories';
import SingleManage from './SingleManage';

const ManageInventory = () => {

    const [inventories, setInventoryies] = useInventories([])

    const removeItem = id => {
        const process = window.confirm("Are You Sure Want to Remove This Item??")
        if (process) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventoryies(remaining)
                    return inventories;
                })


        }

    }


    return (
        <div>
            {
                inventories.map(inventory => <SingleManage
                    key={inventory._id}
                    inventory={inventory}
                    removeItem={removeItem}
                ></SingleManage>)
            }

        </div>
    );
};

export default ManageInventory;