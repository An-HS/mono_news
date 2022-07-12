// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Grid from '../Components/Grid';

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


  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {all.map((item) => (
        <Grid key={item.title} item={item} />
      ))}
    </div>
  ); 
}
export default App;
