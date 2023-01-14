import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import { GrMenu } from "react-icons/gr";
import CustomText from "../CustomComponents/CustomText";
import Spacer from "../CustomComponents/Spacer";
import { CgProfile } from "react-icons/cg";
import DropDownList from "../DropDownList";
import { colors } from "../../utils/Colors";

const HeaderDashboard = () => {
  const SearchArray = [
    {
      id: 1,
      price: "$95.00",
    },
    {
      id: 2,
      price: "$95.00",
    },
    {
      id: 3,
      price: "$95.00",
    },
    {
      id: 3,
      price: "$95.00",
    },
    {
      id: 3,
      price: "$95.00",
    },
  ];
  const { toggleSidebar } = useProSidebar();
  const { collapseSidebar } = useProSidebar();
  return (
    <div>
      <div
        style={{
          width: "auto",
          padding: 18,
          display: "flex",
          justifyContent: "space-between",
          // border:"solid",
          // borderTop:0,
          // borderRight:0,
          // borderLeft:0,
          // borderBottom:1
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <GrMenu
              cursor={"pointer"}
              size={24}
              onClick={() => {
                window.innerWidth <= 450 ? toggleSidebar() : collapseSidebar();
              }}
              // onClick={() => }
            />
            <Spacer width={20} />
            <CustomText title="Dashboard" fontSize={15} />
            <Spacer width={20} />
            <CustomText title="Settings" fontSize={15} />
            <Spacer width={20} />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spacer width={20} />
            <CustomText title="Dashboard" fontSize={15} />
            <Spacer width={20} />
            <DropDownList SearchArray={SearchArray} Icon={CgProfile} />
            <Spacer width={20} />
          </div>
        </div>
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: colors.grey }} />
    </div>
  );
};

export default HeaderDashboard;
