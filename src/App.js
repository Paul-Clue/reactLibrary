import './App.css';
import PropTypes from 'prop-types';//eslint-disable-line

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Brand New
      </header>
    </div>
  );
}

App.propTypes = { name: PropTypes.string};//eslint-disable-line

export default App;
