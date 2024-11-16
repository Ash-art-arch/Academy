import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";
import Symptom from "./components/Symptom";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Symptom />} />
        <Route path="/contacts" element={<Contacts />} />
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
