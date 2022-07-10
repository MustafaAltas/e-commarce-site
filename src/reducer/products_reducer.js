import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return{
        ...state,
        isSideBarOpen : true
      }
    case SIDEBAR_CLOSE:
      return {
        ...state,
        isSideBarOpen : false
      }
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        products_loading: true,

      }
    case GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        products_loading : false,
        featured_products : action.payload.filter((item) => item.featured === true),
        products : action.payload,

      }
    case GET_PRODUCTS_ERROR:
      return{
        ...state,
        products_error:true,
        products_loading : false,
      }
  
    default:
      return state;
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer;
