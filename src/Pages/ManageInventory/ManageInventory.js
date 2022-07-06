import React from 'react';
import useInventories from '../hooks/useInventories';
import SingleManage from './SingleManage';

const ManageInventory = () => {

    const [inventories, setInventoryies] = useInventories([])

    return (
        <div>
            {
                inventories.map(inventory => <SingleManage
                    key={inventory._id}
                    inventory={inventory}
                ></SingleManage>)
            }

        </div>
    );
};

export default ManageInventory;