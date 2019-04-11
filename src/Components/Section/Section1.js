import React,{Component} from "react";
import 'antd/dist/antd.css';
import Background from './images/cover.png';
import Sectioncss from './Section.css';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';



var sectionStyle = {
  width: "100%",
  height: "730px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Background})`
};

const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY','DD/MM/YY']

const Option = Select.Option;

class Section1 extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      <div style={{paddingTop:'5%',paddingLeft:'14%'}}>
        <Row className={"box-shadow"}>
        <Col><h1 className={"head1"}><b>Book unique homes and experiences.</b></h1></Col>
        <Col>
        <h5 style={{color: 'rgb(72, 72, 72)'}}>WHERE</h5>
        <div className="example-input" style={{ width: 350}}>
        <Input size="large" placeholder="Anywhere" />
        </div>
        </Col>
        <Col span={12} style={{paddingTop:'5%'}}>
        <h5>CHECK-IN</h5>
        <DatePicker defaultValue={moment('2019/01/01', dateFormat)} format={dateFormat} size="large"/>
        </Col>
        <Col span={12} style={{paddingTop:'5%'}}>
        <h5>CHECKOUT</h5>
        <DatePicker defaultValue={moment('2019/01/01', dateFormat)} format={dateFormat} size="large"/>
        </Col>
        <Col style={{paddingTop:'25%'}}>
        <h5 style={{color: 'rgb(72, 72, 72)'}}>GUESTS</h5>
        <div>
        <Select defaultValue="Guests" style={{ width: 350}} size="large">
        <Option value="Adults">Adults</Option>
        <Option value="Children">Children</Option>
        <Option value="Infants">Infants</Option>
        </Select>
        </div>
        </Col>
        <Col style={{paddingTop:'5%'}}>
        <Button size="large" style={{backgroundColor: 'rgb(255, 90, 95)',color:'white',float:'right'}}>Search</Button>
        </Col>
        </Row>
        </div>
      </section>
    );
  }
}

export default Section1;