import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsProv from './context/settings';
import LoginProvider from './context/acl'
import './components/todo/todo/todo.scss'
function Main (){
  return(
    <LoginProvider>
    <SettingsProv>
      <App/>
    </SettingsProv>
    </LoginProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);