import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
// import AboutUs from './components/Pages/AboutUs';
import Contact from './components/Pages/Contact';
import Realizations from './components/Pages/Realizations';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Error from './components/Pages/Error';
import Draft from './components/Pages/Draft';



const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  })
  return (
    <>
      {isLoading === true ? <LoadingSpinner /> :
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/o-nas' component={Home} />
            <Route path='/uslugi' component={Services} />
            <Route path='/nasze-realizacje' component={Realizations} />
            <Route path='/kontakt' component={Contact} />
            <Route path='/draft' component={Draft} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Router>
      }


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
