import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
// import ListWrapper from './components/ListWrapper/ListWrapper'
// import ScopeOfWorkWrapper from './components/ListWrapper/WorkWrapper'
// import Form from './components/Form/Form'





const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>


  );
}

export default App;

















// const initialStateItems = [

//   {
//     image: "https://ocdn.eu/pulscms-transforms/1/iW-k9kpTURBXy9mOTk1NzZhNTY3YjhlYjljZWQ3MDcxMGJjNWEzZTZhNy5qcGeTlQMAFs0C1M0Bl5MFzQMUzQG8kwmmNTk2MTk0BoGhMAE/gettyimages-954867550.jpg",
//     name: "Dan Abramov",
//     description: "The creator of React",
//     twitterLink: "https://twitter.com/dan_abramov"
//   }

// ]

// class App extends React.Component {

//   state = {
//     items: [...initialStateItems]
//   }

//   addItem = (e) => {
//     e.preventDefault()

//     const newItem = {
//       name: e.target[0].value,
//       twitterLink: e.target[1].value,
//       image: e.target[2].value,
//       description: e.target[3].value,
//     }
//     this.setState(prevState => ({
//       items: [...prevState.items, newItem]
//     }))
//     // this.setState({
//     //   items: [...initialStateItems, newItem]
//     // })
//     e.target.reset();

//   }

//   render() {
//     return (
//       <div className={styles.App}>
//         <ListWrapper
//           items={this.state.items}
//         />
//         <Form submitFn={this.addItem} />
//         <ScopeOfWorkWrapper />
//       </div>
//     )
//   }

// }

// export default App;
