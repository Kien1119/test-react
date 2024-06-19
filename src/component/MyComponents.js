import React from "react";

 class MyComponent extends React.Component{
    state ={
        name : 'Eric',
        address: 'Hoi dan IT',
        age: 26
    }
    render(){
        return(
            
            <div>My name is {this.state.name} I'm from {this.state.address}</div>
        );
    }
 }

 export default MyComponent;