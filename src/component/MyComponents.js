import React from "react";

 class MyComponent extends React.Component{
    state ={
        name : 'Eric',
        address: 'Hoi dan IT',
        age: 26
    };

    handleClick (event){
        // console.log(">>My name is", this.state.name)
        this.setState({
            name:'Kien',
            age:Math.floor((Math.random()*100)+1)
        });

        // this.setState({
        //     age:Math.floor((Math.random()*100)+1)
        // })
    }
    handleOnMoverOver(event){
        // console.log(event.pageX)
    }

    render(){
        return(
            
            <div>My name is {this.state.name} I'm from {this.state.age}
            <button onMouseOver = {this.handleOnMoverOver}>Hover Me</button>
            <button onClick={(event) =>{this.handleClick(event)} }>Cick me</button>
            </div>
            
        );
    }
 }

 export default MyComponent;