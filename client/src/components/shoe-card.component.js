import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'

function ShoeCard(props) {
    return (<div>
        <Card variant="outlined"> 
            <CardContent>
                <Typography variant="h5">
                    {props.shoe.brand} {props.shoe.modelName}
                </Typography>
                <Typography>
                    <strong>Shoe ID:</strong> {props.shoe._id}
                    <br/>
                    <strong>Colorway:</strong> {props.shoe.colorway}
                    <br/>
                    <strong>Size:</strong> {props.shoe.size}
                    <br/>
                    <strong>Offer range:</strong> {props.shoe.offerMin} - {props.shoe.offerMax}
                    <br/>
                    <strong>Sold by:</strong> {props.shoe.sellerUsername}
                    <br/>
                    <strong>Created at</strong>: {props.shoe.createdAt}
                    <br/>
                    <strong>Last updated at:</strong> {props.shoe.updatedAt}
                </Typography>
            </CardContent>
        </Card>
    </div>)
}

export default ShoeCard;