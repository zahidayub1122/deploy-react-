import React,{ Fragment } from 'react'
import ReactDom from 'react-dom';

import {addExpense} from './action/expense'
import {setTextFilter} from './action/filters'
import getVisibleExpenses from './selector/expense'
import configureStore from './store/configureStore'

import {Provider} from 'react-redux'

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Pract from './pract'
import Custom from './custom'
import Student from './Student';
import ExpenseDashboardPage from './component Folder/ExpenseDashboardPage'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const store = configureStore()
store.dispatch(addExpense({description:'Watere bill',amount:5000}))
store.dispatch(addExpense({description:'Gas Bill'}))
// store.dispatch(setTextFilter('water'))
 
const state = store.getState()
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)


ReactDom.render(<Provider store = {store} >
    <ExpenseDashboardPage />
    </Provider>,document.getElementById("root"))
