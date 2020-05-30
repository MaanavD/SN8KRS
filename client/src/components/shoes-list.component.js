import React, { useEffect, useState } from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
});

function ShoesList(props) {
    const classes = useStyles();
    const [shoes, updateShoes] = useState([]);

    useEffect(() => {
        async function getShoes(){
            const shoes = await axios.get('localhost:5000/shoes/');
            updateShoes(shoes);
        }
        getShoes();
    });

    for (const shoe in shoes) {
        console.log(shoe.size);
    }
    
    return (
        <div>
            <h1>You are on the Shoes List component</h1>
            <h5>Take a look at everything we have to offer!</h5>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    );
}

export default ShoesList;