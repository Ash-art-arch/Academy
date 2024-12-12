import { useState } from "react";
import image from "../constants/image";
import doctors from "../constants/users";

const messages = []

function ChatWindow() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      messages.push(message)
      console.log(messages)
      setMessage('')
    }
  };

  return (
    <div className="w-3/4 bg-gray-800 h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src={doctors[0].image}
            alt="Doctor"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-white">{doctors[0].name}</h2>
            <p className="text-sm text-green-400">Active Now</p>
          </div>
        </div>
        <div className="space-x-8 flex text-gray-400">
          <img src={image.phone} className="w-10 hover:bg-gray-600 p-2 rounded-full hover:scale-110 cursor-pointer" alt="Phone" />
          <img src={image.video} className="w-10 hover:bg-gray-600 p-2 rounded-full hover:scale-110 cursor-pointer" alt="Video" />
          <img src={image.dots} className="w-10 hover:bg-gray-600 p-2 rounded-full hover:scale-110 cursor-pointer" alt="3 Dots" />
        </div>
      </div>

      <div
        className="flex-1 p-4 space-y-4 overflow-y-scroll bg-auto bg-center bg-opacity-50"
        style={{ backgroundImage: `url(${image.background})` }}
      >
        <div className="flex justify-start">
          <div className="bg-gray-700 text-white p-3 rounded-lg max-w-xs">
            Hey!
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-700 text-white p-3 rounded-lg max-w-xs">
            How are you doing?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-green-700 text-white p-3 rounded-lg max-w-xs">
            Hello doctor
          </div>
        </div>
        {messages.map((msg, index) => (
            <div key={index} className="flex justify-end">
              <div
                className="bg-green-700 text-white p-3 rounded-lg max-w-xs"
              >
                {msg}
              </div>
            </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center space-x-4">
        <button className="hover:scale-125">
          <img src={image.smile} className="w-7" alt="emojis" />
        </button>
        <input
          type="text"
          className="flex-1 bg-gray-900 text-white p-3 rounded-lg outline-none"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)  
          }}
        />
        <button className="hover:scale-125">
          <img src={image.attach} alt="attachment" className="w-6 h-6" />
        </button>
        <button
          className="bg-green-500 p-4 rounded-full text-white hover:text-black hover:bg-green-300 active:opacity-70 hover:scale-110"
          onClick={handleSendMessage}
        >
          <img src={image.send} alt="voice message" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
