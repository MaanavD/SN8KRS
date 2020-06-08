import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
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

    async function getShoes() {
        let { data } = await axios.get('http://localhost:5000/shoes');
        updateShoes(data);
    }

    useEffect(() => {
        getShoes();
    }, []);

    for (const shoe in shoes) {
        console.log(shoe);
    }

    return (
        <div>
            <h1>You are on the Shoes List component</h1>
            <h5>Take a look at everything we have to offer!</h5>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title}>
                                {/* {shoeArray[0].brand} */}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* {Object.keys(shoes).map(shoe => (
                        <Card>
                            <CardContent>
                                <Typography className={classes.title}>
                                    {shoe.brand}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))} */}
                </Grid>
            </Grid>
        </div>
    );
}

export default ShoesList;