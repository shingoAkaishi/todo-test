import React,{useState, useEffect} from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(t => t+1);
    }, 1000)
    return () => {
      clearInterval(id)
    };
  }, [timer]);
  
  return(
    <p>Time: {timer}</p>
  )
}

export default Timer;