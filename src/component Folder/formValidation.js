import React, { Component } from 'react'
import { Redirect } from 'react-router'
 
export default class FormValidation extends Component 
{
    state = {
        name :'',
        roll :'',
        nameError:'',
        passError:'',
        loggedIn:false
    }
    
    handler = (e)=>{
         
        this.setState({[e.target.name]:e.target.value})   
    }

    valid = ()=>
    {
        if(this.state.name.includes('@') && this.state.roll.length<5)
        {
            this.setState({nameError : 'Name Should be corrct',passError:'Pass is not correct'})
        }
        else return true
    }

   submit =(e)=>
    {
        
        e.preventDefault()
        if(this.valid())
        {
            alert("Form Has been Submitted")
        }
        // const {name,roll} = this.state
        // if (name=='zahid'&&roll=='12')
        // {
        //     localStorage.setItem('token','fadfadf')
        //     this.setState({loggedIn:true})

    }

         
    
    
    render() 
    {
        if(this.state.loggedIn){
            return <Redirect to="/Admin"/>
        }
        return (
            <div>
                  <form>
            <input type = "text" name = "name" value = {this.state.name} onChange = {this.handler}     placeholder = "Enter Name"/> 
        <p>{this.state.nameError}</p>
            <input type = "text" name = "roll" value = {this.state.roll} onChange = {this.handler}     placeholder = "Enter Name"/> 
        <p>{this.state.passError}</p>
  <button onClick = {this.submit}>Submit Data</button>                
</form>
            </div>
        )
    }
}
