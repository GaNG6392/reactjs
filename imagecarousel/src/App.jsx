import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [img, setImg] = useState([]);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImage = async () => {
    // setIsLoading(true);

    // const url = 'https://www.reddit.com/r/aww/top/.json?t=all';
    // const res = await fetch(url);
    // const result = await res.json();
    // const data = result.data.children;
    // // console.log(data);
    // const img = data
    //   .filter((item) => item.data.url_overridden_by_dest.includes('.jpg'))
    //   .map((item) => item.data.url_overridden_by_dest);
    // // console.log(img);

    const res = await axios.get('/api/products');
    const img = res.data.map((itm) => itm.image);

    setImages(img);
    // setIsLoading(false);
  };

  const handleClick = (dir) => {
    console.log('curr index', index);
    const lastIndex = images.length - 1;

    if (dir === 'left') {
      if (index === 0) {
        console.log('last index', lastIndex);
        setIndex(lastIndex);
      } else {
        setIndex((idx) => idx - 1);
      }
    } else if (dir === 'right') {
      if (lastIndex === index) {
        setIndex(0);
      } else {
        setIndex((idx) => idx + 1);
      }
    }
  };
  useEffect(() => {
    // const tid = setInterval(() => {
    //   handleClick('right');
    // }, 2000);
    // return () => {
    //   clearInterval(tid);
    // };
    fetchImage();
  }, [index]);

  return (
    <>
      <div className='App'>
        {isLoading ? (
          <div className='loading'> Loading ...</div>
        ) : (
          <>
            <button onClick={() => handleClick('left')}>{'<'}</button>
            <img src={images[index]} alt='not found' />
            <button onClick={() => handleClick('right')} className='right'>
              {'>'}
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
