import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editBook, getBookById } from '../utils/api';
import BookInput from '../components/BookInput';

function Edit() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetail = async () => {
      const { data } = await getBookById(id);
      setBook(data);
      setLoading(false);
    };

    fetchBookDetail();
  }, [id]);

  const onAddBookHandler = async (book) => {
    const { error } = await editBook(book);
    if (error) {
      return;
    }
    navigate(-1);
  };

  if (loading) {
    return <main className="container py-4 px-3 mx-auto">loading ...</main>;
  }

  return (
    <main className="container py-4 px-3 mx-auto">
      <h1 className="mb-4 text-center">Edit Book</h1>
      <BookInput submit={onAddBookHandler} book={book} />
    </main>
  );
}

export default Edit;
