import React from "react"

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
            count: 0
        }
            console.log('constructor',props);
            
    }
  
    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <h1>hello class component</h1>
            <h1>{this.props.name}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>decrement</button>

        </div>
    }
}

export default MyComponent; // export the class MyComponent for other files to use it. This is called exporting the component.


// class-- class is a blue print to create objects

// class is a keyword to create a class
// MyComponent is a class name (it can be any name)
// extends is a keyword to inherit the properties of React.Component
// React.Component is a base class (it is a class)

// extends --to access the properties of parent class

// constructor, super
// state  -- state is an object containing current values of variables

// rendering -- refreshing or updating the UI


// state -- object to store the data that needs to be changed and used in the component