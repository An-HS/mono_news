// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
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
