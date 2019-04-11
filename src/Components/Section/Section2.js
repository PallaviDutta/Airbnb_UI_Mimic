import React, { Component } from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import CardDetails from "./CardDetails";

var sectionStyle = {
    width: "100%",
    height: "730px"
  };


const Section2 =(props) =>{
    return(
        <section style={ sectionStyle }>
        <div style={{paddingLeft:'15%',paddingTop:'10%'}}>
        <Row>
            <Col><h1 className={"head1"}><b>What guests are saying about homes in India</b></h1></Col>
            <Col><h1 className={"head2"}><span>India homes were rated </span><span><b>4.6 out of 5 stars</b></span><span> with </span><span><b>340,000+ reviews</b></span></h1></Col>
        </Row>
        </div>

        <CardDetails/>

        </section>
    )
}



export default Section2;