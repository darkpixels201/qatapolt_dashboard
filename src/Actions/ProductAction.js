import productListArray from "../Components/ProductListArray";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  CREATE_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  EDIT_PRODUCT,
} from "../Constant/ProductConstant";

// export const listProduct = (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_LIST_REQUEST });
//     const data  = productListArray;
//     // console.log("Action Data List", data);
//     // console.log(products)
//     dispatch({
//       type: PRODUCT_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.detail
//           ? error.response.data.detail
//           : error.message,
//     });
//   }
// };

export const createProduct = (dispatch, product) => {
  try {
    const data = product;
    dispatch({ type: CREATE_PRODUCT, payload: { ...data, id: Math.random() } });
    console.log("dispatch");

    // dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    // console.log("CreatePost", data);
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = (dispatch, id) => {
  // const dataId = id;
  const dataId = id
  dispatch({ type: REMOVE_PRODUCT, payload:dataId });
  console.log("Dispatch removeProduct")
};

export const updateProduct = (dispatch, data) => {
  const newData = data
  dispatch({type: EDIT_PRODUCT, payload: newData, })
  console.log("Edit Date",newData)
}
