import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../components';
import '../static/styles/index.css';
import { Dreamscape } from './dreamscape';

const App = () => {
  return (
    <>
      <Card children={<Dreamscape />} />
      <Card title={'test'} children={<Dreamscape />} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
