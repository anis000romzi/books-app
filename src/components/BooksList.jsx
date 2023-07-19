import { Link } from 'react-router-dom';

function BooksList({ books, onDelete }) {
  return (
    <div className="row">
      {books.map((book) => (
        <div key={book.id} className="col-sm-6 col-lg-4 mb-3 mb-sm-0">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/detail/${book.id}`}>{book.title}</Link>
              </h5>
              <p className="card-text">{book.subtitle}</p>
              <Link
                to={`/edit/${book.id}`}
                className="btn btn-outline-primary me-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  onDelete(book.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BooksList;
