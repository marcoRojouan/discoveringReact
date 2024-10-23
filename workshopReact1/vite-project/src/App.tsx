import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './helloWorld'
import Avatar from './components/Avatar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Avatar
        image={"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"}
        firstName={"Bart"}
        lastName={"Simpson"}
      />
      <Avatar
        image={"https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png"}
        firstName={"Homer"}
        lastName={"Simpson"}
      />
    </>
  )
}

export default App
