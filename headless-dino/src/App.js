import React from 'react';
import './App.css';
/* to start webpage open command prompt 
  cd headless-dino
  npm start
  wait a second
*/
function App() {
  return (     
    <>  
      <title>Legendary Monster Generator</title> {/* title isn't changing for some reason*/}
      <body>
        Greetings. Welcome to the Headless Dino Legendary Monster Generator.
        <p>
          Press the button to generate your Legendary Monster. Good luck to your adventurers.
        </p>
        <br></br>
        <h1 style={{float: 'left'}}> {/*creating dropdown menu to select biome.Need to add style to it and add more. Maybe make into a table instead*/}
          <label for="biomes">Choose a biome:</label>
            <select name="biomes" id="biomes">
              <option value="arid">Arid</option>
              <option value="ocean">Ocean</option>
              <option value="woodland">Woodland</option>
              <option value="desert">Desert</option>
            </select>
        </h1>
        <br></br>
      {/* summon button <button>Summon Me</button> */}
      </body>
    </>
  );
}

export default App;
