import React, { Component } from 'react';
import './App.css';
import Phone from './Phone/Phone'

class App extends Component {
  render () {
    // const divStyle = {
    //   'display': 'inlineBlock',
    //   'border': '2px solid #777',
    //   'boxShadow': '2px 2px 1px #999',

    // }
    return (
      <div >
       <h1>Hello World</h1>

        <Phone name={'Samsung Galaxy M51'} memory={'6/128 GB'} color={'White'} matrix={'Super AMOLED Plus'} />    
        <Phone name={'Xiaomi Redmi Note 9 Pro'} memory={'6/128 GB'} color={'Tropical Green'} matrix={'IPS'} />
        <Phone name={'Huawei P40 lite'} memory={'6/128 GB'} color={'Sakura Pink'} matrix={'LCD'} />
       
      </div>
    );

    // return React.createElement (
    //   'div',
    //   {
    //     className: 'App'
    //   },
    //   React.createElement (
    //     'h1',
    //     null,
    //     'Hello World'
    //   )
    // )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );

// }




export default App;
