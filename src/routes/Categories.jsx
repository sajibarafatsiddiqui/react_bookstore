import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from 'redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.categories);
  return (
    <>
      <button
        type="submit"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
      <p>{status}</p>
    </>
  );
};
export default Categories;
