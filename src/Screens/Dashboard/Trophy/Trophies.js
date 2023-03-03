import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/system";
import { FaTrash } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiFillEye } from "react-icons/ai";
import { header, trophyHeader, userData } from "../../../utils/DataArray";
import { colors } from "../../../utils/Colors";
import Spacer from "../../../Components/CustomComponents/Spacer";
import CustomText from "../../../Components/CustomComponents/CustomText";
import { Link } from "react-router-dom";
const Trophies = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box sx={{ marginTop: 5, paddingLeft: 3, paddingRight: 3 }}>
      <CustomText title="Trophies" fontSize={40} fontFamily="bold" />
      <Spacer height={15} />
      <Paper
        sx={{
          width: "100%",
          margin: "auto",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: "0px 0px 8px -2px rgba(0,0,0,0.12)",
          width: window.innerWidth <= 659 ? "100%" : "50%",
        }}
      >
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table>
            <TableHead>
              <div style={{ padding: 10 }}>
                <CustomText
                  title="Trophy list"
                  fontSize={15}
                  fontFamily={"medium"}
                />
              </div>
            </TableHead>
            <TableHead>
              <TableRow>
                {trophyHeader.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
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
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {row.authimg1 || row.authimg2 ? (
                        <>
                          <TableCell
                            sx={{
                              borderColor: colors.grey,
                              borderWidth: 0.5,
                              width: 100,
                            }}
                          >
                            <CustomText title={row.name} fontSize={14} />
                          </TableCell>
                          <TableCell
                            sx={{
                              borderColor: colors.grey,
                              borderWidth: 0.5,
                              width: 200,
                            }}
                          >
                            <CustomText title={row.email} fontSize={14} />
                          </TableCell>
                          <TableCell
                            sx={{
                              borderColor: colors.grey,
                              borderWidth: 0.5,
                              width: 100,
                            }}
                          >
                            <CustomText title={row.accounttype} fontSize={14} />
                          </TableCell>

                          <TableCell
                            align="left"
                            sx={{
                              borderColor: colors.grey,
                              borderWidth: 0.5,
                              display: "flex",
                              justifyContent: "center",
                              width: 80,
                            }}
                          >
                            <Link to={`${row.id}`}>
                              <div
                                style={{
                                  height: 22,
                                  width: 22,
                                  // marginLeft: 10,
                                  backgroundColor: "rgb(225, 255, 252)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  alignSelf: "center",
                                  cursor: "pointer",
                                }}
                                // onClick={() => setOpen(!open)}
                              >
                                <AiFillEye color={colors.green} />
                              </div>
                            </Link>
                          </TableCell>
                        </>
                      ) : (
                        console.log("No")
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
            //   rowsPerPageOptions={false}
            rowsPerPageOptions={[]}
            component="div"
            count={userData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
      </Paper>
    </Box>
  );
};

export default Trophies;
