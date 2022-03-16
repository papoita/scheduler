import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    
    if(replace){
      setHistory([...history.slice(0, -1), newMode]);
    } else {
      //setHistory([...history, newMode]);
      history.push(mode);
      setHistory((prev)=>[...prev, mode]);
    }
    setMode(newMode);
  }

  function back() {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(history.slice(0, -1));
    }
  }

  return { mode, transition, back };
}
