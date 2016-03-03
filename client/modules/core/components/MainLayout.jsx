import React from 'react';
import {Grid, Row} from 'react-bootstrap';

const Layout = ({content = () => null }) => (
 <Grid>
  <Row>
   <h1>Journal</h1>
   {content()}
  </Row>
 </Grid>
);
export default Layout;
