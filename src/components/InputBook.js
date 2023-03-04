import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import styles from 'styles/InputBook.module.css';
import { addBook } from 'redux/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const itemId = uuidv4();
  const category = '';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({
        itemId, title, author, category,
      }));
    }
    setTitle('');
    setAuthor('');
  };
  return (
    <>
      <div className={`mb-2rem bold ${styles.add__book}`}>
        <h2 className="secondary fs-1-2rem mb-0-5rem">ADD NEW BOOK</h2>
        <form onSubmit={handleSubmit} className={styles.book__addform}>
          <input
            className={cx(styles.addform__input, styles.flex_1)}
            type="text"
            value={title}
            placeholder="Book Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className={styles.addform__input}
            type="text"
            value={author}
            placeholder="Author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <button type="submit" className=" blue-button bold">ADD BOOK</button>
        </form>
      </div>
    </>
  );
};
export default InputBook;
