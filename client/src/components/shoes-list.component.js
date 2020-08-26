import React, { useEffect, useState } from 'react';
import ShoeCard from './shoe-card.component';
import axios from 'axios';

function ShoesList(props) {

  const [shoes, setShoes] = useState([]);
  shoes[0] = {
    brand: "Jordan",
    colorway: "Bred",
    modelName: "Jordan 1",
    offerMax: 160,
    offerMin: 100,
    size: 10.5,
    sellerUsername: "jpparapp"
  }
  shoes[1] = {
    brand: "Jordan",
    colorway: "Bred",
    modelName: "Jordan 1",
    offerMax: 160,
    offerMin: 100,
    size: 10.5,
    sellerUsername: "jpparapp"
  }
  shoes[2] = {
    brand: "Jordan",
    colorway: "Bred",
    modelName: "Jordan 1",
    offerMax: 160,
    offerMin: 100,
    size: 10.5,
    sellerUsername: "jpparapp"
  }
  shoes[3] = {
    brand: "Jordan",
    colorway: "Bred",
    modelName: "Jordan 1",
    offerMax: 160,
    offerMin: 100,
    size: 10.5,
    sellerUsername: "jpparapp"
  }

//   useEffect(() => {
//     const fetchData = async () => {
//         const result = await axios('http://localhost:5000/shoes');
//         console.log(result.data);
//         setShoes(result.data);
//     };
//     fetchData();
// }, []);

  let shoesMap = shoes.map((shoe) => 
  <div class="col-sm-3">
      <ShoeCard key={shoe._id} modelName={shoe.modelName} brand={shoe.brand} size={shoe.size} offerMin={shoe.offerMin} offerMax={shoe.offerMax}/>
  </div>)
  
  return (
    <div>
    <div class="row">
      {shoesMap}
    </div>
  </div>
  );
}

export default ShoesList;