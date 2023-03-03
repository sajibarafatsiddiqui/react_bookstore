import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/booksSlice';
import styles from 'styles/Book.module.css';
import cx from 'classnames';

const Book = ({ bookProp }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.book}>
      <div className={styles.book__details}>
        <div>
          <h2 className={styles.book__title}>{bookProp.title}</h2>
          <p className={styles.book__author}>{bookProp.author}</p>
          <div className={styles.book__buttons}>
            <button type="button" onClick={() => {}}>Comments</button>
            <button
              type="submit"
              onClick={() => {
                dispatch(removeBook(bookProp.item_id));
              }}
            >
              remove
            </button>
            <button type="button" onClick={() => {}}>Edit</button>
          </div>
        </div>
        <div className={styles.book__progress}>
          <div className={styles.oval}>
            <svg viewBox="25 25 50 50" className={cx(styles.book__oval, styles.book__oval_background)}>
              <circle r="20" cy="50" cx="50" />
            </svg>
            <svg viewBox="25 25 50 50" className={cx(styles.book__oval, styles.book__oval__progress)}>
              <circle r="20" cy="50" cx="50" />
            </svg>
          </div>
          <div>
            <h3 className={styles.book__percentage}>65%</h3>
            <p className={styles.secondary}>completed</p>
          </div>
        </div>
        <div className={styles.book__chapter}>
          <p className="secondary">CURRENT CHAPTER</p>
          <h3 className={styles.chapter__num}>Chapter 17</h3>
          <button className={styles.blue_button} type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};
Book.propTypes = {
  bookProp: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
