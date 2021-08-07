import './App.css';
import PropTypes from 'prop-types';//eslint-disable-line
import BooksList from './BooksList';
import BooksForm from './BooksForm';

function App() {
  return (
    <>
      <div className="list">
        <BooksForm />
      </div>
      <div className="form">
        <BooksList />
      </div>
    </>
  );
}

App.propTypes = { name: PropTypes.string};//eslint-disable-line

export default App;
