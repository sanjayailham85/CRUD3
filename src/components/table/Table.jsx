import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductImg from '../../assets/image/product.jpg';

const List = () => {
  const rows = [
    {
      id: 1,
      product: 'Product 1',
      img: ProductImg,
      customer: 'John Doe',
      date: '2 January',
      amount: '50',
      method: 'Online Payment',
      status: 'Approved',
    },
    {
      id: 2,
      product: 'Product 1',
      img: ProductImg,
      customer: 'John Doe',
      date: '2 January',
      amount: '50',
      method: 'Online Payment',
      status: 'Approved',
    },
    {
      id: 3,
      product: 'Product 1',
      img: ProductImg,
      customer: 'John Doe',
      date: '2 January',
      amount: '50',
      method: 'Online Payment',
      status: 'Approved',
    },
    {
      id: 4,
      product: 'Product 1',
      img: ProductImg,
      customer: 'John Doe',
      date: '2 January',
      amount: '50',
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 5,
      product: 'Product 1',
      img: ProductImg,
      customer: 'John Doe',
      date: '2 January',
      amount: '50',
      method: 'Online Payment',
      status: 'Approved',
    },
    {
      id: 6,
      product: 'Product 1',
      img: ProductImg,
      customer: 'John Doe',
      date: '2 January',
      amount: '50',
      method: 'Online Payment',
      status: 'Pending',
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="product-img" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
