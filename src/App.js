import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // console.log("start"); //進入組件
  // const [a, setA] = useState(true);
  // const [b, setB] = useState("");
  // const [c, setC] = useState(0);
  // const [d, setD] = useState(0);
  // const [num, setNum] = useState(0);
  // const [result, setResult] = useState(0);
  // useEffect(() => {
  //   setResult(c + d);
  //   setNum(num +1);
  // },[c,d]) //[c,d] 設依賴關係，不在括弧內為獨立



  // const [message, setMessage] = useState("");
  // const [ip, setIp] = useState("");

  // useEffect(() => {
  //   fetch("https://hihl.herokuapp.com/", { method: "GET" })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIp(data["ip"])
  //       setMessage(data["message"]);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // });




  const [all, setAll] = useState([]);


  useEffect(() => {
    fetch("https://hihl.herokuapp.com/message", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAll(data["data"]);
        // console.log(data["data"])
      })
      .catch((e) => {
        console.log(e);
      });
  });


  return(
    // <div>
    //   {/* 開始渲染 */}
    //   {console.log("render")}
    //   <button onClick={()=>setA(!a)}>切換</button>
    //   {a && <div>haha I'm here.</div>}
    //   <input
    //     id='input-b'
    //     onChange={(e) => {setB(e.target.value)}}/>
    //   {b}
    //   <br/>
    //   <input
    //     id='input-c'
    //     onChange={(e) => {setC(parseInt(e.target.value))}}/>
    //     <input
    //     id='input-d'
    //     onChange={(e) => {setD(parseInt(e.target.value))}}/>
    //     c + d = {result}
    //     <br/>
    //     第二行按鍵次數：{num}      
    // </div>



    // <div>
    //   IP : {ip}
    //   <br/>
    //   Message : {message}
    // </div>



    <div>
      {all.map((data) => {
        return(
          <div>
            Title:
            {data["title"]}
            <br/>
            Date:
            {data["date"]}
            <br/><br/>
          </div>
        )})}
    </div>
  )
}

export default App;
