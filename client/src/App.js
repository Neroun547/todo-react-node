import { Auth } from "./components/Auth";
import { Nav } from "./components/Nav";
import { Route, Routes, Link } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Main } from "./components/Main";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Nav/>
       <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
