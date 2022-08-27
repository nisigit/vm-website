import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Accordions = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is our Refund Policy?</Accordion.Header>
                <Accordion.Body>
                    Generally Venus and Mars Dating will not be offering refunds to consumers for the sale of premium features and/or other in-app purchases. Orders placed at 3rd party partner venues may only be refunded if they ordered products/services were NOT available and this is confirmed to us by the 3rd party partner venue in question. Refunds will not be issued for a lack of quality offered by a 3rd party partner venue as Venus and Mars has no legal obligations with regards to the quality or standard of service provided by 3rd party partner venues as a they are separate legal entities. Note that no refund will be provided unless confirmed to us by the 3rd party partner venue in question and we are not legally bound to offer refunds for any reason once a payment has been made on our platform to a 3rd party partner venue.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>When will my Premium Purchase be delivered?</Accordion.Header>
                <Accordion.Body>
                    Premium features when purchased will be delivered within 3 working days of the payment being received at maximum for the request premium feature(s). Orders placed at partner venues will be delivered on the timescale given by the  3rd Party Partner venues for which Venus and Mars hold no legal obligations on the delivery of the request service at the 3rd Party Partner venues.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Can I cancel my Premium Subscription?</Accordion.Header>
                <Accordion.Body>
                    Customers can cancel subscriptions for premium features at anytime after making a purchase. They will not be refunded for the period that they have already paid for and their subscription will remain active until the last subscription cycle that was paid for. After cancelling they will not be charged for any further subscription cycles of the relevant product until or unless they resume the subscription cycle by starting a new order for the service/product.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Can I return a purchased item?</Accordion.Header>
                <Accordion.Body>
                    No Returns will be offered on Premium features. No returns will be offered through our app with a 3rd Party Partner Venue, as they are legally responsible for the quality of service/product being provided to customers at their venue.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}

export default Accordions;