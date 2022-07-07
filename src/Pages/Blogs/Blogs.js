import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5 border border-5 border-primary'>
            <div className='border p-3 mb-2 border-3 border-success'>
                <h2>1: What is  different between Javascript and node.js??</h2>
                <p>JavaScript is a simple programming language that runs in any browser in JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            </div>
            <div className='border p-3 mb-2 border-3 border-success'>
                <h2>2: When should you use nodejs and when should you use mongodb</h2>
                <p>There are many web servers built with node.js that will use in MongoDB for storing data. MongoDB offers an API library that runs with in a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database</p>
            </div>
            <div className='border p-3 mb-2 border-3 border-success'>
                <h2>3. Differences between sql and nosql databases?</h2>
                <p>Sql data base is vertically scalable while Nosql are horizontally scalable.Sql are table based data while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
            </div>
            <div className='border p-3 mb-2 border-3 border-success'>
                <h2>4.What is the purpose of jwt and how does it work?</h2>
                <p>Jwt or json web token is an open standard used to shared security information between   client side or server side. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>

        </div>


    );
};

export default Blogs;