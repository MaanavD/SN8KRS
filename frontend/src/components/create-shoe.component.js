import React, { Component } from 'react';

export default class createShoe extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeColorway = this.onChangeColorway.bind(this);
        this.onChangeModelName = this.onChangeModelName.bind(this);
        this.onChangeOfferMax = this.onChangeOfferMax.bind(this);
        this.onChangeOfferMin = this.onChangeOfferMin.bind(this);
        this.onChangeSellerUsername = this.onChangeBrand.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);

        this.state = {
            brand: '',
            colorway: '',
            modelName: '',
            offerMax: 0,
            offerMin: 0,
            sellerUsername: '',
            size: 0,
        }
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        });
    }

    onChangeColorway(e) {
        this.setState({
            colorway: e.target.value
        });
    }

    onChangeModelName(e) {
        this.setState({
            modelName: e.target.value
        });
    }

    onChangeOfferMax(e) {
        this.setState({
            offerMax: e.target.value
        });
    }

    onChangeOfferMin(e) {
        this.setState({
            offerMin: e.target.value
        });
    }

    onChangeSellerUsername(e) {
        this.setState({
            sellerUsername: e.target.value
        });
    }

    onChangeSize(e) {
        this.setState({
            size: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const shoe = {
            brand: this.state.brand,
            colorway: this.state.colorway,
            modelName: this.state.modelName,
            offerMax: this.state.offerMax,
            offerMin: this.state.offerMin,
            size: this.state.size,
            sellerUsername: this.state.sellerUsername,
        }
        // where we submit exercise to db
        console.log(shoe);

        window.location = '/';
    }

    render () {
        return (
            <div>
                <p>You are on the createShoe component!</p>
            </div>
        )
    }
}