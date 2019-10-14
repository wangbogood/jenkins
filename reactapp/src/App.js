import React from "react";
import { ReactDOM } from 'react-dom';
import {FixedSizeList as List} from "react-window"
import "./App.css";
import {arr} from './mock/data'

function getRandomColor( ) {
    var rand = Math.floor(Math.random( ) * 0xFFFFFF).toString(16).toUpperCase();
    if(rand.length === 6){
    return '#'+rand;
    }else{
    return getRandomColor();
    }
    }
    

const Row = ({ index, style }) => {
    return <div key={index} style=
    {{...style,backgroundColor:getRandomColor(),lineHeight:'30px',textAlign:'center'
    }}>{arr[index].name}</div>
    };

    
class App extends React.Component {
    constructor(){
        super()
    }
    render(){
        console.log(arr)
        return <>
            <ul className="box">
                {/* {
                    arr.map((item,index)=>{
                        return <li key={index}>{item.name}</li>
                    })
                } */}
                <List itemCount={100000} itemSize={30} height={300}>
                    {Row}
                </List>
            </ul>
        </>
    }
}



export default App;