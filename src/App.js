import './App.css';
import CardList from './components/CardList';
import Lolimage from './Images/LolImage.jpg';
import Robloximage from './Images/RobloxImage.jpg';
import Valorantimage from './Images/ValorantImage.jpg';
import LORimage from './Images/LORImage.jpg';


const db = [
  {
      id : 1,        
      remainingtime : "5 hours",
      game : "League Of Legends",
      product : "Prime Gaming Capsule",
      backgroundimage : Lolimage
  },
  {
      id : 2,        
      remainingtime : "50 days",
      game : "Roblox",
      product : "Spaceship",
      backgroundimage : Robloximage
  },
  {
      id : 3,        
      remainingtime : "25 days",
      game : "Valorant",
      product : "Gekko's Grafitti",
      backgroundimage : Valorantimage
  },
  {
      id : 4,        
      remainingtime : "90 minutes",
      game : "Legends Of Runeterra",
      product : "Rare Chest",
      backgroundimage : LORimage
  }
]

function App() {
  return (
 <>
    <CardList
      data ={db}
    />
 </>
  );
}

export default App;
