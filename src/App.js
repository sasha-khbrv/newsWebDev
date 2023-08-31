import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./redux/actions/actionCreator";
import News from "./components/news/news";

const App = () => {
  const dispatch = useDispatch();
  const latestNews = useSelector((state) => state?.news?.latestNews);
  const popularNews = useSelector((state) => state?.news?.popularNews);

  const handleGetNews = () => {
    console.log("click");
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleGetNews}>Get News</button>
      <News news={latestNews} title="Latest News" />
      <hr />
      <News news={popularNews} title="Popular News" />
    </div>
  );
};

export default App;
