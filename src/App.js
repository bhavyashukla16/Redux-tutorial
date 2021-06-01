import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts.js'
import PostForm from './Components/PostForm.js'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{margin: "3vh 12vw"}}>
          <PostForm />
          <Posts />
        </div>
      </header>
    </div>
    </Provider>
  );
}

export default App;
