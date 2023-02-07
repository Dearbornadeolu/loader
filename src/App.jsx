import { useState, useEffect } from 'react'
import BarLoader from "react-spinners/BarLoader";
import './App.css'

function App() {
  

  const [loading, setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }, [])
  return (
    <div className="App">
      {
        loading?
        <BarLoader color="#36d7b7" />
      //   <GridLoader
      //   color={'#FFA500'}
      //   loading={loading}
      //   size={100}
      // />
      :
      <div>
      <h1>Hola World</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur excepturi autem distinctio, cumque tempora perferendis? Accusantium, facilis distinctio sapiente corrupti asperiores inventore. Accusamus quis assumenda deserunt ullam ipsam voluptate et! 
      </p>
     </div>
      }
    
    </div>
  )
}

export default App
