import PropTypes from 'prop-types';
import Book from 'components/Book';

const Books = ({ books }) => (
  { books }
  && (
  <ul>
    { books?.map((book) => (
      <Book key={book.item_id} bookProp={book} />
    ))}
  </ul>
  )
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};
export default Books;
