import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
const Entry = ({entry}) => (
 <Grid>
  <Row>
   <Col xs={6} xsOffset={3}>
    <h2>{entry.title}</h2>
    <p>
     {entry.text}
    </p>
   </Col>
  </Row>
 </Grid>
);
export default Entry;
