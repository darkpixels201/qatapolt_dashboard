import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import CustomText from "../../../Components/CustomComponents/CustomText";
import Spacer from "../../../Components/CustomComponents/Spacer";
import { colors } from "../../../utils/Colors";
import { userData } from "../../../utils/DataArray";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import LightGallery from "lightgallery/react";
import "../../../Assets/css/lightGallery.css";

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import CustomButton from "../../../Components/CustomComponents/CustomButton";

const TrophyDetail = () => {
  const { id } = useParams();
  console.log("UseparamID", id);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const GROUP2 = [
    //  userData.authimage1,
    "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1590317147887-72753a407931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    "https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];

  const PhotoItem = ({ image, thumb, group }) => (
    <div style={{ maxWidth: "250px", width: "400px", padding: "5px" }}>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} alt="lightbulb" style={{ width: "100%" }} />
      </LightgalleryItem>
    </div>
  );

  return (
    <>
      <Spacer height={30} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          // item
          // md={6}
          // xs={12}
          md={6}
          xs={12}
          style={{
            boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
            // backgroundColor: "red",
            borderRadius: 5,
            padding: 25,
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {userData.map((item, index) => (
            <Grid container key={index}>
              {item.id == id ? (
                <Grid
                  item
                  // md={12}
                  // xs={12}
                  md={6}
                  xs={12}
                  style={
                    {
                      // backgroundColor: "pink",
                      // display: "flex",
                      // justifyContent: "center",
                    }
                  }
                >
                  <Grid item md={12}>
                    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // justifyContent: "space-evenly",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
                    {/* <LightgalleryProvider>
                      <h1 style={{ textAlign: "center" }}>Photo Lightbulb</h1>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.authimage.map((p) => (
                          <PhotoItem key={p} image={p} group="group2" />
                        ))}
                      </div>
                    </LightgalleryProvider> */}
                    <LightgalleryProvider className="">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          // justifyContent: "space-evenly",
                          width: "100%",
                          flexWrap: "wrap",
                        }}
                      >
                        <PhotoItem
                          key={item.id}
                          image={item.authimg1}
                          group="group1"
                        />
                        <PhotoItem
                          key={item.id}
                          image={item.authimg2}
                          group="group1"
                        />
                      </div>
                    </LightgalleryProvider>
                    </div>
                  </Grid>
                  <Spacer height={20} />
                  <Grid item md={12}>
                    <div style={{ display: "flex" }}>
                      <CustomText title={"Name:"} fontFamily={"medium"} />
                      <Spacer width={5} />
                      <CustomText title={item.name} />
                    </div>

                    <Spacer height={20} />
                    <div style={{ display: "flex" }}>
                      <CustomText title={"Email:"} fontFamily={"medium"} />
                      <Spacer width={5} />
                      <CustomText title={item.email} />
                    </div>
                  </Grid>

                  <Spacer height={20} />
                  <Grid item md={12}>
                    <div style={{ display: "flex" }}>
                      <CustomText title={"Sport:"} fontFamily={"medium"} />
                      <Spacer width={5} />
                      <CustomText title={item.sport} />
                    </div>
                    <Spacer height={20} />
                    <div style={{ display: "flex" }}>
                      <CustomText
                        title={"Account type:"}
                        fontFamily={"medium"}
                      />
                      <Spacer width={5} />
                      <CustomText title={item.accounttype} />
                    </div>
                  </Grid>
                  <Spacer height={20} />
                  <Grid item md={12}>
                    <div style={{ display: "flex" }}>
                      <CustomText title={"Skill 1:"} fontFamily={"medium"} />
                      <Spacer width={5} />
                      <CustomText title={item.skill1} />
                    </div>
                    <Spacer height={20} />
                    <div style={{ display: "flex" }}>
                      <CustomText title={"Skill 2:"} fontFamily={"medium"} />
                      <Spacer width={5} />
                      <CustomText title={item.skill2} />
                    </div>
                  </Grid>
                  <Spacer height={20} />
                  <Grid item md={12}>
                    <div style={{ display: "flex" }}>
                      <CustomText title={"Skill 3:"} fontFamily={"medium"} />
                      <Spacer width={5} />
                      <CustomText title={item.skill3} />
                    </div>
                  </Grid>
                  <Spacer height={20} />
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          ))}
          <CustomButton
            title={"Give Trophy"}
            backgroundColor={colors.black}
            color={colors.white1}
            width={95}
            height={35}
            justifyContent={"center"}
            alignItems={"center"}
            // onClick={() => onSubmit()}
            borderRadius={4}
            fontFamily={"medium"}
          />
        </Grid>
      </div>
    </>
  );
};

export default TrophyDetail;

{
  /* <LightGallery plugins={[lgZoom, lgThumbnail]} mode="lg-fade" onInit={onInit}>
  <div href={item.authimg1}>
    <img
      alt="img1"
      src={item.authimg1}
      style={{ width: "80%", height: 200, marginBottom: 20 }}
    />
  </div>
  <div href={item.authimg2}>
    <img
      alt="img2"
      src={item.authimg2}
      style={{ width: "80%", height: 200, marginBottom: 20 }}
    />
  </div>
</LightGallery>; */
}
