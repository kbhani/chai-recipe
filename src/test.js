import chaiPhoto from './chaiPhoto.jpg';
import './App.css';
import React, { useState } from 'react';

function ofmonth() {
  let aaj = new Date();
  let yemonth = aaj.getMonth() + 1;
  return yemonth;
}

function App() {
  const yemonth = ofmonth();
  const [showIngredients, setShowIngredients] = useState(false);

  // Define functions for different seasons or months
  const getIngredientsForMonth = () => {
    switch (yemonth) {
        case 1:
        case 2:
        return (
            <div>
                <h1>Recommended Ingredients for January/February or Shishira Ritu:</h1>
                <h3>Ingrdients per 1 cup of tea</h3>
                    <ul>Tea leaves</ul>
                    <ul>Milk</ul>
                    <ul>Water</ul>
                    <ul>Crushed Green Cardamom</ul>
                    <ul>Crushed Black Pepper</ul>
                    <ul>Crushed Ginger</ul>
                    <ul>Crushed Long Pepper</ul>
                    <ul>Tiny pinch of salt</ul>
                    <ul>Gud/Jaggery or Honey <b> NOTE: Only add the sweetener after taking off the fire because this will coagulate the milk/tea.</b></ul>
                    
            </div>
        );
        case 3:
        case 4:
        return (
            <div>
                <h1>Recommended Ingredients for March/April or Vasanta Ritu:</h1>
                <h3>Ingrdients per 1 cup of tea</h3>
                    <ul>Tea leaves</ul>
                    <ul>Milk</ul>
                    <ul>Water</ul>
                    <ul>Crushed Green Cardamom</ul>
                    <ul>A single Tulsi leaf in the cup at the end.</ul>
                    <ul>Tiny pinch of salt</ul>
                    <ul>Appropriate amount of thread mishri or Khaand if temperature/climate is moderate or Gud&fraslJaggery or honey if the temperature/climate is cold or one suffers from cold.</ul>
                    
            </div>
        );
        case 5:
        case 6:
        return (
            <div>
                <h1>Recommended Ingredients for May/June or Grishma Ritu:</h1>
                <h3>Ingrdients per 1 cup of tea</h3>
                    <ul>Tea leaves</ul>
                    <ul>Milk</ul>
                    <ul>Water</ul>
                    <ul>Crushed Green Cardamom</ul>
                    <ul>A single Tulsi leaf in the cup at the end.</ul>
                    <ul>Tiny pinch of salt</ul>
                    <ul>Appropriate amount of thread mishri or Khaand.</ul>
                    
            </div>
        );
        case 7:
        case 8:
        return (
            <div>
                <h1>Recommended Ingredients for July/August or Varsha Ritu:</h1>
                <h3>Ingrdients per 1 cup of tea</h3>
                    <ul>Tea leaves</ul>
                    <ul>Milk</ul>
                    <ul>Water</ul>
                    <ul>Crushed Green Cardamom</ul>
                    <ul>Crushed Black Pepper</ul>
                    <ul>Crushed Ginger</ul>
                    <ul>Crushed Long Pepper</ul>
                    <ul>Tiny pinch of salt</ul>
                    <ul>Appropriate amount of thread mishri or Khaand if temperature/climate is moderate or Gud/Jaggery or honey if the temperature/climate is cold or one suffers from cold.<b> NOTE: Only add honey and jaggery after taking the pot off the fire. Because heating the honey is strictly prohibitted in Ayurveda and heating the jaggery will result in curdling of tea.</b></ul>
                    
            </div>
        );
        case 9:
        case 10:
        return (
            <div>
                <h1>Recommended Ingredients for September/October or Sharad Ritu:</h1>
                <h3>Ingrdients per 1 cup of tea</h3>
                    <ul>Tea leaves</ul>
                    <ul>Milk</ul>
                    <ul>Water</ul>
                    <ul>Crushed Green Cardamom</ul>
                    <ul>Crushed Ginger</ul>
                    <ul>Tiny piece of Cinnamon</ul>
                    <ul>Tiny pinch of salt</ul>
                    <ul>Appropriate amount of thread mishri or Khaand if temperature/climate is moderate or Gud/Jaggery or honey if the temperature/climate is cold or one suffers from cold.<b>
                    NOTE: Only add honey and jaggery after taking the pot off the fire. Because heating the honey is strictly prohibitted in Ayurveda and heating the jaggery will result in curdling of tea.</b></ul>
                    
                
            </div>
        );
        case 11:
        case 12:
        return (
            <div>
                <h1>Recommended Ingredients for November/December or Hemant Ritu:</h1>
                <h3>Ingrdients per 1 cup of tea</h3>
                    <ul>Tea leaves</ul>
                    <ul>Milk</ul>
                    <ul>Water</ul>
                    <ul>Crushed Green Cardamom</ul>
                    <ul>1&frasl3</ul>
                    <ul>Appropriate amount of thread mishri or Khaand.</ul>
                    <ul>Tiny pinch of salt</ul>
                    <ul>Appropriate amount of Gud/Jaggery or honey <b>NOTE: Only add honey and jaggery after taking the pot off the fire. Because heating the honey is strictly prohibitted in Ayurveda and heating the jaggery will result in curdling of tea.</b></ul>
                    
            </div>
        );
    }
  };

  const handleYesClick = () => {
    setShowIngredients(true);
  };

  const handleNoClick = () => {
    alert("Kal aana");
  };


    return (
        <div className="App">
        <img src={chaiPhoto} className="chai" alt="logo" />
        <h1>Would you like to have tea today?</h1>
        <button className="yesbutton" onClick={handleYesClick}>
        YES
        </button>
        <button className="nobutton" onClick={handleNoClick}>
        NO
        </button>

        {showIngredients && getIngredientsForMonth() /* Display ingredients based on the current month */}
        </div>
  );
}

export default App;
