import { Route, Routes } from 'react-router-dom';
import BookStore from 'routes/BookStore';
import Categories from 'routes/Categories';
import Layout from 'routes/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<BookStore />} />
      <Route path="categories" element={<Categories />} />
    </Route>
  </Routes>
);

export default App;
