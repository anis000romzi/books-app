import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../utils/api';

function Detail() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetail = async () => {
      const { data } = await getBookById(id);
      setBook(data);
      setLoading(false);
    };

    fetchBookDetail();
  }, [id]);

  if (loading) {
    return <main className="container py-4 px-3 mx-auto">loading ...</main>;
  }

  return (
    <main className="container py-4 px-3 mx-auto">
      <div>
        <h1 className="mb-2">{book.title}</h1>
        <p className="fs-5 text-secondary">{book.subtitle}</p>
      </div>
      <ol className="list-group list-group-numbered mb-5">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Author</div>
            {book.author}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Published</div>
            {book.published}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Publisher</div>
            {book.publisher}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Pages</div>
            {book.pages}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">ISBN</div>
            {book.isbn}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Website</div>
            <a
              href={book.website}
              target="_blank"
              rel="noreferrer"
              style={{ wordBreak: 'break-all' }}
            >
              {book.website}
            </a>
          </div>
        </li>
      </ol>
      <div style={{ whiteSpace: 'pre-line' }}>{book.description}</div>
    </main>
  );
}

export default Detail;
