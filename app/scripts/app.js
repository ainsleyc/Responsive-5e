import React from 'react';
import StatBlock from './components/statBlock';

window.React = React;
const mountNode = document.getElementById('app');

React.render(<StatBlock />, mountNode);
