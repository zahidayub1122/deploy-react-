 import React, {Component, Fragment } from 'react'
import Student from './Student'
import Pract from "./pract"
import "./App.css"
import Info from './HOC/hoc'
import {adminInfo} from './HOC/hoc'
//import Home from './pages/Home'
//import About from './pages/About'
//import Contact from './pages/Contact'
//import Menu from './pages/Menu'
//import Menu2 from './pages/Menu2'
// import Menu from './Project/Menu'
// import About from './Project/About'
// import Skills from './Project/Skills'
// import Education from './Project/Education'
// import Home from './Project/Home'




import Menu from './RoutingPract/Menu'
import Sign from './RoutingPract/sign'
import Isb from './RoutingPract/isb'
import Bwp from './RoutingPract/bwp'
import FormValidation from './component Folder/formValidation'
import Admin from './component Folder/admin'


import {BrowserRouter,Route,Switch} from  'react-router-dom'
import FormValid2 from './component Folder/FormValid2'
import Admin2 from './component Folder/Admin2'
import Reduxpractice from './ReduxPract/Reduxpractice'
import ReducerPract from './ReduxPract/ReducerPract'

export default class App extends Component {
   
   render() {
   
      return (
         
         <BrowserRouter>
         <div>
            
            <Fragment>
            {/* <ReducerPract/> */}
               {/* <Reduxpractice/> */}
               {/* <FormValid2/>
               <switch>
                  <Route path = "/Admin2" component ={Admin2}/>
                  <Route path="'/FormValidation" component = {FormValidation}/>
               </switch> */}
               {/* <FormValidation/>
               <switch>    
                  <Route path = "/Admin" component={Admin}/>
                  <Route path = "/logout" component={FormValidation}/>
                  {/* <Route path = "/FormValidation" component= {FormValidation}/> */}
               {/* </switch> */} */}

               {/* <Sign v = {10+20+30}/> */}
               {/* <Menu/> */}
               {/* <switch>
                  <Route path = "/" exact component = {Bwp}/>
                  <Route path = "/Isb" component = {Isb}/>
                  <Route path = "/Sign" component = {Sign}/>
               </switch> */}
            </Fragment>   
         </div>
         </BrowserRouter>
      )

   }
}

// const App = ()=>{
//    return (
//       <BrowserRouter>
//       <>
//     <Menu/>
//      <switch>
//         <Route path = "/" exact component = {Home}/>
//         <Route path = "/About" component = {About}/>
//         <Route path = "/Skills" component = {Skills}/>
//          <Route path ="/Education" component ={Education}/>
//      </switch>
//      </>

//       </BrowserRouter>
    
//    )

// }

// export default App







// Note : This is earlier Code


// Switch "S" should be capital else Error ho ga 
// Biggest Mistake 

// just for "Back Slash Error /" waste 2 hours
// function App (){
//    return (
//       <BrowserRouter>
//               <div>
//                 <Menu/>/
                 
//                 <switch>
//                {/* component c must be smaller case letter */}
//                 <Route path ="/" exact component = {Home}/>
//                 <Route path = "/About" component = {About}/>
//                 <Route path = "/Contact" component = {Contact}/>
//                 </switch>
//              </div>
//              </BrowserRouter> 
             

//    )
// }
  
// export default App
 