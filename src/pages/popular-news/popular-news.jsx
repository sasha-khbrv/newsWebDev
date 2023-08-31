import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import { GET_POPULAR_NEWS } from "../../redux/constants";

const App = () => {
  const { popularNews } = useSelector((store) => store?.news || {});
  const { popularNewsError } = useSelector((store) => store?.errors || {});
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store?.loaders || {});

  useEffect(() => {
    dispatch({ type: GET_POPULAR_NEWS });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <News
          news={popularNews}
          error={popularNewsError}
          title="Popular News"
        />
      )}
    </div>
  );
};

export default App;
