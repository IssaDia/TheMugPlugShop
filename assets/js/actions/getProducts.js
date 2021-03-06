import {
  FETCH_PRODUCTS
} from './type';
import axios from 'axios';

const API_URL = process.env.API_URL;

{
  /* action to get all products from database via axios */
}

export const getProductsFromApi = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products
  }
};

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get(API_URL + "products", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(getProductsFromApi(response.data))
      })
      .catch(error => {
        throw (error);
      });

  }

}