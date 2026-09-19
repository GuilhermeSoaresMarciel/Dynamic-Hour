import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import IconGithub from "./assets/github.png";

import Morning from "./assets/morning.png";
import Afternoon from "./assets/afternoon.png";
import Night from "./assets/night.png";

const hours = new Date().getHours();

const updateStatus = () => {
  if (hours >= 5 && hours < 12) {
    return {
      img: Morning,
      status: "Morning",
      obs: "Starting the day with energy",
      bg: "#e2cd9f"
    }
  } else if (hours >= 12 && hours < 18) {
    return {
      img: Afternoon,
      status: "Afternoon",
      obs: "A good coffee to stay awake",
      bg: "#b9846f"
    }
  } else {
    return {
      img: Night,
      status: "Night",
      obs: "How beautiful the stars are",
      bg: "#515154"
    }
  }
}

createRoot(document.querySelector("body")!).render(
  <StrictMode>

    <main className="flex justify-center items-center flex-col min-h-dvh gap-5" style={{backgroundColor: updateStatus().bg}}>

      <header className="text-center">
        
        <span className="text-[40px]">⏱️</span>
        
        <h1 className="font-extrabold">Dynamic Hour</h1>
      
      </header>

      <article className="bg-white rounded-lg p-4 gap-3 flex justify-center items-center flex-col">

        <h2 className="font-bold">Hi, it's {hours} o'clock now</h2>

        <img className="w-full max-w-50 h-50 rounded-[100%]" src={updateStatus().img} />

        <h3 className="bg-[whitesmoke] p-1.5 rounded-xi">{updateStatus().status}</h3>

        <p>{updateStatus().obs}</p>

      </article>

      <footer className="text-center flex justify-center items-center flex-col">
        
        <img className="w-7.5" src={IconGithub} />
        
        <h6>Project developed by: <a className="font-bold" target="_blank" href="https://github.com/GuilhermeSoaresMarciel">Guilherme Soares Marciel</a></h6>
      
      </footer>

    </main>
  
  </StrictMode>,
);