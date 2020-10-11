import React from "react";
import "./Homepage.css";
import Product from "../Product/Product";
import products from "../products_data";

function Homepage() {
  const allProductsData = products.map((row, index) => {
    const product = row.map(({ id, title, price, image }) => (
      <Product
        key={id}
        id={id}
        title={title}
        price={price}
        rating={Math.floor(Math.random() * 6) || 1}
        image={image}
      />
    ));

    return (
      <div key={index} className="home__row">
        {product}
      </div>
    );
  });

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      {allProductsData}
    </div>
  );
}

export default Homepage;
