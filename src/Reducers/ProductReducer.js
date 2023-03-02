import productListArray from "../Components/ProductListArray";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  PRODUCT_LIST,
} from "../Constant/ProductConstant";

// Add, Edit, Remove, Show
export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      let newState = state;
      console.log(state.products.length)
      return { products: [...state.products, action.payload], loading: true };
      // return { products: console.log("Add Products") };
    }
    // case "LIST_PRODUCTS": {
    //   let newState = state;
    //   return { products: [...state.products, action.payload], loading: true };
    // }
    case EDIT_PRODUCT: {
      let newState = state;
      // fetch the product to edit
      let ProductToEdit = newState.products.find(
        (p) => p.id === action.payload.id
      );
      console.log("action.payload.id",action.payload.name)
      let newProduct = {
        ...ProductToEdit,
        name: action.payload.name,
        purchasePrice: action.payload.purchasePrice,
        salePrice: action.payload.salePrice,
        stock: action.payload.stock,
      };

      let newProducts = newState.products.map((p) =>
        p.id === ProductToEdit.id ? newProduct : p       // p Means if Nothing is Updated
        );
        console.log("newProducts--------",newProduct)

      newState={
        products:newProducts,
        loading:true,
      }

      return newState;
    }
    case REMOVE_PRODUCT: {
      console.log("action.payload",action.payload)
      return { products: state.products.filter((p)=>p.id!==action.payload), loading: true };
      // return { products: console.log("=>>>>>>>Delete Product") };
    }

    case PRODUCT_LIST: {
      console.log("Products Action.payload",action.payload)
      return { products: action.payload,  }
    }

    // case PRODUCT_LIST_REQUEST:
    //   return { loading: true, products: [] };

    // case PRODUCT_LIST_SUCCESS:
    //   return { products: action.payload };

    // case PRODUCT_LIST_FAIL:
    //   return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// import productListArray from "../Components/ProductListArray";

// export const productListReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case PRODUCT_LIST_REQUEST:
//       return { loading: true, products: [] };

//     case PRODUCT_LIST_SUCCESS:
//       return { products: action.payload };

//     case PRODUCT_LIST_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export const productCreateReducer = (
//   state = { products: [], loading: false },
//   action
// ) => {
//   switch (action.type) {
//     case PRODUCT_CREATE_REQUEST:
//       return { products: [...state.products], loading: true };

//     case PRODUCT_CREATE_SUCCESS:
//       return { products: [...state.products, action.payload] };

//     case PRODUCT_CREATE_FAIL:
//       return {
//         products: [...state.products],
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };
