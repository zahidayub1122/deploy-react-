import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class FormValid2 extends Component 
{

    state ={
        fName :'',
        pass :'',
        LoggIn :false
    }

    handler = (e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    submitData =()=>{
      const {fName,pass} =  this.state
      if(fName=='zahid' && pass == '123')
      {
         this.setState({LoggIn:true})
         localStorage.setItem('token','ajflafdj')
         
      }
      else{
          console.log('Wrong Man')
      }
         
    }
    render()
     {
         if(this.state.LoggIn)
         {
             return <Redirect to = "/Admin2"/>
         }
        return (
            <div>
 
                <form>
                <input type = "text" name = "fName" onChange = {this.handler} value = {this.state.fName} placeholder ="Name"/> 
                <input type = "text" name = "pass" onChange = {this.handler} value = {this.state.pass} placeholder ="Pass"/> 
                <button type ="button" onClick={this.submitData}>Submit </button>
                </form>
                
            </div>
        )
    }
}
