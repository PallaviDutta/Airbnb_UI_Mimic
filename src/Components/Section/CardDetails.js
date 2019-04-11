import React,{Component} from "react";
import Card from './Card';
import Sectioncss from './Section.css';
import { Rate } from 'antd';
import { Avatar } from 'antd';
import { Row, Col } from 'antd';

class CardDetails extends Component{

    state={
        users:[
            {name:"Kalpana's homestay is very comfortable and is tastefully furnished. Kalpana is there to help and her husband is also very helpful. We had.. ",name1:"Ashley",place:"United States"},
            {name:"This was the second time i had stayed here, and i felt very welcome. They accommodated my colleague as well in the other room ",name1:"Ashleyyy",place:"India"},
            {name:"Ginza is a great host and it was a pleasure staying at her place. It was very sweet of her to get in touch through emails and help us in ",name1:"Ashleysss",place:"London"}
        ],
        title:"Users List"
    };

    render(){
        return(<div>
            <h1>{this.state.title}</h1>
            <Row>
            <Col span={2}/>
            <Col span={6}>
            <Card>
                <div className={"box-shadow"}>
                <img src={require('./images/img1.jpeg')} style={{padding:'9%'}} />
                <Rate disabled defaultValue={5} style={{color:'rgb(0, 132, 137)',marginTop:'5%'}} />
                <div>{this.state.users[0].name}</div>    
                <Row style={{paddingTop:'5%'}}>
                <Col span={3}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col span={21}>
                <div>{this.state.users[0].name1}</div>
                <div>{this.state.users[0].place}</div>
                </Col>
                </Row>
                </div>    
            </Card>
            </Col>
            <Col span={1}/>
            <Col span={6}>
            <Card>
                <div className={"box-shadow"}>
                <img src={require('./images/img1.jpeg')} style={{padding:'9%'}} />
                <Rate disabled defaultValue={5} style={{color:'rgb(0, 132, 137)',marginTop:'5%'}} />
                <div>{this.state.users[1].name}</div>    
                <Row style={{paddingTop:'5%'}}>
                <Col span={3}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col span={21}>
                <div>{this.state.users[1].name1}</div>
                <div>{this.state.users[1].place}</div>
                </Col>
                </Row>
                </div>    
            </Card>
            </Col>
            <Col span={1}/>
            <Col span={6}>
            <Card>
                <div className={"box-shadow"}>
                <img src={require('./images/img1.jpeg')} style={{padding:'9%'}} />
                <Rate disabled defaultValue={5} style={{color:'rgb(0, 132, 137)',marginTop:'5%'}} />
                <div>{this.state.users[2].name}</div>    
                <Row style={{paddingTop:'5%'}}>
                <Col span={3}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col span={21}>
                <div>{this.state.users[2].name1}</div>
                <div>{this.state.users[2].place}</div>
                </Col>
                </Row>
                </div>    
            </Card>
            </Col>
            <Col span={2}/>
            </Row>
        </div>

        )
    }
}


export default CardDetails;