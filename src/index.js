import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsProv from './context/settings';
function Main (){
  return(
    <SettingsProv>
      <App/>
    </SettingsProv>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);