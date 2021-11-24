import React, {Component} from "react";
import NewBoxList from './NewBoxList';
import NewBox from './NewBox';
const uuid = require('uuid').v4;


class BoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
                    height: '', 
                     width: '',
                     color: "" , 
                    };
    }

    onChangeHeight = (e)=>{
            this.setState ({height: e.target.value})
    }

    onChangeWidth = (e)=>{
        this.setState ({width: e.target.value})
}

onChangeColor = (e)=>{
    this.setState ({color: e.target.value})
}



handleSubmit = (e)=> {
    e.preventDefault();    
    const newBox1 = {...this.state, id: uuid()};
    this.props.createBox(newBox1);
    this.setState({
        height: '', 
         width: '',
         color: "" , 
        })
    
}

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label> Height:
                    <input 
                    value = {this.state.height}
                    onChange = {this.onChangeHeight}/>
                    </label>

                    <label> Width:
                    <input 
                    value = {this.state.width}
                    onChange = {this.onChangeWidth}/>
                    </label>

                    <label> Color:
                    <input 
                    value = {this.state.color}
                    onChange = {this.onChangeColor}/>
                    </label>

                    <button>Add box!</button>
                </form>
                {/* {this.state.click ? <NewBox height = {this.state.height} width = {this.state.width} color = {this.state.color}/>: ''} */}
            </div>
        )
    }
}

export default BoxForm;