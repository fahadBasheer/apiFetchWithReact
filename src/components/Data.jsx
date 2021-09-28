import React, { Component } from 'react';
import './css/data.css'

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users?page=1')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render() {
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return <div>Loading...</div>;
        }
        else{
        return (
            <div>
                {console.log(items)}
                <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
                    {items.data.map(item => (
                        // <li key={item.id}>{item.first_name}</li>
                        
                        <div className="card user-card">
                            <img src={item.avatar} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name: {item.first_name+item.last_name}</h5>
                                <p className="card-text">Email: {item.email}</p>
                            </div>
                        </div>
                        
                        
                    ))}
                    </div>
            </div>
        )
        }
    }
}

export default Body;