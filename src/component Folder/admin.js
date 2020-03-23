import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Admin extends Component 
{
    constructor(props)
    {
        super(props)
        
       
        const token =  localStorage.getItem('token')
        let loggIn = true
        if(token==null)
        {
            loggIn=false
        }
        this.state={
            loggIn
        }
        
    }
    render()
     {
         if(this.state.loggIn==false)
         {
             return <Redirect to = "/FormValidation"/>
         }
        return (
            <div>
                <h2>Hi zahi</h2>
                <button><Link to = "/logout">Logout</Link></button>
            </div>
        )
    }
}
