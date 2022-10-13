import Navbar from "./navbar/Navbar";
import "./navbar/Navbar.css";
import HomeDisplay from "./homedisplay/HomeDisplay";
import "./homedisplay/HomeDisplay.css";
import HomeInfo from "./homeInfo/HomeInfo";
import "./homeInfo/HomeInfo.css";

function App() {
    return (
        <div>
            <Navbar />
            <HomeDisplay />
            <HomeInfo />
        </div>
    );
}

export default App;
