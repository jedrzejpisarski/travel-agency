import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


export const OrderForm = () => {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <PageTitle text='Trip options' />
                    <OrderForm tripCost={cost} />
                </Col>
            </Row>
        </Grid>
    );
},