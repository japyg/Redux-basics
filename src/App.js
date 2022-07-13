import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChangeTheme from "./components/ChangeTheme";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeTheme />
    </div>
  );
}

export default App;
