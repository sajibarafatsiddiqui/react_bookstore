import Books from 'components/Books';
import InputBook from 'components/InputBook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from 'redux/books/booksSlice';

const BookStore = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);
  return (
    <section>
      <Books books={books} />
      <InputBook />
    </section>
  );
};

export default BookStore;
