import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [museums, setMuseums] = useState(data);
  const [showText, setShowText] = useState(false);

  const showTextClick = (museum) => {
    museum.showMore = !museum.showMore;
    setShowText(!showText);
  }

  return (
    <div>
      <div className='container'>
        <h1>The Best-{museums.length} Museums of London </h1>
      </div>

      {museums.map ((museum => {
        const {id, museumName, image, description, address, hours, showMore} = museum;

        return (
          <div>  

            <div className='container'>
              <div className='container1'>
                <h2>{id}. {museumName}</h2>
              </div>

              <div className='container1'>
                <p>{showMore ? description : description.substring(0, 190) + "..."}
                <button onClick={() => showTextClick(museum)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
                
              </div>

            <div className='container1'>
              <img src={image} width="100%" alt='Museums'/>
            </div>

            <div className='container1'>
              <p><span>Address:</span> {address}</p>
            </div>

            <div className='container1'>
              <p><span>The museum is open</span> {hours}</p>
            </div>

            </div>

          </div>
        )
      }))}
      
    </div>
  );
}

export default App;
