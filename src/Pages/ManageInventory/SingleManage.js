import React from 'react';
import Table from 'react-bootstrap/Table';
const SingleManage = ({ inventory, removeItem }) => {
    const { _id, name, image } = inventory;

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
                                onClick={() => removeItem(_id)}
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