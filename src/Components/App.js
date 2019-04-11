import React, {Component} from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Home from './Main/Home';



export default class extends Component {
    render(){
        return <div>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    }
}
