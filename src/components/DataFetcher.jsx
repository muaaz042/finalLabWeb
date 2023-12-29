import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEmojis } from '../Slices/emogiSlice';
const DataFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetch('https://raw.githubusercontent.com/cheatsnake/emojihub/master/emojistore/data/emojibase.json');
        const jsonData = await apiData.json();
        dispatch(setEmojis(jsonData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return null;
};

export default DataFetcher;
