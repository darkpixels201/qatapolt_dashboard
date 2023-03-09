import { Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { icons } from "../../Assets/Icons";
import { colors } from "../../utils/Colors";
import CustomText from "../CustomComponents/CustomText";
import Spacer from "../CustomComponents/Spacer";

const UserModal = ({ open, onClose, data }) => {
  return (
    <Modal open={open} onClose={onClose}>
      {/* <ModalViewProduct item={item} /> */}

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: window.innerWidth <= 645 ? "100%" : "50%",
          height: window.innerWidth <= 645 ? "100%" : "90%",
          bgcolor: "white",
          //   border: "2px solid #000",
          boxShadow: 24,
          //   p: 4,
          border: "none",
          borderRadius: 5,
        }}
      >
        <div style={{display:"flex", justifyContent:"flex-end", padding:10, cursor:"pointer" }} onClick={() => onClose() } >
          <img src={icons.cross} style={{height:15, width:15, padding:7,  backgroundColor:colors.grey6, borderRadius:50 }} />
        </div>
        <div style={{ padding: 10, display:"flex" }}>
          <CustomText
            title="User Detail"
            color={colors.textGrey}
            fontSize={25}
            fontFamily={"bold"}
          />
          <Spacer width={10} />
          <img src={icons.detail} style={{height:20, width:20, alignSelf:"center"}} />
        </div>
        <Spacer height={20} />
        <Grid container>
          <Grid item xs={12} md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <CustomText title={"Name"} fontFamily={"medium"} />
              <Spacer width={5} />
              <CustomText title={data.name} />
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
              }}
            />
            <Spacer height={20} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <CustomText title={"Email"} fontFamily={"medium"} />
              <Spacer width={5} />
              <CustomText title={data.email} />
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
              }}
            />
            <Spacer height={20} />
          </Grid>

          <Grid item xs={12} md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <CustomText title={"Account Type"} fontFamily={"medium"} />
              <Spacer width={5} />
              <CustomText title={data.accounttype} />
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
              }}
            />
            <Spacer height={20} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <CustomText title={"Sports"} fontFamily={"medium"} />
              <Spacer width={5} />
              <CustomText title={data.sport} />
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
              }}
            />
            <Spacer height={20} />
          </Grid>

          <Grid item xs={12} md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <CustomText title={"Skill 1: "} fontFamily={"medium"} />
              <Spacer width={5} />
              {data.skill1 ? (
                <CustomText title={data.skill1} />
              ) : (
                <RxCross2 fontSize={18} color={colors.red} />
              )}
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
              }}
            />
            <Spacer height={20} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <CustomText title={"Skill 2: "} fontFamily={"medium"} />
              <Spacer width={5} />
              {data.skill1 ? (
                <CustomText title={data.skill2} />
              ) : (
                <RxCross2 fontSize={18} color={colors.red} />
              )}
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
              }}
            />
            <Spacer height={20} />
          </Grid>

          <Grid item xs={12} md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              <CustomText title={"Skill 3:"} fontFamily={"medium"} />
              <Spacer width={5} />
              {data.skill1 ? (
                <CustomText title={data.skill3} />
              ) : (
                <RxCross2 fontSize={18} color={colors.red} />
              )}
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
              }}
            />

            <Spacer height={20} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default UserModal;
