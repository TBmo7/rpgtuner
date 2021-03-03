import logo from './logo.svg';
import Character from './components/characters/character.js'
import Opponent from './components/opponent/opponent.js'
import './App.css';
import SimHolder from './components/simholder/simholder';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from "./components/reducers/app"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))


function App() {
  return (
    <Provider store = {store}>
      <div className = "App">
        <div className = 'container-holder'>
          <div className = 'center-container'>
            <Character></Character>
            <Opponent></Opponent>
          </div>
          <div className = "sim-holder-container">
            <SimHolder/>
          </div>
        </div>
      </div>
    </Provider>  
  );
}

export default App;
