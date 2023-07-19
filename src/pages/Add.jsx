import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/api';
import BookInput from '../components/BookInput';

function Add() {
  const navigate = useNavigate();

  const onAddBookHandler = async (book) => {
    const { error } = await addBook(book);
    if (error) {
      return;
    }
    navigate(-1);
  };

  return (
    <main className="container py-4 px-3 mx-auto">
      <h1 className="mb-4 text-center">Add Your New Book!</h1>
      <BookInput submit={onAddBookHandler} />
    </main>
  );
}

export default Add;
