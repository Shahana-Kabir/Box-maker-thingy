import React, {Component} from "react";

class NewBox extends Component{
    render(){
        return(
            <div>
                <div
                style ={{
                height:`${this.props.height}em` ,
                width:`${this.props.width}em` ,
                backgroundColor: this.props.color
                }
            }
            />
               
            </div>
        )
    }
}

export default NewBox;