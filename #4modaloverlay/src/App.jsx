import { useState } from 'react';
import './App.css';
import Modal from './component/modal.jsx';
import AcceptedOffer from './component/acceptedOffer.jsx';

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isShowOffer, setIsShowOffer] = useState(true);
  const [isOfferAccept, setIsOfferAccept] = useState(false);

  const showOffer = () => {
    setIsShow(true);
    setIsShowOffer(false);
  };

  const closeOffer = () => {
    setIsShow(false);
    setIsShowOffer(true);
  };
  const offerAccept = () => {
    setIsOfferAccept(true);
    setIsShow(false);
  };

  return (
    <>
      {isShowOffer && (
        <div className='show-offer'>
          <button onClick={showOffer} class='btn'>
            <i class='animation'></i>Show offer<i class='animation'></i>
          </button>
        </div>
      )}
      {isShow && (
        <Modal
          closeOffer={closeOffer}
          isShow={isShow}
          offerAccept={offerAccept}
        />
      )}
      {isOfferAccept && <AcceptedOffer />}
    </>
  );
}

export default App;
