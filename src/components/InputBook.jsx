import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/booksSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({ title, author }));
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
