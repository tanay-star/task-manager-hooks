import React from 'react'
import serversArray from '../servers.array'
//importing componenets
import Server from './Server'
//importing mui components
import { Grid } from '@material-ui/core'

const Servers = ({ servers, deleteServer }) => {
  return (
    <Grid container alignItems="center">
      {servers.map((server, index) => {
        return (
          <Grid key={index} item md={3}>
            <Server
              title={server.name}
              id={server.id}
              deleteServer={deleteServer}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Servers
