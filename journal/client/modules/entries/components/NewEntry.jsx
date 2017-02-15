import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
class NewEntry extends React.Component {
 render() {
  const {error} = this.props;
  return (
   <Col xs={12} sm={6} smOffset={3}>
    <Panel>
     <h1>Add a New Entry</h1>
     {error ? <p style={{color: 'red'}}>{error}</p> : null}
     <form>
      <Input ref='text' type='textarea' placeholder='Add your entry' />
      <ButtonInput onClick={this.newEntry.bind(this)} bsStyle='primary' type='submit' value='Create'/>
     </form>
    </Panel>
   </Col>
  );
 }
 newEntry(e) {
  e.preventDefault();
  const {create} = this.props;
  const {text} = this.refs;
  create(text.getValue());
  text.getInputDOMNode().value = '';
 }
}
export default NewEntry;
