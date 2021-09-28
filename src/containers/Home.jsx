import React, { Component } from 'react';
import Header from '../components/Header'
import Coursel from '../components/Coursel'

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <Coursel />
            </div>
        )
    }
}

export default Home;