import React, { useState } from 'react'
import './CreateArea.css'

const CreateArea = ({ addServer }) => {
  const [server, setServer] = useState({
    id: 0,
    name: '',
  })

  const handleChange = (event) => {
    setServer({ ...server, id: new Date().getTime(), name: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addServer(server)
    setServer({ ...server, id: 0, name: '' })
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={server.name}
          placeholder="Server Name"
        />

        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
