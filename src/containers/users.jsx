import React, { Component } from 'react';
import Header from '../components/Header';
import Data from '../components/Data'

class User extends Component {
    render() {
        return (
            <div>
                <Header />
                <Data />
            </div>
        )
    }
}

export default User;