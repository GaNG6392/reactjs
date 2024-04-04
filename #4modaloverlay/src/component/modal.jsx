import '../App.css';

function modal({ closeOffer, isShow, offerAccept }) {
  const handleOuSideClick = (e) => {
    console.log(e.target.className);
    e.target.className === 'container' ? closeOffer() : ' ';
  };
  return (
    <div>
      {isShow && (
        <div className='container' onClick={handleOuSideClick}>
          <div className='offer'>
            <button onClick={closeOffer} className='close-btn'>
              X
            </button>
            <div>
              <p>click the button below to accept our amazing offer!</p>
            </div>
            <div className='acceptOffer'>
              <button onClick={offerAccept} className='acceptoffer'>
                Accept offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default modal;
