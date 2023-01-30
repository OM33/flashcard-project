import React, { useState } from 'react'
// import ReactDom from 'react-dom'
import { cards } from './cards'
import Card from './Card'

//CSS
import './App.css'

function Flashcards() {
  return (
    <div>
      <h1 className='page-title'>FLASHCARDS PROJECT</h1>
      <section className='cardlist'>
        {cards.map((card) => {
          return <Card key={card.id} {...card}></Card>
        })}
      </section>
    </div>
  )
}

// ReactDom.render(<Flashcards />, document.getElementById('root'))
export default Flashcards

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
