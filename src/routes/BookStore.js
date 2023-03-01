import Books from 'components/Books';
import InputBook from 'components/InputBook';
import { useSelector } from 'react-redux';

const BookStore = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <section>
      <Books books={books} />
      <InputBook />
    </section>
  );
};

export default BookStore;
