import React from 'react';
import Button from '@mui/material/Button';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/Invoice.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

function createData(
  Item: string,
  Price: number,
  Quantity: number,
  Totals: number,
) {
  return { Item, Price, Quantity, Totals };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Invoice() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <div style={{backgroundColor: '#fff'}}>
      <Container>
      <main>
        
        <div className='text-center pt-5'>
          <h2 className='printBtn'><Button onClick={handlePrint} ><LocalPrintshopIcon/> &nbsp;Print this Invoice</Button></h2>
        </div>
        
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="invoice-tittle pt-4">
              <h3>Invoice</h3>
              <h3 className='float-right'>Order # 12345</h3>
            </div>
            <hr/>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <address>
                <strong>Billed To:</strong><br />
                    Nitika Mittal<br />
                    1234 Main<br />
                    Apt. 4B<br />
                    Springfield, ST 54321
                </address>
              </Col>
              <Col lg={6} md={6} sm={6} className='text-right'>
                <address>
                <strong>Billed To:</strong><br />
                    Saksham Agarwal<br />
                    1234 Main<br />
                    Apt. 4B<br />
                    Springfield, ST 54321
                </address>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <address>
                <strong>Payment Method:</strong><br />
                    visa ending ****4242<br />
                    nitika.adbike@gmail.com<br />
                </address>
              </Col>
              <Col lg={6} md={6} sm={6} className='text-right'>
                <address>
                <strong>Order Date:</strong><br />
                    june 6, 2023<br />
                </address>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className='pt-4'>
              <h5>Order summary</h5>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className='invoice-ordersummary'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Totals</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.Item}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.Item}
                        </TableCell>
                        <TableCell align="right">{row.Price}</TableCell>
                        <TableCell align="right">{row.Quantity}</TableCell>
                        <TableCell align="right">{row.Totals}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Col>
        </Row>
        <Row className='order-subtotal'>
            <Col lg={12} md={12} sm={12} className='invoiceOrderDetails'>
            <ul>
                <li><strong>Subtotal</strong> Rs.40.00</li>
                <li><strong>Shipping</strong> Rs. 60.00</li>
                <li><strong style={{width:'180px'}}>Total</strong> Rs. 100.00</li>
            </ul>
            </Col>
        </Row>
      </main>
      </Container>
    </div>
  )
}

export default Invoice
