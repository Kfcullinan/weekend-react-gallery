import React from 'react';
import './App.css';
import axios from 'axios'; //needed?

function App() {

  const [galleryList, galleryItems] = useState ([

  ]);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchGallery();
  }, []);


  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryItems(response.data);
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
      alert('something went wrong!');
    });
  }
// stopped here-pick up from here




    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <ul>
        {
          galleryItems.map(items => {
            return
            <li key={item.id}>
              {item.description}
              </li>
          })
        }
        </ul>
      </div>
    );
}

export default App;
