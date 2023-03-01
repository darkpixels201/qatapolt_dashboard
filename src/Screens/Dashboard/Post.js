import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createProduct } from "../../Actions/ProductAction";
import CustomButton from "../../Components/CustomComponents/CustomButton";
import CustomText from "../../Components/CustomComponents/CustomText";
import Spacer from "../../Components/CustomComponents/Spacer";
import FormValidation from "../../Components/FormValidation";
import { colors } from "../../utils/Colors";
import { AiOutlinePaperClip } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: "",
    desc: "",
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

  const [file, setFile] = useState(null);

  const handleFile = (e) => setFile(URL.createObjectURL(e.target.files[0]));

  // const response = FormValidation(setSubmitError,submitError,  ...state)

  const formArray = [
    // {
    //   id: 1,
    //   name: "Name",
    //   xs: 12,
    //   md: 4,
    //   onchange: (v) => {
    //     setState({ ...state, name: v.target.value });
    //     setSubmitError({ ...submitError, nameError: "" });
    //   },
    //   error: submitError.nameError,
    // },
    // {
    //   id: 1,
    //   name: "Purchase Price",
    //   xs: 12,
    //   md: 4,
    //   onchange: (v) => {
    //     setState({ ...state, purchasePrice: v.target.value });
    //     setSubmitError({ ...submitError, purchasePriceError: "" });
    //   },
    //   error: submitError.purchasePriceError,
    // },
    // {
    //   id: 1,
    //   name: "Sale Price",
    //   xs: 12,
    //   md: 4,
    //   onchange: (v) => {
    //     setState({ ...state, salePrice: v.target.value });
    //     setSubmitError({ ...submitError, salePriceError: "" });
    //   },
    //   error: submitError.salePriceError,
    // },
    {
      id: 1,
      name: "Title",
      xs: 12,
      md: 12,
      onchange: (v) => {
        setState({ ...state, title: v.target.value });
        // setSubmitError({ ...submitError, stockError: "" });
      },
      // error: submitError.stockError,
    },
    {
      id: 2,
      name: "Title",
      xs: 12,
      md: 12,
      onchange: (v) => {
        setState({ ...state, desc: v.target.value });
        // setSubmitError({ ...submitError, stockError: "" });
      },
      desc: true,
      // error: submitError.stockError,
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
    let response = FormValidation(
      setSubmitError,
      submitError,
      name,
      purchasePrice,
      salePrice,
      stock
    );
    console.log("FormValidation", response);
    if (response) {
      createProduct(dispatch, product);
      navigate("/dashboard/products");
      Toast.fire(<Toast />);
    } else {
      console.log("Not Done");
    }
  };

  return (
    <div style={{ width: "auto", padding: 20 }}>
      <CustomText title="QataPolt News" fontSize={35} fontFamily="bold" />
      <Spacer height={15} />

      <Grid container justifyContent={"center"}>
        <Grid
          item
          justifyContent={"center"}
          md={6}
          xs={10}
          style={{
            // width: 500,
            // height:300,
            padding: 40,
            // paddingRight: 40,
            // paddingLeft: 40,
            // paddingBottom: 40,
            // // paddingTop: 20,
            // display:"flex",
            // flexDirection:"column",
            // justifyContent:"center",
            borderRadius: 10,
            boxShadow: "0.5px 0.5px 10px #E5E5E7",
          }}
        >
          <CustomText title="Create Post" fontSize={25} fontFamily={"medium"} />
          <Spacer height={20} />
          <Grid container spacing={2}>
            {formArray.map((items, index) => (
              <Grid key={index} item xs={items.xs} md={items.md}>
                {items.desc ? (
                  <textarea
                    style={{
                      borderColor: colors.textGrey,
                      width: "98%",
                      backgroundColor: colors.bgWhite,
                      //  color: colors.textGrey,
                      paddingTop: 10,
                      paddingLeft: 7,
                      fontFamily: "Regular",
                      outline: "none",
                      borderRadius:5,
                    }}
                    placeholder="Description"
                    rows="6"
                    cols="72"
                    //  value={items.name}
                    onChange={items.onchange}
                  ></textarea>
                ) : (
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label={items.name}
                    fullWidth
                    onChange={items.onchange}
                  ></TextField>
                )}

                <div style={{ padding: 5 }}>
                  <CustomText
                    fontSize={11}
                    color={colors.lightRed}
                    title={items.error ? items.error : ""}
                  />
                </div>
              </Grid>
            ))}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 18,
              }}
            >
              {file ? (
                <div>
                  <RxCross2
                    style={{
                      alignSelf: "center",
                      display: "flex",
                      justifyContent: "flex-start",
                      cursor: "pointer",
                      width: 20,
                      height: 20,
                      padding: 2,
                      margin: 5,
                      backgroundColor: colors.grey2,
                      borderRadius: 20,
                      position: "absolute",
                    }}
                    size={10}
                    onClick={() => setFile("")}
                  />
                  <img src={file} height={100} width={"100%"} />
                </div>
              ) : (
                <div style={{}}>
                  {/* <AiOutlinePaperClip fontSize={15} /> */}

                  <CustomText
                    title={
                      <>
                        <input
                          style={{
                            backgroundColor: "none",
                            color: colors.purple,
                            display: "none",
                          }}
                          type="file"
                          id="actual-btn"
                          onChange={handleFile}
                        />
                        <div style={{display:"flex"}} >
                          
                          <label
                            for="actual-btn"
                            style={{
                              cursor: "pointer",
                              fontSize: 12,
                              width: 130,
                              height: 40,
                              border: "solid",
                              borderWidth: 0.5,
                              borderRadius: 5,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              color:colors.lightBlack3
                            }}
                          >
                          <AiOutlineCloudUpload fontSize={22} />
                            <Spacer width={5} />
                            Upload Image
                          </label>
                        </div>
                      </>
                    }
                    fontSize={12}
                    fontFamily={"medium"}
                  />
                </div>
              )}
            </div>
          </Grid>
          <Spacer height={20} />
          <CustomButton
            title={"Submit"}
            backgroundColor={colors.black}
            color={colors.white1}
            width={75}
            height={35}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => onSubmit()}
            borderRadius={4}
            fontFamily={"medium"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Post;
