import './App.css'
import { useState } from 'react'
//importing components
import Header from './components/Header'
import Servers from './components/Servers'
import CreateArea from './components/CreateArea/CreateArea'
import ProgressBar from './components/ProgressBar/ProgressBar'

const App = () => {
  const [servers, setServers] = useState([])

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
    </div>
  )
}

export default App
