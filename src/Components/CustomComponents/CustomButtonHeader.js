import { Grid } from "@mui/material";
import React from "react";
import CustomHeader from "./CustomHeader";
import CustomSearchFilter from "./CustomSearchFilter";
import Spacer from "./Spacer";

function CustomButtonHeader({ filterBySearch }) {
  return (
    <Grid
      container
      style={{
        display: "flex",
        // justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: 15,
        // backgroundColor: "blue",
        // color: "white",
      }}
    >
      <Grid
        item
        xs={12}
        md={4}
        //  md={4}
        //  style={{ flex: 2 }}
      >
        {/* <> */}
        <CustomHeader
          title={"Product List"}
          buttonName={"Add Product"}
          justifyContent={"none"}
          // filterBySearch={filterBySearch}
          // search
        />
        {/* </> */}
      </Grid>
      <Spacer height={10} />

      <Grid item xs={12} md={4}></Grid>

      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CustomSearchFilter
          // style={{
          //   marginBottom: window.innerWidth <= 775 ? 20 : "",
          // }}
          placeholder={"Search Product"}
          onChange={filterBySearch}
        />
      </Grid>
    </Grid>
  );
}

export default CustomButtonHeader;
