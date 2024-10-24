import { useState } from 'react'

import './App.css'

import Avatar from './components/Avatar'


function App() {



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
