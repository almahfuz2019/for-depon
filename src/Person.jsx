// eslint-disable-next-line no-unused-vars
import React from 'react';

const Person = () => {
    const Amartag=(props)=>{
        return(
            <div className=" col-12 style">
                <img src={props.img} alt="Product" className='img-fluid' />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p className='price'>Price:{props.price}</p>
                <button className='btn btn-primary fs-5 fw-bold'>Add to Cart</button>

            </div>
        )
    }
    return (
        <div className='container-fluid row'>
            <Amartag title="Flower" img="/image/bg (13).jpg" description="ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has" price="200$"/>
            <Amartag title="Flower" img="/image/bg (13).jpg" description="ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has" price="200$"/>
            <Amartag img="/image/bg (18).jpg" title="Light" description="This is light" />
            <Amartag img="/image/bg (18).jpg" title="Light" description="This is light" />
            <Amartag img="/image/bg (18).jpg" title="Light" description="This is light" />
            <Amartag img="/image/bg (18).jpg" title="Light" description="This is light" />
            
        </div>
    );
};

export default Person;