import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Box, padding, width } from "@mui/system";
import { FaCross, FaTrash } from "react-icons/fa";

import CustomText from "../../Components/CustomComponents/CustomText";
import { colors } from "../../utils/Colors";
import Spacer from "../../Components/CustomComponents/Spacer";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { BsEye } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import UserModal from "../../Components/Modal/UserModal";
import { header, userData } from "../../utils/DataArray";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const User = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Box sx={{ marginTop: 5, paddingLeft: 3, paddingRight: 3 }}>
        <CustomText title="QataPolt User's" fontSize={40} fontFamily="bold" />
        <Spacer height={15} />
        <Paper
          sx={{
            width: "100%",
            margin: "auto",
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: "0px 0px 8px -2px rgba(0,0,0,0.12)",
          }}
        >
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table>
              <TableHead>
                <div style={{ padding: 20 }}>
                  <CustomText
                    title="Users"
                    fontSize={15}
                    fontFamily={"medium"}
                  />
                </div>
              </TableHead>
              <TableHead>
                <TableRow>
                  {header.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      // style={{ minWidth: column.minWidth }}
                    >
                      <CustomText
                        title={column.label}
                        fontSize={15}
                        color={colors.grey6}
                        fontFamily={"medium"}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {userData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell
                          sx={{ borderColor: colors.grey, borderWidth: 0.5 }}
                        >
                          <CustomText title={row.name} fontSize={14} />
                        </TableCell>
                        <TableCell
                          sx={{ borderColor: colors.grey, borderWidth: 0.5 }}
                        >
                          <CustomText title={row.email} fontSize={14} />
                        </TableCell>
                        <TableCell
                          sx={{ borderColor: colors.grey, borderWidth: 0.5 }}
                        >
                          <CustomText title={row.accounttype} fontSize={14} />
                        </TableCell>
                        <TableCell
                          sx={{ borderColor: colors.grey, borderWidth: 0.5 }}
                        >
                          <CustomText title={row.sport} fontSize={14} />
                        </TableCell>

                        {/* Skills */}

                        <TableCell
                          align={row.skill1 ? "left" : "center"}
                          sx={{ borderColor: colors.grey, borderWidth: 0.5 }}
                        >
                          <CustomText
                            title={
                              row.skill1 ? (
                                row.skill1
                              ) : (
                                <RxCross2 fontSize={18} color={colors.red} />
                              )
                            }
                            fontSize={14}
                          />
                        </TableCell>

                        <TableCell
                          align={row.skill2 ? "left" : "center"}
                          sx={{ borderColor: colors.grey, borderWidth: 0.5 }}
                        >
                          <CustomText
                            title={
                              row.skill2 ? (
                                row.skill2
                              ) : (
                                <RxCross2
                                  fontSize={18}
                                  color={colors.red}
                                  style={{ marginRight: row.skill2 ? 0 : 35 }}
                                />
                              )
                            }
                            fontSize={14}
                          />
                        </TableCell>

                        <TableCell
                          align={row.skill3 ? "left" : "center"}
                          sx={{ borderColor: colors.grey, borderWidth: 0.5 }}
                        >
                          <CustomText
                            title={
                              row.skill3 ? (
                                row.skill3
                              ) : (
                                <RxCross2
                                  fontSize={18}
                                  color={colors.red}
                                  style={{ marginRight: row.skill3 ? 0 : 35 }}
                                />
                              )
                            }
                            fontSize={14}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderColor: colors.grey,
                            borderWidth: 0.5,
                            // display: "flex",
                            // justifyContent:"center",
                            // alignItems:"center",
                            // alignSelf:"center"
                          }}
                        >
                          <div
                            style={{
                              // // height: 22,
                              // // width: 22,
                              // // marginLeft: 10,
                              // backgroundColor: "rgb(225, 255, 252)",
                              // // display: "flex",
                              // // justifyContent: "center",
                              // // alignItems: "center",
                              // // alignSelf: "center",
                              // cursor: "pointer",
                              display: "flex",
                              justifyContent:"center"
                            }}
                            onClick={() => setOpen(!open)}
                          >
                            <div
                              style={{
                                backgroundColor: "rgb(225, 255, 252)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "center",
                                cursor: "pointer",
                              }}
                            >
                              <AiFillEye color={colors.green} />
                            </div>
                            <Spacer width={25} />
                            <div
                              style={{
                                backgroundColor: "rgba(255, 51, 102, 0.05)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "center",
                                cursor: "pointer",
                              }}
                            >
                              <FaTrash color={colors.red} />
                            </div>
                          </div>
                          {/* <Spacer width={15} /> */}
                          {/* <div
                            style={{
                              // height: 22,
                              // width: 22,
                              // marginLeft: 10,
                              backgroundColor: "rgba(255, 51, 102, 0.05)",
                              // display: "flex",
                              // justifyContent: "center",
                              // alignItems: "center",
                              // alignSelf: "center",
                              cursor: "pointer",
                            }}
                          >
                            <FaTrash color={colors.red} />
                          </div> */}
                        </TableCell>
                        <UserModal
                          open={open}
                          onClose={handleClose}
                          item={row}
                        />
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            //   rowsPerPageOptions={false}
            rowsPerPageOptions={[]}
            component="div"
            count={userData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
};

export default User;
