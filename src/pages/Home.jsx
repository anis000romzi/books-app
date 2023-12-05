import { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../utils/api';
import { useSearchParams, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import BooksList from '../components/BooksList';

function Home({ authedUser }) {
  const [booksData, setBooksData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchBooksData = async () => {
      setLoading(true);
      const { data } = await getBooks(page);
      setBooksData(data);
      setLoading(false);
    };

    fetchBooksData();
  }, [page]);

  const onDeleteHandler = async (id) => {
    await deleteBook(id);
    const { data } = await getBooks(page);
    setBooksData(data);
  };

  const handlePageCLick = (data) => {
    setSearchParams({ page: data.selected + 1 });
  };

  return (
    <main className="container py-4 px-3 mx-auto">
      <h1 className="mb-4">Welcome, {authedUser.name} ~</h1>
      <Link
        to="/add"
        className="btn btn-outline-success d-block col-lg-4 col-sm-6 mb-3"
      >
        Add Book
      </Link>
      {loading ? (
        'loading ...'
      ) : (
        <BooksList books={booksData.data} onDelete={onDeleteHandler} />
      )}
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={booksData.last_page}
        onPageChange={handlePageCLick}
        containerClassName="pagination mt-5"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </main>
  );
}

export default Home;
