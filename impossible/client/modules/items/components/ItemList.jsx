import React from 'react';
import Item from './Item.jsx';
import {Row, Col, Glyphicon} from 'react-bootstrap';

const ItemList = ({
    content = () => null
}) => (
    <Row className="show-grid">
        <Col xs={12}>
            <a href="/edit">
                <Glyphicon glyph="plus"></Glyphicon>
                New Item</a>
            <Item/>
        </Col>
    </Row>
);

export default ItemList;
