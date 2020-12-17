import React from 'react'
//importing mui components
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    cursor: 'pointer',
    margin: 50,
    borderRadius: 7,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
})

const Server = ({ title, deleteServer, id }) => {
  console.log(id)
  const classes = useStyles()

  const handleClick = () => {
    deleteServer(id)
  }
  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          {title}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleClick}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Server
