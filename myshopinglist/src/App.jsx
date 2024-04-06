import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [food, setFood] = useState('');
  const [foodData, setFoodData] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handleInput = (e) => {
    setFood(e.target.value);
  };

  const fetchItem = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    setFoodData(data);
  };
  useEffect(() => {
    if (food.length >= 2) {
      fetchItem(food);
    }
  }, [food]);

  const handleShopingList = (e) => {
    const idx = e.target.getAttribute('data-id');
    if (idx) {
      const obj = {
        id: Date.now(),
        data: foodData[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
      setFood('');
    }
  };
  const handleRightClick = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };
  const removeItem = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.filter((item) => item.id != id);
    setBucketList(newBucketList);
  };

  return (
    <>
      <div className='app'>
        <h2>My Shoping List</h2>
        <div>
          <input onChange={handleInput} value={food} type='text' />
        </div>
        {food.length >= 2 ? (
          <div onClick={handleShopingList} className='shoping-list'>
            {foodData.map((item, index) => {
              return (
                <div data-id={index} className='product'>
                  {item}
                </div>
              );
            })}
          </div>
        ) : null}
        <div className='bucket'>
          {bucketList.map((item) => {
            return (
              <div className='bucket-list'>
                <div
                  className='✓'
                  onClick={() => {
                    handleRightClick(item.id);
                  }}
                >
                  ✔
                </div>
                <div className={item.isDone ? 'strik' : ''}>{item.data}</div>
                <div
                  className='X'
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  {' '}
                  X
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
