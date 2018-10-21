import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from '../../hoc/Layout/Layout.css';

const layout = ( props ) => (
  <Aux>
    <div> ToolBar </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;