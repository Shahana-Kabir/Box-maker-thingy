import React, {Component} from "react";
 import './Box.css';

class Box extends Component{
    // static defaultProps = {
    //     height: "",
    //     width: "",
    //     color: ""
    // }
    
    constructor(props){
        super(props);
        this.state = {height: '',
                     width: '',
                     color: "",
                     click: false,
        }
    }

    onChangeHeight = (e)=>{
        this.setState({
            height:e.target.value
        })
        
    }

    onChangeWidth = (e)=>{
        this.setState({
            width:e.target.value
        })
        
    }

    onChangeColor = (e)=>{
        this.setState({
            color:e.target.value
        })
    }

     addBox = ()=> {
         this.setState({click:true})

    //                 // console.log(this.state.height);
    //                 // console.log(this.state.width);
    //                 // console.log(this.state.color);



       
    //         {/* <div style ={{
    //             height:`${this.state.wdith}em` ,
    //             width:`${this.state.wdith}em`,
    //             color: this.state.color
    //             }
    //         } /> */}
       
       

    }
        
    handleSubmit = (e)=>{
        e.preventDefault();
          this.addBox();
    }

    render(){
        return(<div className = "box">
            <form onSubmit = {this.handleSubmit}>
                <label> Height: </label>
                <input
                // name = "height" 
                value = {this.state.height}
                onChange = {this.onChangeHeight} />
               

                <label> Width:</label>
                <input
                // name = "width" 
                value = {this.state.width}
                onChange = {this.onChangeWidth}
                />
                

                <label> Color: </label>
                <input
                value = {this.state.color}
                onChange = {this.onChangeColor}/>
               
                
                <button className = "box__button">
                    Add box
                </button> 
                      
            </form>
            
            {this.state.click? <div className = "box__div" style ={{
                height:`${this.state.height}em` ,
                width:`${this.state.width}em`,
                backgroundColor: this.state.color
                }
            } />:''}         
            </div>           
        )
    }
}
export default Box;