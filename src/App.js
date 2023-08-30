import { useDispatch, useSelector } from "react-redux";
import { getLatestNews } from "./redux/actions/actionCreator";

const App = () => {
  const dispatch = useDispatch();

  const handleGetNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <button onClick={handleGetNews}>Get News</button>
      <h1>News</h1>
    </div>
  );
};

export default App;
