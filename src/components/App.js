import React from "react";
import "./App.css";

import { Grid } from "semantic-ui-react";
import ColorPanel from "./colorPanel/ColorPanel";
import SidePanel from "./sidePanel/SidePanel";
import MetaPanel from "./MetaPanel/MetaPanel";
import Messages from "./messages/Messages";

import {connect} from 'react-redux'

const App = ({currentUser}) => {
  return (
    <Grid columns='equal' className='app' style={{background: '#eee'}}>
      <ColorPanel />
      <SidePanel currentUser={currentUser}/>

      <Grid.Column style={{marginLeft: 320}} >
        <Messages />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
