import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
      <form onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          value={title}
          placeholder="Add Book"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="input-text"
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default InputBook;
