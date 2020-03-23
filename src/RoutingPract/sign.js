// import React, { Component } from 'react'
// import classes from'./practcss.css'
// import Isb from './isb'
// import axios from "axios";


// export default class Sign extends Component {

//     state = {
//         postData : []
//     }


//     componentDidMount(){
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response=>{
//             const data = response.data.slice(0,4)
//            const updatedData = data.map(post=>{
//                 return {
//                     ...post,
//                     author : 'zahid'
//                 }
//             })
//             this.setState({postData:updatedData})
//             console.log(data)
//         })
//     }
//     render() 
//     {
//         const d = this.state.postData.map(post=>{
//             return < Isb name = {post.title} key =  {post.id} />
//         })
 
//     }
    
       
    
// }
