import './App.css'
import { useEffect, useState } from 'react'
//importing components
import Header from './components/Header'
import Servers from './components/Servers'
import CreateArea from './components/CreateArea/CreateArea'
import ProgressBar from './components/ProgressBar/ProgressBar'

const App = () => {
  const [servers, setServers] = useState([])
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10

        if (newValue === 100) {
          clearInterval(interval)
        }
        return newValue
      })
    }, 1000)
  }, [])

  const addServer = (newServer) => {
    setServers([...servers, newServer])
  }
  const deleteServer = (id) => {
    setServers((prevServers) => {
      return prevServers.filter((server) => {
        return server.id !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addServer={addServer} />
      <Servers servers={servers} deleteServer={deleteServer} />
      <ProgressBar value={value} max={100} />
    </div>
  )
}

export default App
