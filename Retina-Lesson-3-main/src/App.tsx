import './App.css';
import React from 'react';
import cat2 from '../src/assets/images/cat-1.jpg'
import cat from '../src/assets/images/cat-2.jpg'
import image from '../src/assets/images/image.jpg'


function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>

            {/*<div className={'bg'}></div>*/}
            <img srcSet={`${cat2} 2x, ${image} 3x`} alt="cat" src={cat} />

        </div>
    );
}

export default App;



