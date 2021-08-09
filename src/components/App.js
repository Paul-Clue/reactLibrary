import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <>
      <div className="panel-bg"><span className="Bookstore-CMS Text-Style-5">Bookstore CMS</span></div>
      <div className="list">
        <BooksForm />
      </div>
      <div className="form">
        <BooksList />
      </div>
    </>
  );
}

export default App;
