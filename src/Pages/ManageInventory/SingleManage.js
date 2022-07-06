import React from 'react';
import Table from 'react-bootstrap/Table';
import useInventories from '../hooks/useInventories';
const SingleManage = ({ inventory }) => {

    const { _id, name, image } = inventory;
    const [inventories, setInventoryies] = useInventories()

    const removeItem = id => {
        const process = window.confirm("Are You Sure Want to Remove This Item??")
        if (process) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaing = inventories.filter(inventory => inventory._id !== id)
                    setInventoryies(remaing)
                    return inventories;
                })

        }
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Inventory Name</th>
                        <th>Inventory Image</th>
                        <th>Manage Items</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><h2>{name}</h2></td>
                        <td><img style={{ width: '200px' }} src={image}></img></td>
                        <td>
                            <button
                                onClick={() => removeItem(inventory._id)}
                                className='btn btn-secondary'>Remove Items
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default SingleManage;