import './App.css';
import { getCollection, getCreates } from './redux/colorSlide';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Body from './Body';
import Header from "./Header";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCollection());
    dispatch(getCreates())
  }, [])
  return (
    <>
      <Header />
      <Body />
    </>
  )
}
export default App;
