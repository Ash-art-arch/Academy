import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";
import SymptomInputPage from "./components/Symptom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SymptomInputPage />} />
        <Route
          path="/chats"
          element={
            <div className="flex">
              <Sidebar />
              <ChatWindow />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
