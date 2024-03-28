import { useEffect, useState } from 'react';
import '../App.css';

function FAQItem({ faq, index }) {
  const [isShow, setIsShow] = useState(false);

  const clickHandle = () => {
    setIsShow((isShow) => !isShow);
  };
  // useEffect(() => {
  //   // if (index == 1) {
  //   //   setIsShow(true);
  //   // }
  //   clickHandle;
  // }, []);
  return (
    <div className='faq-box'>
      <div className='que' onClick={clickHandle}>
        <button className={isShow ? 'arrow' : ''}>{'>'}</button>
        <div className='ques'>{faq.question}</div>
      </div>
      {isShow && <div className='ans'>{faq.answer}</div>}
    </div>
  );
}

export default FAQItem;
