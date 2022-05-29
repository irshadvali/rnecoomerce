import {ecommerceApiRequest} from '../apirequest/ecommerce.apirequest';
export const GET_ALL_DATA_REQUEST = 'GET_ALL_DATA_REQUEST';
export const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';
export const GET_ALL_DATA_FAILURE = 'GET_ALL_DATA_FAILURE';
export const GET_CAT_REQUEST = 'GET_CAT_REQUEST';
export const GET_CAT_SUCCESS = 'GET_CAT_SUCCESS';
export const GET_CAT_FAILURE = 'GET_CAT_FAILURE';
//Purchase
export const homePageActions = {
  getAllData,
  getCat,
};

function getAllData(all) {
  console.log("all")
  return dispatch => {
    dispatch(request());
    // let payload = 'entries?category=books&https=true';
    ecommerceApiRequest.getAll("all").then(
      data => dispatch(success(data)),
      error => dispatch(failure(error.toString())),
    );
  };

  function request() {
    return {type: GET_ALL_DATA_REQUEST};
  }
  function success(data) {
    console.log("data===========",data);
    return {type: GET_ALL_DATA_SUCCESS, data};
  }
  function failure(error) {
    return {type: GET_ALL_DATA_FAILURE, error};
  }
}
function getCat(){

  return dispatch => {
    dispatch(request());
    // let payload = 'entries?category=books&https=true';
      ecommerceApiRequest.getCata().then(
      data => dispatch(success(data)),
      error => dispatch(failure(error.toString())),
    );
  };

  function request() {
    return {type: GET_ALL_DATA_REQUEST};
  }
  function success(cat) {
    console.log("data===========",cat);
    return {type: GET_ALL_DATA_SUCCESS, cat};
  }
  function failure(error) {
    return {type: GET_ALL_DATA_FAILURE, error};
  }

}