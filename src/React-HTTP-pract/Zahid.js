 import React, { Component } from 'react'
 import axios from 'axios'
import Ayub from './Ayub'

axios.defaults.baseURL = ''
axios.defaults.headers.common['authorization'] = 'Auth Toke'
axios.defaults.headers.post[conta] = 'application/Json'

axios.interceptors.request.use(request=>{
    console.log(request)
    return request
},err=>{
    console.log(error)
    return Promise.reject(error)
})
 export default class Zahid extends Component
 {
     state = {
         post : []
     }


        PostDataHandler=()=>       
      {
          const data = {
              id : this.state.id,
              name :this.state.name,
              roll : this.state.roll
          }
          axios.post('',data)
          .then (Response=>{
              console.log(response)
          })

          
          
          
      }
     render() {
         this.state.post.map(post1=>{
             return <Ayub key = {post1.id}/>
         })

         return (
             <div>
                 
             </div>
         )
     }
 }
 