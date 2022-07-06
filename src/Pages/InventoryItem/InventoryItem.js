import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const InventoryItem = ({ inventory }) => {

    const { name, description, image, price, supplier_name, quantity
    } = inventory;
    return (
        <div className='mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ padding: "10px" }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title><p>Price: ${price}</p></Card.Title>
                    <Card.Title><p>Quantity: {quantity}</p></Card.Title>

                    <Card.Title><p><small>Supplier: {supplier_name}</small></p></Card.Title>

                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                    <Button variant="primary">Stock Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryItem;