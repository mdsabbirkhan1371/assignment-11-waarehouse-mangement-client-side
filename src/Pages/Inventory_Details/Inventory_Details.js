import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const Inventory_Details = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})
    const { image, name, price, supplier_name, quantity, description } = inventory;
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${inventoryId}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])

    return (
        <div className=' my-5'>
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img style={{ padding: "10px" }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title><p>Price: ${price}</p></Card.Title>
                    <Card.Title><p>Quantity: {quantity}</p></Card.Title>

                    <Card.Title><p><small>Supplier: {supplier_name}</small></p></Card.Title>

                    <Card.Text>
                        {description?.slice(0, 100)}
                    </Card.Text>
                    <button type="button" className="btn btn-primary">Delivered</button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Inventory_Details;