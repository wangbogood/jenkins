import React from "react";
import { ReactDOM } from 'react-dom';


class Child extends React.PureComponent {
    render (){
        console.log('儿子')
        console.log(this.props.arr)
        return <h1>{this.props.arr}</h1>
    }
}

// const Child = () => {
//     console.log('儿子')
//     return <h1>erz</h1>
// }
class PurCom extends React.Component {
    constructor(){
        super()
    }
    state = {
        number:0,
        arr:[]
    }
    add = () => {
        this.state.arr.push('666')
        this.setState({
            number:this.state.number +1,
            arr:this.state.arr
        })
    }
    render(){
        console.log('父亲')
        return <>
            {this.state.number}
            <button onClick={this.add}>+</button>
            <Child arr={this.state.arr}/>
        </>
    }
}

export default PurCom;



// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// export default class App extends Component{
// state = {counter:{number:0}}
// add = ()=>{
// let oldState = this.state;
// let amount = parseInt(this.amount.value);
// let newState = {...oldState,counter:amount==0?oldState.counter:
// {number:oldState.counter.number+amount}};
// this.setState(newState);
// }
// render(){
// console.log('App render');
// return (
// <div>
// <Counter counter={this.state.counter}/>
// <input ref={inst=>this.amount = inst}/>
// <button onClick={this.add}>+</button>
// </div>
// )
// }
// }

// class Counter extends React.PureComponent{
//     // componentWillReceiveProps(nextprops){
//     //     console.log(this.props,nextprops)
//     // }
//     render(){
    
//     console.log('Counter render');
//     // 2.2 PureComponent
//     // React15.3 中新加了一个类 PureComponent ,它会在 render 之前帮组件自动执行一次
//     // shallowEqual （浅比较），来决定是否更新组件
//     // PureComponent 通过 prop 和 state 的浅比较来实现 shouldComponentUpdate
//     return (
//     <p>{this.props.counter.number}</p>
//     )
//     }
//     }
//     ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//     )