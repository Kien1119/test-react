import React from "react";

 class MyComponent extends React.Component{
    state ={
        name : 'Eric',
        address: 'Hoi dan IT',
        age: 26
    };

    handleClick(){
        console.log(">>click me my button")
    }

    render(){
        return(
            
            <div>My name is {this.state.name} I'm from {this.state.address}
            <button onClick={ this.handleClick}>Cick me</button>
            </div>
            
        );
    }
 }

 export default MyComponent;