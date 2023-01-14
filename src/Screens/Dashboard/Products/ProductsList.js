import React from "react";
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
import { useSelector } from "react-redux";
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
  { id: 1, name: "Stock" },
  { id: 1, name: "Sale Price" },
  { id: 1, name: "Purchase Price" },
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
  const productList = useSelector((state) => state.productListReducer)
const { products } = productList
  const classes = useStyles();
  return (
    <div
      style={{
        width: "auto",
        alignSelf: "center",
        padding: 30,
        // backgroundColor: colors.lightgray,
      }}
    >
      {/* <TableCells>Nooooo</TableCells> */}
      {/* <div
        style={{
          backgroundColor: "#fff",
          // marginBottom: -10,
          border: "solid",
          borderWidth: 0.4,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderBottom: 0,
          color: colors.lightgray,
          boxShadow: "10",
          // boxShadow: '5px 0 10px 2px'
          boxShadow: "1px 2px 9px #F4AAB9",
          // borderRadius: 5,
        }}
      >
        <CustomButtonHeader />
      </div> */}

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
            {products.map((item) => (
              <TableRow key={item.name} hover>
                <TableCell
                  sx={{ borderBottom: "none" }}
                  component="th"
                  scope="row"
                >
                  {item.id}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.image}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.name}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.stock}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.SalePrice}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {item.PurchasePrice}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"Status"}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"Delete"}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"Edit"}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="center">
                  {"View"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsList;

// {productListArray.map((item, index) => (
//   <div key={index} >
//     <Link to={`${item.id}`} >
//     {item.name}
//     </Link>
//   </div>
// ))}
