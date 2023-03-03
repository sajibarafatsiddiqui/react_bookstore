import PropTypes from 'prop-types';
import Book from 'components/Book';
import styles from 'styles/Book.module.css';
import cx from 'classnames';

const Books = ({ books }) => (
  { books }
  && (
  <ul className={cx(styles.center, styles.books_container)}>
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
