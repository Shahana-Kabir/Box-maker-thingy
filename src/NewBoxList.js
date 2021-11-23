import React, {Component} from "react";
import NewBox from './NewBox';
import BoxForm from './BoxForm';

class NewBoxList extends Component {
    constructor(props){
        super(props);
        this.state = {boxes: [{width: 10, height: 10, color: 'green'}]};

    }

    create = (newBox)=>{
        this.setState({boxes: [...this.state.boxes, newBox] });
    }
    render(){
        const box1 = this.state.boxes.map(box => (<NewBox width = {box.width} height = {box.height}
            color = {box.color} />))
        return(
            <div>
                <BoxForm createBox = {this.create}/>
                
                {box1}

            </div>
        )
    }
}

export default NewBoxList;