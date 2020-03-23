import React, { Component } from 'react'

export default class ExpenseForm extends Component {

    state = {
        description : '',
        textAreaValue:''
    }
    onDescriptioncHandler = (e)=>{
        const description = e.target.value
        this.setState(()=>({
            description
        }
           
        ))
    }

    onTextAreaChange=(e)=>{
const textAreaValue = e.target.value
this.setState(()=>({
    textAreaValue
}))
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text"
                     value = {this.state.Description} 
                     onChange = {this.onDescriptioncHandler}
                     placeholder = "Description" autoFocus/>

                    <input type = "number"
                     
                     placeholder = "Amount"/>

                     <textarea 
                     placeholder ="Please add note"
                      value ={this.state.textAreaValue}
                      onChange ={this.onTextAreaChange}>
                     </textarea>

                     <button>Add Expense</button>
                </form>
                
            </div>
        )
    }
}
