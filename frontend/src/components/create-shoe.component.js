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
        this.onSubmit = this.onSubmit.bind(this);

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

    componentDidMount() {
        this.setState({
            sellerUsername: 'jpparapp'
        })
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
        console.log('cool');

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
        console.log('swag'); 
        console.log(shoe);

        // window.location = '/';
    }

    render () {
        return (
            <div>
                <p>You are on the createShoe component!</p>
                <h3>Create new shoe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Brand: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.brand}
                        onChange={this.onChangeBrand}
                        />
                    </div>
                    <div className="form-group">
                        <label>Colorway: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.colorway}
                        onChange={this.onChangeColorway}
                        />
                    </div>
                    <div className="form-group">
                        <label>modelName: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.modelName}
                        onChange={this.onChangeModelName}
                        />
                    </div>
                    <div className="form-group">
                        <label>offerMax: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.offerMax}
                        onChange={this.onChangeOfferMax}
                        />
                    </div>
                    <div className="form-group">
                        <label>offerMin: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.offerMin}
                        onChange={this.onChangeOfferMin}
                        />
                    </div>
                    <div className="form-group">
                        <label>sellerUsername: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.sellerUsername}
                        onChange={this.onChangeSellerUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>size: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.size}
                        onChange={this.onChangeSize}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Shoe" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}