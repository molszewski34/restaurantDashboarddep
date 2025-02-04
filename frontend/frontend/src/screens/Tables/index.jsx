import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listTables, listRooms } from "../../actions/tablesActions";
import { listOrders } from "../../actions/ordersActions";
import { createOrder } from "../../actions/ordersActions";

import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Button from "@mui/material/Button";
import { LinkContainer } from "react-router-bootstrap";
import { LoginMessageComponent } from "../../components/LoginMessageComponent";
import OrderDetails from "../../components/orderComponents/OrderDetails";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables() {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { error, loading, orders } = orderList;

  const tableList = useSelector((state) => state.tableList);
  const {
    error: tableListError,
    loading: tableListLoading,
    tables,
  } = tableList;

  const roomsList = useSelector((state) => state.roomsList);
  const { error: roomsListError, loading: roomsListLoading, rooms } = roomsList;

  const userLogin = useSelector((state) => state.userLogin);
  const {
    error: userLoginError,
    loading: userLoginLoading,
    userInfo,
  } = userLogin;

  useEffect(() => {
    dispatch(listTables());
    dispatch(listRooms());
    dispatch(listOrders());
  }, []);

  const addOrderHandler = (id) => {
    dispatch(createOrder(id, orders));
    console.log("Moment after dispatch");
  };

  return loading ? (
    <CircularProgress color="secondary" />
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div style={{ margin: "15px auto", maxWidth: "1366px" }}>
      <div>
        <h1>Tables</h1>
      </div>
      {userLogin.userInfo.id ? (
        <Box sx={{ margin: "0" }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Table no</StyledTableCell>
                  <StyledTableCell align="center">Room</StyledTableCell>
                  <StyledTableCell align="center"> Max Persons</StyledTableCell>
                  <StyledTableCell align="center">Order</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {tables.map((table) => (
                  <StyledTableRow key={table.id}>
                    <StyledTableCell component="th" scope="row">
                      {table.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {rooms
                        .filter((room) => room.id == table.room)
                        .map((filteredRoom) => (
                          <div key={filteredRoom.id}>{filteredRoom.name}</div>
                        ))}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {table.numberOfPersons}
                    </StyledTableCell>

                    <StyledTableCell
                      style={{ cursor: "pointer" }}
                      align="center"
                    >
                      {table.isOccupied ? (
                        <div>
                          {orders
                            .filter((order) => order.table == table.id)
                            .map((filteredOrder) => (
                              <LinkContainer
                                key={filteredOrder.id}
                                component="button"
                                to={`/orders/order/${filteredOrder.id}`}
                              >
                                <Button variant="contained">details</Button>
                              </LinkContainer>
                            ))}
                        </div>
                      ) : (
                        <Button
                          variant="contained"
                          onClick={() => {
                            addOrderHandler(table.id, orders);
                          }}
                        >
                          add
                        </Button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <LoginMessageComponent />
      )}
    </div>
  );
}
