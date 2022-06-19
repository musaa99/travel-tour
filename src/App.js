import React, { useEffect, useState } from "react"
import Tours from "./Tours"







// const url = 'https://course-api.com/react-tours-project'
const url = ("https://course-api.com/react-tours-project")


const App = () => {
  const [tours, setTours] = useState([])

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setTours(data)
    console.log("tour", data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      
     

    <Tours tours={tours}/>
     
      
     
      
    </div>
  )
}

export default App

