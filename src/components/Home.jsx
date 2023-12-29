import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmojis, selectAllEmojis } from '../Slices/emogiSlice';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Details from './Details';

const Home = () => {
  const dispatch = useDispatch();
  const emojis = useSelector(selectAllEmojis);

  useEffect(() => {
    dispatch(fetchEmojis());
  }, [dispatch]);

  const uniqueCategories = emojis ? Array.from(new Set(emojis.map(item => item.category))) : [];

  return (
    <Router>
      <>
        <ul>
          {uniqueCategories.map((category, index) => {
            return (
              <li key={index}>
                <Link to={`/Details/${category}`}>{category}</Link>
              </li>
            );
          })}
        </ul>

        {uniqueCategories.map((category, index) => (
          <Route key={index} path={`/Details/${category}`}>
            <Details category={category} />
          </Route>
        ))}
      </>
    </Router>
  );
};

export default Home;
