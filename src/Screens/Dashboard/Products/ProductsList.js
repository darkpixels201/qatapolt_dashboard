import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import productListArray from "../../../Components/ProductListArray";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { colors } from "../../../utils/Colors";
import CustomButtonHeader from "../../../Components/CustomComponents/CustomButtonHeader";
import { makeStyles, withStyles } from "@mui/styles";
import CustomText from "../../../Components/CustomComponents/CustomText";
import CustomButton from "../../../Components/CustomComponents/CustomButton";
import CustomSearchFilter from "../../../Components/CustomComponents/CustomSearchFilter";
import "../../../Assets/css/font.css";
import { useDispatch, useSelector } from "react-redux";
import { listProduct, removeProduct } from "../../../Actions/ProductAction";
import {
  PRODUCT_LIST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../../../Constant/ProductConstant";
import productListArray from "../../../Components/ProductListArray";
import { Box, Modal } from "@mui/material";
import EditModalProduct from "./EditModalProduct";
import ModalViewProduct from "./ModalViewProduct";
import Swal from "sweetalert2";
import { BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { icons } from "../../../Assets/Icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
// import "../../../Assets/css/toast.css";
// import MuiTableCell from "@material-ui/core/TableCell";
// import { withStyles } from "@mui/material";

// const TableCells = withStyles({
//   root: {
//     borderBottom: "none",
//     color:"green",
//   }
// })(TableCell);

const ProductTableCell = [
  { id: 1, name: "#" },
  { id: 1, name: "Image" },
  { id: 1, name: "Name" },
  { id: 1, name: "Purchase Price" },
  { id: 1, name: "Sale Price" },
  { id: 1, name: "Stock" },
  { id: 1, name: "Status" },
  { id: 1, name: "Delete" },
  { id: 1, name: "Edit" },
  { id: 1, name: "View" },
];

const useStyles = makeStyles({
  root: {
    borderBottom: "none",
  },
});

const ProductsList = () => {
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.productCreateReducer)
  const products = useSelector((state) => state.productReducer);
  // const { products, deleteProducts } = productList;
  // console.log("+++ From ProductList", products);

  const footballs = useSelector((state) => state.productReducer);
  console.log("=>=>=>=>=>footballs", footballs);

  const classes = useStyles();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast swal2-icon-error",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    icon: "success",
    title: "Product Has Been Deleted",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // listProduct(dispatch);
  }, [products]);

  // let length = products.length;

  {
    // console.log("productList.lenght", length);
  }

  const deleteHandler = (id) => {
    // console.log(id)
    removeProduct(dispatch, id);
    Toast.fire(<Toast />);
    // console.log("products.id",products.id)
    // console.log("deleteProducts",deleteProducts)

    // let newlist = products.filter((p)=>p.id!==id)
    // console.log("deleteHandler",newlist)
  };

  // useEffect(() => {
  //   console.log('products=>',products)
  // }, [products]);
  // listProduct(dispatch, products )

  // useEffect(() => {
  //   dispatch(listProduct());
  //   // sendEmail();
  // }, [dispatch]);

  const [user, setUser] = useState();
  const userCollectionRef = collection(db, "users");

  // console.log("ProductListUser", user);

  const [data, setData] = useState();

  // const userCollectionRef = collection(db, "users")

  // useEffect(() => {

  //   const getUsers = async () => {
  //    const data = await getDocs(userCollectionRef)
  //    setUser(data.docs.map((doc) => ({...doc.data()})))
  //   //  console.log("Data",user.name)
  //   }
  //   getUsers()
  // },[])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data() })));
      dispatch({ type: PRODUCT_LIST, payload: user });
      console.log("...user", user);
      //  console.log("Data",user.name)
    };
    getUsers();
  }, []);

  // useEffect(() => {
  //   listProduct(dispatch, user);
  //   // console.log("user",user)
  // }, []);

  // const response = listProduct(dispatch,user, setUser )
  // console.log("listProduct Response",response)

  const api_key = "e97938cecab0475835c03e9c6a1940c4";

  const football = () => {
    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": api_key,
      },
    })
      .then((res) => res.json())
      .then(({ response }) => {
        console.log("Responssesess", response);
        dispatch({ type: "FOOTBALL_LIST", payload: response });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const football = () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'bba9056550mshfa595b1bf856993p1f2e84jsn8a1e5a080f3b',
  //       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // }

  return (
    <div
      style={{
        width: "auto",
        alignSelf: "center",
        padding: 30,
        // backgroundColor: colors.lightgray,
      }}
    >
      <div onClick={() => football()}>onClick</div>
      {/* {user?.map((item, index) => {
        return (
          <div>
            {item.name}
            {item.email}
            {item.skill1}
            {item.skill2}
            {item.skill3}
          </div>
        );
      })} */}

      {Object.entries(footballs)?.map((item, index) => (
        <div key={index}>
          {console.log("footballs+footballs",item)}
          <>
          {/* {item.filter(() => )} */}
          </>
          {/* {Object.entries(item)?.map((data) => (
            <div>
              {console.log("data -------",data)}
              {data?.map((items) => (
                <>{console.log("data?.map", items)}</>
              ))}
            </div>
          ))} */}
          {/* {console.log("Object.entries(footballs)",item[1])} */}
        </div>
      ))}
      <TableContainer
        sx={{
          // border: "solid",
          // borderWidth: 0.5,
          borderTop: 0,
          color: colors.lightgray,
          boxShadow: "10",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderRadius: 5,
        }}
        // component={Paper}
        style={{}}
      >
        <CustomButtonHeader />

        <Table aria-label="simple table">
          {/* <TableHead style={{backgroundColor:colors.grey}} >
        <TableRow style={{width:"100%"}} >
          </TableRow>
        </TableHead> */}
          {/* <TableHead sx={{display:"flex", justifyContent:"space-evenly", width:"100%"}} >
          <TableRow>
            <TableCell>
              <CustomText title="Product List" />
            </TableCell>
            <TableCell><CustomButton title="hellllo" /></TableCell>
            <TableCell><CustomSearchFilter /></TableCell>
          </TableRow>
        </TableHead> */}
          {/* {length > 0 ? ( */}
          <>
            <TableHead
              sx={{
                // lineHeight:5,
                background: "linear-gradient(to right,#9cbefe, #f4f4f4)",
                boxShadow: "0.5px 0.5px 10px #6b9efd",
              }}
            >
              <TableRow sx={{ height: 5 }}>
                {ProductTableCell.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={{ borderBottom: "none", fontFamily: "bold" }}
                    align="center"
                  >
                    {item.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              <>{/* Product Map */}</>
            </TableBody>
          </>
          {/* ) : ( */}
          <div
            style={{
              height: "70vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={icons.emptyBox} style={{ height: 200, width: 200 }} />
          </div>
          {/* )} */}
        </Table>
      </TableContainer>
      <div>
        {/* {products.map((item) => (
          <div>
            {item.name}

          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ProductsList;
const ViewModal = ({ item, open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    {/* <ModalViewProduct item={item} /> */}
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
      <h2>{item.name}</h2>
    </Box>
  </Modal>
);
// {productListArray.map((item, index) => (
//   <div key={index} >
//     <Link to={`${item.id}`} >
//     {item.name}
//     </Link>
//   </div>
// ))}

// {products.map((item, index) => (
//   <>
//     {console.log("item.lenght", length)}
//     <TableRow key={index} hover>
//       <TableCell
//         sx={{ borderBottom: "none" }}
//         component="th"
//         scope="row"
//       >
//         {item.id}
//       </TableCell>
//       <TableCell sx={{ borderBottom: "none" }} align="center">
//         {"item.image"}
//       </TableCell>
//       <TableCell sx={{ borderBottom: "none" }} align="center">
//         {item.name}
//       </TableCell>
//       <TableCell sx={{ borderBottom: "none" }} align="center">
//         {item.purchasePrice}
//       </TableCell>
//       <TableCell sx={{ borderBottom: "none" }} align="center">
//         {item.salePrice}
//       </TableCell>
//       <TableCell sx={{ borderBottom: "none" }} align="center">
//         {item.stock}
//       </TableCell>
//       <TableCell sx={{ borderBottom: "none" }} align="center">
//         {"Status"}
//       </TableCell>
//       <TableCell
//         sx={{ borderBottom: "none", cursor: "pointer" }}
//         align="center"
//         onClick={() => {
//           deleteHandler(item.id);
//           // Swal.fire({
//           //   icon: 'error',
//           //   title: 'Oops...',
//           //   text: 'Something went wrong!',
//           //   footer: '<a href="">Why do I have this issue?</a>',
//           //   showCancelButton:true,
//           //   cancelButtonText:"Cancel",
//           //   confirmButtonText:"Yes",
//           // })
//         }}
//       >
//         <BsTrash size={19} color="red" />
//       </TableCell>

//       <TableCell
//         sx={{ borderBottom: "none" }}
//         align="center"
//         // onClick={() => setOpen(!open)}
//       >
//         <Link
//           to={`edit/${item.id}`}
//           style={{
//             textDecoration: "none",
//             alignSelf: "center",
//             // padding:20,
//             paddingTop: 12,
//             paddingBottom: 12,
//             padding: 5,
//             color: colors.black,
//             // backgroundColor: "red",
//           }}
//         >
//           <TiEdit size={20} />
//         </Link>
//       </TableCell>

//       <TableCell
//         sx={{ borderBottom: "none", height: "100%" }}
//         align="center"
//         onClick={() => setOpen(!open)}
//       >
//         {/* GO TO NEXT PAGE AND THEN VIEW PRODUCT */}
//         {/* <Link
//         to={`${item.id}`}
//         style={{
//           textDecoration: "none",
//           alignSelf: "center",
//           // padding:20,
//           paddingTop: 12,
//           paddingBottom: 12,
//           padding: 2,
//           color: colors.black,
//           // backgroundColor: "red",
//         }}
//       >
//         <FaEye size={19} />
//       </Link> */}

//         {/* MODAL VIEW */}
//         <FaEye size={19} />
//       </TableCell>

//       {/* <Modal open={open} onClose={handleClose}>
//       <EditModalProduct />
//     </Modal> */}

//       <ViewModal
//         item={item}
//         open={open}
//         handleClose={handleClose}
//       />
//     </TableRow>
//   </>
// ))}
