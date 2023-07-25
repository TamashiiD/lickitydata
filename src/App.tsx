// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";


function App() {

  const tasks = useQuery(api.lickitydata.get);





  return (
    <div className="App">
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}

export default App
