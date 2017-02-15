import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
const EntryList = ({entries}) => (
 <Grid>
  <Row>
   {entries.map(entry => (
    <Col xs={3} key={entry._id}>
     <Panel>
      <p>{entry.text}</p>
      <a href={'/entry/${entry._id}'}>View Entry</a>
     </Panel>
    </Col>
   ))}
  </Row>
 </Grid>
);
export default EntryList;
