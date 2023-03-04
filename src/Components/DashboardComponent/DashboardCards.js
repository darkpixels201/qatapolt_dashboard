import { Box, Grid } from '@mui/material';
import React from 'react'
import { AiFillStar, AiOutlineUserSwitch } from "react-icons/ai";
import { FaUserClock, FaClipboardCheck, FaTrophy } from "react-icons/fa";
import { colors } from '../../utils/Colors';
import CustomText from '../CustomComponents/CustomText';
import Spacer from '../CustomComponents/Spacer';

const DashboardCards = () => {
    const cards = [
        {
          id: 1,
          name: "Users",
          icon: <FaUserClock fontSize={20} color={colors.white1} />,
          color: "#6102ED",
          count: "59476",
        },
        {
          id: 2,
          name: "Posts",
          icon: <FaClipboardCheck fontSize={20} color={colors.white1} />,
          color: "#29C0B1",
          count: "59476",
        },
        {
          id: 3,
          name: "Trophies",
          icon: <FaTrophy fontSize={20} color={colors.white1} />,
          color: "#2D50ED",
          count: "59476",
        },
        {
          id: 4,
          name: "Downloads",
          icon: <AiFillStar fontSize={20} color={colors.white1} />,
          color: "#212437",
          count: "59476",
        },
      ];
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10, paddingLeft: 3, paddingRight: 3 }}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 8 }}
    >
      {cards.map((items, index) => (
        <Grid
          item
          xs={12}
          sm={4}
          md={2}
          key={index}
          sx={{ display: "flex", justifyContent: "center",  }}
        >
          <Box
            style={{
              height: 150,
              width: "95%",
              backgroundColor: items.color,
              borderRadius: 10,
              boxShadow: "0px 0px 8px -2px rgba(0,0,0,0.50)",
              // paddingLeft:20,
            }}
          >
            <div style={{ width: "auto", padding: 18, paddingTop: 20,   }}>
              <div style={{ display: "flex", alignItems: "center",  }}>
                <div
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    opacity: 0.5,
                    backgroundColor: colors.white,
                    // position: "relative",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginLeft: 5,
                  }}
                >
                  {items.icon}
                </div>
                <Spacer width={10} />
                <CustomText
                  title={items.name}
                  color={colors.white}
                  fontSize={15}
                  fontFamily={"medium"}
                />
              </div>
              <Spacer height={20} />
              <CustomText
                title={items.count}
                color={colors.white}
                fontSize={28}
              />

              <Spacer height={10} />
              <CustomText
                title={"Total for this month"}
                color={colors.white}
                fontSize={13}
                fontFamily={"medium"}
              />
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default DashboardCards