import image from "../constants/image";

function ChatWindow() {
  return (
    <div className="w-3/4 bg-gray-800 h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src={image.mdoc}
            alt="Doctor"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-white">Dr. John Doe</h2>
            <p className="text-sm text-green-400">Active Now</p>
          </div>
        </div>
        <div className="space-x-8 flex text-gray-400">
          <img src={image.phone} className="w-7" alt="Phone" />
          <img src={image.video} className="w-7" alt="Video" />
          <img src={image.dots} className="w-7" alt="3 Dots" />
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-scroll bg-auto bg-center bg-opacity-50"
      style={{ backgroundImage: `url(${image.background})` }}>
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
            I am doing great Nigger
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center space-x-4">
        <button>
          <img src={image.smile} className="w-7" alt="emojis" />
        </button>
        <input
          type="text"
          className="flex-1 bg-gray-900 text-white p-3 rounded-lg outline-none"
          placeholder="Message"
        />
        <button>
          <img src={image.attach} alt="attachment" className="w-6 h-6" />
        </button>
        <button className="bg-green-500 p-4 rounded-full text-white">
          <img src={image.microphone} alt="voice message" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
