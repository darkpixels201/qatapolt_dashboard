import React from "react";
import CustomHeader from "./CustomHeader";
import CustomSearchFilter from "./CustomSearchFilter";

function CustomButtonHeader({ filterBySearch }) {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "space-evenly",
        flexWrap:"wrap",
        // backgroundColor: "blue",
        // color: "white",
      }}
    >

        <div style={{flex:2}} >
          <CustomHeader
            // data-coreui-toggle="modal"
            // data-coreui-target="#exampleModal"
            title={"Product List"}
            buttonName={"Add Product"}
            // filterBySearch={filterBySearch}
            // search
          />
        </div>



      <div
        style={{
          flex: 3,
          display: "flex",
          justifyContent: window.innerWidth <= 775 ? "center" : "end",
          alignSelf: "center",
          // backgroundColor:"red"
        //   width:"100%"
        }}
      >
        <CustomSearchFilter
        style={{
          marginBottom: window.innerWidth <= 775 ? 20 : "",
        }}
          placeholder={"Search Product"}
          onChange={filterBySearch}
        />
      </div>
    </div>
  );
}

export default CustomButtonHeader;
