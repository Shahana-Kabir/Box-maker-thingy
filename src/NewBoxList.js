import React, {Component} from "react";
import NewBox from './NewBox';
import BoxForm from './BoxForm';
// import uuid from "uuid/v4";

class NewBoxList extends Component {
    constructor(props){
        super(props);
        this.state = {boxes: []};

    }

    create = (newBox)=>{
        this.setState({boxes: [...this.state.boxes, newBox] });
    }

    remove = (id)=>{
        this.setState({boxes: this.state.boxes.filter(box => box.id !== id)});
    }

    
    render(){
        const box1 = this.state.boxes.map(box => (<NewBox 
            key = {box.id} 
            id = {box.id} 
            width = {box.width} 
            height = {box.height}
            color = {box.color}
            removeBox = {() => this.remove(box.id)} 
            />
            ))
        return(
            <div>
                <BoxForm createBox = {this.create}/>
                
                {box1}

            </div>
        )
    }
}

export default NewBoxList;