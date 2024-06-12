import "./App.css";
import Main from "./components/Main";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <UserProvider className="App">
      <header className="App-header">
        <Main />
      </header>
    </UserProvider>
  );
}

export default App;
