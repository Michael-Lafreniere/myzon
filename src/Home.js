import React from 'react';
// Our components:
import Banner from './Banner';
import Product from './Product';
// Style:
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__row">
        <Product
          id="69985412"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={14.79}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
        <Product
          id="45335"
          title="Breville BES810BSSUSC Duo Temp Pro Espresso Machine, Stainless Steel,medium"
          price={349.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81iyZv5W83L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9854723"
          title='Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6" Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, WiFi 6, RGB Keyboard'
          price={1289.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
        />
        <Product
          id="854562154"
          title="Panasonic RB-M500B Deep Bass Wireless Bluetooth Immersive Headphones with XBS DEEP and Bass Reactor (Sand Beige)"
          price={119.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61%2B4uZjjOIL._AC_SL1500_.jpg"
        />
        <Product
          id="336584712"
          title="Tom Clancy Shadow of the Dragon (A Jack Ryan Novel Book 20)"
          price={14.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51VSMxCrQqL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="45865598541"
          title='LG 55SM8600PUA Nano 8 Series 55" 4K Ultra HD Smart LED NanoCell TV (2019), Black'
          price={755.99}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/811fbqT69VL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
