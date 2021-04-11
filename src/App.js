import React, { useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Card from './components/Card/Card';
import './App.css';

function App({
  noodles,
  asyncStatus,
  actions,
}) {

useEffect(() => {
    if(noodles.length===0) {
      console.log('fetch is called');
      actions.getNoodles();
    }
}, [noodles]);
  console.log(asyncStatus);
  return (
    <div className="app">
      <header className="app-header">
        Noodle
      </header>
      {(() => {
        if(asyncStatus==='loading') {
          return (
            <div className="app-loader">
            <Loader />
          </div>
          )
        }else if(noodles.length) {
          return (
            <div className="app-cards">
              { noodles.map((noodle, index) => (<Card noodle={noodle} key={index} />))}
            </div>
          )
        }
      })()}
    </div>
  );
}

export default App;
