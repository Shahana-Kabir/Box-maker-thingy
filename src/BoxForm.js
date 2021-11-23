import React, {Component} from "react";
import NewBoxList from './NewBoxList';
import NewBox from './NewBox';

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

addBox = ()=>{
    this.props.createBox(this.state)


}

handleSubmit = (e)=> {
    e.preventDefault();
    this.addBox();
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