import { Box } from "@mui/system";
import React from "react";

const ModalViewProduct = ({...props}) => {
   const {item} = {...props}
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
        <h2>{item.name}</h2>
      </Box>
    </div>
  );
};

export default ModalViewProduct;
