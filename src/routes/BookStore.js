import Books from 'components/Books';
import InputBook from 'components/InputBook';
import { v4 as uuidv4 } from 'uuid';

const BookStore = () => {
  const books = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <section>
      <Books books={books} />
      <InputBook />
    </section>
  );
};

export default BookStore;
