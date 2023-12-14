import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';
import { useEffect, useState } from 'react';
import { dataActions } from './redux/data/slice';

function App() {
  const { loading, data, error } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  useEffect(() => {
    dispatch(dataActions.get(id))
  }, [id]);
  return (
    <div>
      <h1>Redux Demo</h1>
      <button onClick={() => setId(id + 1)}>Get next</button>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {data && <h2>{JSON.stringify(data)}</h2>}
    </div>
  )
}

export default App;
