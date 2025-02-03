import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Keepnotes from './keepnotes'
import Listitem from './Listitem'

function App() {

  const [googlenotes, Setgooglenotes] = useState([])

  const addgnotes = (obj) => {
    Setgooglenotes(prv => { return [...prv, obj] })
  }

  const delnotes = (id) => {

    Setgooglenotes(
      googlenotes.filter((value, index) => {

        return index != id;

      })
    )
  }

  return (
    <>
      <Header id="header"/><br></br>
      <Keepnotes add={addgnotes} />
      <br /><br></br>
      {googlenotes.map((value, index) => {

        return <Listitem listnotes={value} key={index} order={index} del={delnotes} />

      })}


    </>
  )
}

export default App
