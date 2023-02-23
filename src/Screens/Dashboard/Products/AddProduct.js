import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createProduct } from "../../../Actions/ProductAction";
// import { createProduct } from "../../../Actions/ProductAction";
import CustomButton from "../../../Components/CustomComponents/CustomButton";
import CustomText from "../../../Components/CustomComponents/CustomText";
import Spacer from "../../../Components/CustomComponents/Spacer";
import FormValidation from "../../../Components/FormValidation";
import { colors } from "../../../utils/Colors";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    purchasePrice: "",
    salePrice: "",
    stock: "",
  });

  const name = state.name;
  const purchasePrice = state.purchasePrice;
  const salePrice = state.salePrice;
  const stock = state.stock;

  const [submitError, setSubmitError] = useState({
    nameError: "",
    purchasePriceError: "",
    salePriceError: "",
    stockError: "",
  });

  // const response = FormValidation(setSubmitError,submitError,  ...state)

  const formArray = [
    {
      id: 1,
      name: "Name",
      xs: 12,
      md: 4,
      onchange: (v) => {
        setState({ ...state, name: v.target.value });
        setSubmitError({ ...submitError, nameError: "" });
      },
      error: submitError.nameError,
    },
    {
      id: 1,
      name: "Purchase Price",
      xs: 12,
      md: 4,
      onchange: (v) => {
        setState({ ...state, purchasePrice: v.target.value });
        setSubmitError({ ...submitError, purchasePriceError: "" });
      },
      error: submitError.purchasePriceError,
    },
    {
      id: 1,
      name: "Sale Price",
      xs: 12,
      md: 4,
      onchange: (v) => {
        setState({ ...state, salePrice: v.target.value });
        setSubmitError({ ...submitError, salePriceError: "" });
      },
      error: submitError.salePriceError,
    },
    {
      id: 1,
      name: "Stock",
      xs: 12,
      md: 12,
      onchange: (v) => {
        setState({ ...state, stock: v.target.value });
        setSubmitError({ ...submitError, stockError: "" });
      },
      error: submitError.stockError,
    },
  ];

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    icon: "success",
    title: "Product Created Successfully",
  });

  const onSubmit = () => {
    // console.log("Button Pressed");
    // const { onSubmit } = state;

    const product = { ...state };
    // console.log(product)
    let response = 
    FormValidation(
      setSubmitError,
      submitError,
      name,
      purchasePrice,
      salePrice,
      stock
    );
    console.log("FormValidation",response)
    if (response) {
      createProduct(dispatch, product);
      navigate("/dashboard/products");
      Toast.fire(<Toast />);
    } else {
     console.log("Not Done")
    }

    

    // try {
    //   dispatch({ type: 'PRODUCT_CREATE_REQUEST' });

    //   const data = userData
    //   dispatch({ type: 'PRODUCT_CREATE_SUCCESS', payload: data });
    //   console.log("CreatePost", data)
    // } catch (error) {}
    // onSubmit(userData);

    // e.preventDefault();
    // const postData = () => (
    //   state.name,
    //   state.purchasePrice,
    //   state.salePrice,
    //   state.stock,
    //   );
    // const postData = () => {
    //  state.name;
    // };
    // function postData() {
    //   state.name
    // }
    // console.log("postData", postData);
    // console.log("State", userData);
    // console.log("e.preventDefault()", e.preventDefault());
  };

  return (
    <div style={{ width: "auto", padding: 50 }}>
      <div
        style={{
          width: "auto",
          // padding: 40,
          paddingRight: 40,
          paddingLeft: 40,
          paddingBottom: 40,
          paddingTop: 20,
          //   color: colors.lightgray,
          // boxShadow: 10,
          borderRadius: 10,
          boxShadow: "0.5px 0.5px 10px #E5E5E7",
        }}
      >
        <CustomText title="ADD PRODUCT" fontSize={25} fontFamily={"medium"} />
        <Spacer height={20} />
        <Grid container spacing={2}>
          {formArray.map((items, index) => (
            <Grid key={index} item xs={items.xs} md={items.md}>
              <TextField
                // onSubmit={() => {
                //   onSubmit();
                //   console.log("Presss");
                // }}
                size="small"
                id="outlined-basic"
                label={items.name}
                //   variant="outlined"
                fullWidth
                onChange={items.onchange}
                // error={items.error}
                // error={"This Field is required"}
              ></TextField>
              <div style={{ padding: 5 }}>
                <CustomText
                  fontSize={11}
                  color={colors.lightRed}
                  title={items.error ? items.error : ""}
                />
              </div>
            </Grid>
          ))}
        </Grid>
        <Spacer height={20} />
        {/* <Button xs={{backgroundColor:colors.black, color:colors.lightRed}} >Submit</Button> */}
        <CustomButton
          title={"Submit"}
          backgroundColor={colors.black}
          color={colors.white1}
          width={60}
          height={30}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => onSubmit()}
        />
      </div>
    </div>
  );
};

export default AddProduct;
