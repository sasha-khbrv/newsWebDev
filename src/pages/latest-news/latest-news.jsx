import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import { GET_LATEST_NEWS } from "../../redux/constants";

const LatestNews = () => {
  const { latestNews } = useSelector((store) => store?.news || {});
  const { latestNewsError } = useSelector((store) => store?.errors || {});
  const { isLoading } = useSelector((store) => store?.loaders || {});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_LATEST_NEWS });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      )}
    </div>
  );
};

export default LatestNews;
