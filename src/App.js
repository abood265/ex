import './App.css';
import { AppBar,Toolbar,IconButton,Typography,Button,Grid } from '@material-ui/core';
import Cardbox from './Cardbox.js';




function App() {

  return (
    <div className="App">
  <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      
    </IconButton>
    <Typography variant="h6" >
      News
    </Typography>

  </Toolbar>
</AppBar>
<Grid container spacing={1}>
<Grid container item xs={4} spacing={3} direction="column">

<Cardbox/>
</Grid>
<Grid container item xs={4} spacing={3} direction="column">

<Cardbox/>
</Grid>
<Grid container item xs={4} spacing={3} direction="column">

<Cardbox/>
</Grid>

</Grid>

    </div>
  );
}

export default App;
