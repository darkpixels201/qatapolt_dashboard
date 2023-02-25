// import { CCardTitle } from "@coreui/react";
import { Grid } from "@mui/material";
import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomSearchFilter from "./CustomSearchFilter";
import CustomText from "./CustomText";
import Spacer from "./Spacer";

function CustomHeader(props, justifyContent) {
  return (
    // <Container >
    <Grid
      container
      sx={{
        // padding: 15,
        display: "flex",
        // flexDirection:"row",
        // justifyContent: props.justifyContent || "space-around",
        flexWrap: "wrap",
        justifyContent:"center",
        // backgroundColor:"pink"
      }}
    >

      <Grid
        item
        // xs={12}
        // md={6}
        // lg={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 400,
          // backgroundColor:"yellow"
        }}
      >
        <CustomText title={props.title} fontSize={25} />
      </Grid>
      <Spacer width={15} />
      {props.buttonName ? (
        // Col
        <Grid
          item
          // md={6}
          // xs={12}
          // lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor:"orange"
          }}
        >
          <Link to={props.linkTo}>
            <button
              type="button"
              className="text-light br-50"
              style={{
                // marginBottom: window.innerWidth <= 775 ? 20 : null,
                // marginTop: window.innerWidth <= 775 ? 10 : null,
                width: 200,
                height: 50,
                borderRadius: 50,
                border: "none",
                // background: "linear-gradient(#0077b6 ,#0096c7, #48cae4)",
                background: "linear-gradient(to right,#085CFC, #4685FC)",
                boxShadow: "2px 2px 10px #4483FD",
              }}
            >
              <BsPlusLg style={{ marginRight: 15 }} />
              {props.buttonName}
            </button>
          </Link>
        </Grid>
      ) : null}

      {props.line ? (
        <hr
          style={{
            background: "grey",
            color: "grey",
            borderColor: "grey",
            height: "3px",
          }}
        />
      ) : null}
    </Grid>
    // </Container>
  );
}

export default CustomHeader;
