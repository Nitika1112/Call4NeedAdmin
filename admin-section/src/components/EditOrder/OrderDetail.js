import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Row, Col } from 'reactstrap';
import Button from '@mui/material/Button';

function createData(
  id: number,
  item: string,
  quantity: number,
  options: string,
  edit: string,
  price: number
) {
  return { id, item, quantity, options, edit, price };
}

const rows = [
  createData('22', 'Burger', 4, 24, 4.0, 'Rs.110'),
  createData('12', 'Pizza', 2, 37, 4.3, 'Rs.400'),
  createData('32', 'Dosa', 1, 24, 6.0, 'Rs.120'),
  createData('45', 'Coke', 1, 67, 4.3, 'Rs.55'),
  createData('46', 'ChocoLava', 1, 49, 3.9, 'Rs.99'),
];

export default function OrderDetail() {
  return (
    <div className='sub-content'>
        <div className='main'>
            <Container>
                <div class="header_box">
                    <h4>Order detail</h4>  
                </div>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Item ID</TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Options</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell>{row.item}</TableCell>
                        <TableCell>{row.quantity}</TableCell>
                        <TableCell>{row.options}</TableCell>
                        <TableCell>{row.edit}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <Row className='order-subtotal'>
                    <Col lg={12} md={12} sm={12} className='clientOrderDetails'>
                    <ul>
                        <li><strong>Subtotal</strong> Rs.40.00</li>
                        <li><strong>Free Delivery</strong> Rs. 60.00</li>
                        <li className='orderTotal'><strong>Total</strong> Rs. 100.00</li>
                    </ul>
                    <Button variant="contained" className='lisitingBtn'>
                        Place Order
                    </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}