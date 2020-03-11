import React, { Fragment } from "react";
import { connect } from "react-redux";
import pic1 from "../../images/pic1.jpg";
import { Container } from "react-bootstrap";
import { increaseCart } from "../actions/quantityCart";
import { decreaseCart } from "../actions/quantityCart";
import { bindActionCreators } from "redux";
var FontAwesome = require("react-fontawesome");

const Cart = ({ productProps }) => {
  let productsInCart = [];
  console.log(productProps);

  Object.keys(productProps.products).forEach(function(item) {
    if (productProps.products[item].inCart) {
      productsInCart.push(productProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <tr>
          <td>
            <img src={pic1} alt="" height="50" width="50"></img>
            <span>{product.name}</span>
          </td>
          <td>${parseFloat(product.price).toFixed(2)}</td>
          <td>
            <FontAwesome
              name="fas fa-minus"
              onClick={()=>decreaseCart(product.id)}
            />
            <input placeholder={product.numbers}></input>
            <FontAwesome
              name="fas fa-plus"
              onClick={() => increaseCart(product.id)}
            />
          </td>
          <td>${parseFloat(product.numbers * product.price).toFixed(2)}</td>
        </tr>
      </Fragment>
    );
  });

  return (
    <Container>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">PRODUCT</th>
            <th scope="col">PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {productsInCart}
          <tr>
            <td></td>
            <td></td>
            <td>Total Cart</td>
            <td>${parseFloat(productProps.cartCost).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};



const mapStateToProps = state => {
  return {
    productProps: state.productState
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      increaseCart,
      decreaseCart}, dispatch
    );

};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
