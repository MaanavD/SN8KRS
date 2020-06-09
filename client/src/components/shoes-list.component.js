import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import axios from 'axios';
import ShoeCard from './shoe-card.component';

function ShoesList(props) {
    const [shoes, updateShoes] = useState([]);


    useEffect(async () => {
        let { data } = await axios.get('http://localhost:5000/shoes');
        updateShoes(data);
    }, []);

    console.log(shoes);

    const shoeItems = shoes.map((shoe) => (
        <Grid item xs={4}>
            <ShoeCard shoe={shoe}/>
        </Grid>
    ));

    return (
        <div>
            <h1>You are on the Shoes List component</h1>
            <h5>Take a look at everything we have to offer!</h5>
            <br />
            <Grid container spacing={2}>
                    {shoeItems}
            </Grid>
        </div>
    );
}

export default ShoesList;