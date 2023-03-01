import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { icons } from "../../Assets/Icons";
import { colors } from "../../utils/Colors";
import { AiFillStar, AiOutlineUserSwitch } from "react-icons/ai";
import { FaUserClock, FaClipboardCheck, FaTrophy } from "react-icons/fa";
import CustomText from "../../Components/CustomComponents/CustomText";
import Spacer from "../../Components/CustomComponents/Spacer";
import DashboardCards from "../../Components/DashboardComponent/DashboardCards";
import DashboardCharts from "../../Components/DashboardComponent/DashboardCharts";
import DashboardTable from "../../Components/DashboardComponent/DashboardTable";

const Dashboard = () => {
  
  return (
   <div  >
   <DashboardCards />
   <DashboardCharts />
   <DashboardTable />
   </div>
  );
};

export default Dashboard;
