import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {} from 'redux'
import { func } from 'prop-types'

export default class Admin2 extends Component 
{



    
 
    render() {
        if(this.state.loggedIn)
        {
            return <Redirect to = "/FormValidation"/>
        }
        return (
            <div>
                <h2>Admin Page</h2>
            </div>
        )
    }
}
