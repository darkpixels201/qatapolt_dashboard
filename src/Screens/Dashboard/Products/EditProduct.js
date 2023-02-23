import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProduct } from "../../../Actions/ProductAction";
import CustomButton from "../../../Components/CustomComponents/CustomButton";
import CustomText from "../../../Components/CustomComponents/CustomText";
import Spacer from "../../../Components/CustomComponents/Spacer";
import { colors } from "../../../utils/Colors";
import { useNavigate } from "react-router-dom";
import "../../../Assets/css/toast.css";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const EditProduct = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

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
    title: "Product Edit Successfully",
  });

  const [newValue, setNewValue] = useState({
    name: "",
    purchasePrice: "",
    salePrice: "",
    stock: "",
  });
  const productList = useSelector((state) => state.productReducer);
  const { products } = productList;
  console.log("ReducerID", products);

  // useEffect = (() => {
  //     const newProducts = products.find((item) => item.id == id);
  //     setNewValue(newProducts);
  //   },[]);

  useEffect(() => {
    const newProducts = products.find((item) => item.id == id);
    setNewValue(newProducts);
  }, []);

  // console.log("Data=>>>>>>>>",data)

  const onSubmit = () => {
    const data = { ...newValue };
    updateProduct(dispatch, data);
    navigate("/dashboard/products");
    Toast.fire(<Toast />);
  };

  return (
    <div style={{ width: "auto", padding: 50 }}>
      {/* {products.map((item, index) => (
        <div key={item.id}>
          {item.id == id ? ( */}
      <div
        style={{
          width: "auto",
          paddingRight: 40,
          paddingLeft: 40,
          paddingBottom: 40,
          paddingTop: 20,
          borderRadius: 10,
          boxShadow: "0.5px 0.5px 10px #E5E5E7",
        }}
      >
        <CustomText title="EDIT PRODUCT" fontSize={25} fontFamily={"medium"} />
        <Spacer height={20} />
        <Grid container spacing={2}>
          {/* {formArray.map((items, index) => ( */}
          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              id="outlined-basic"
              label={"Name"}
              //   variant="outlined"
              fullWidth
              value={newValue.name}
              onChange={(v) =>
                setNewValue({ ...newValue, name: v.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              id="outlined-basic"
              label={"Purchase Price"}
              //   variant="outlined"
              value={newValue.purchasePrice}
              fullWidth
              onChange={(v) => {
                setNewValue({ ...newValue, purchasePrice: v.target.value });
                console.log("newValue=>>>>>>>>", newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              id="outlined-basic"
              label={"Sale Price"}
              //   variant="outlined"
              fullWidth
              onChange={(v) =>
                setNewValue({ ...newValue, salePrice: v.target.value })
              }
              value={newValue.salePrice}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              size="small"
              id="outlined-basic"
              label={"stock"}
              //   variant="outlined"
              fullWidth
              onChange={(v) =>
                setNewValue({ ...newValue, stock: v.target.value })
              }
              value={newValue.stock}
            />
          </Grid>
          {/* ))} */}
        </Grid>
        <Spacer height={20} />
        <CustomButton
          title={"Submit"}
          backgroundColor={colors.black}
          color={colors.white1}
          width={60}
          height={30}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => {
            onSubmit();
          }}
        />
      </div>
      {/* ) : (
            ""
          )}
        </div>
      ))} */}
    </div>
  );
};

export default EditProduct;
