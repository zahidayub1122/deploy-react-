import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to = "/">Bwp</Link></li>
                    <li><Link to = "/Isb">ISB</Link></li>
                    <li><Link to = "/Sign">Sign</Link></li>
                </ul>
                
            </div>
        )
    }
}
