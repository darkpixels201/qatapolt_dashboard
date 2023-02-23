import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomButton from "../../../Components/CustomComponents/CustomButton";
import CustomText from "../../../Components/CustomComponents/CustomText";
import Spacer from "../../../Components/CustomComponents/Spacer";
import { colors } from "../../../utils/Colors";

const EditModalProduct = ({item}) => {
  // const { id } = useParams();
  // console.log("ParamsID", id);

  const [state, setState] = useState({
    name: "",
    purchasePrice: "",
    salePrice: "",
    stock: "",
  });
  const formArray = [
    {
      id: 1,
      name: "Name",
      xs: 12,
      md: 4,
      onchange: (v) => setState({ ...state, name: v.target.value }),
      value: () => setState({ name: state.name }),
    },
    {
      id: 1,
      name: "Purchase Price",
      xs: 12,
      md: 4,
      onchange: (v) => setState({ ...state, purchasePrice: v.target.value }),
      value: (v) => setState({ ...state, purchasePrice: v.target.value }),
    },
    {
      id: 1,
      name: "Sale Price",
      xs: 12,
      md: 4,
      onchange: (v) => setState({ ...state, salePrice: v.target.value }),
      value: (v) => setState({ ...state, salePrice: v.target.value }),
    },
    {
      id: 1,
      name: "Stock",
      xs: 12,
      md: 12,
      onchange: (v) => setState({ ...state, stock: v.target.value }),
      value: state.name,
    },
  ];
  // console.log("state.name",state)

  const productList = useSelector((state) => state.productReducer);
  const { products, deleteProducts } = productList;
  console.log("Edit Products", products);

  // useEffect(() => {
  //   if (products) {
  //     setState({ ...products });
  //   }
  // }, [products]);
  // console.log("State", state);

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: window.innerWidth <= 645 ? "100%" : "70%",
          height: window.innerWidth <= 645 ? "100%" : "90%",
          bgcolor: "white",
          //   border: "2px solid #000",
          boxShadow: 24,
          //   p: 4,
          border: "none",
          borderRadius: 5,
        }}
      >
        {/* {products.map((item, index) => (
          <div key={index}>
            {item.id == id ? ( */}
            <>
              <h2>Name:{item.name}</h2>
              <h2>Price:{item.salePrice}</h2>
              <h2>Stock:{item.stock}</h2>
              <h2>Descripton:{item.des}</h2>
            </>
             {/* ) : (
            "" 
            )} 
          </div>
        ))} */}
       
      </Box>
    </div>
  );
};

export default EditModalProduct;
