import './App.css';
import arrow from './assets/arrow.svg';
import attach from './assets/attach.svg';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const DoctorAvatar = ({ doctorName }) => (
  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
    <span className="text-gray-500 text-xl">{doctorName.charAt(0)}</span>
  </div>
);

DoctorAvatar.propTypes = {
  doctorName: PropTypes.string.isRequired,
};

const ChatPage = ({ doctorName, doctorTitle, initialMessages }) => (
  <div className="w-[78%] h-full flex flex-col shadow-lg">
    {/* Header */}
    <div className="flex items-center bg-gray-300 p-4 shadow-md">
      <div className="w-10 h-10 overflow-hidden">
        <img
          src={`https://ui-avatars.com/api/?name=${doctorName}&background=0D8ABC&color=fff`}
          alt={doctorName}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <p className="text-gray-800 font-bold">{doctorName}</p>
        <p className="text-gray-600 opacity-60">{doctorTitle}</p>
      </div>
      <button className="ml-auto bg-green-500 text-white rounded px-4 py-2 hover:bg-green-400 hover:text-black shadow hover:shadow-lg transition-colors duration-200">
        Doctor&apos;s Profile
      </button>
    </div>

    {/* Chat Area */}
    <div className="flex-1 bg-teal-900 p-4 flex flex-col overflow-y-auto shadow-md">
      {initialMessages.map((msg, index) => (
        <div
          key={index}
          className={`mb-4 ${msg.isDoctor ? 'self-start' : 'self-end'}`}
        >
          <p
            className={`p-3 rounded ${
              msg.isDoctor ? 'bg-gray-600 text-white' : 'bg-green-700 text-white'
            } max-w-xs`}
          >
            {msg.text}
          </p>
        </div>
      ))}
    </div>

    {/* Input Area */}
    <div className="w-full h-16 bg-white flex items-center justify-between px-4 pb-2">
      <div className="relative w-full mr-4">
        <input
          type="text"
          className="w-full h-10 px-4 pr-10 rounded-lg border outline-none"
          placeholder="Write about your symptoms"
        />
        <div className="absolute right-4 top-2.5">
          <label htmlFor="attachment" className="cursor-pointer">
            <img src={attach} alt="Attach" className="w-6" />
          </label>
          <input
            type="file"
            id="attachment"
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>
      <button className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center active:scale-95 transition-transform shadow hover:shadow-lg">
        <img src={arrow} alt="Send" className="w-8" />
      </button>
    </div>
  </div>
);

ChatPage.propTypes = {
  doctorName: PropTypes.string.isRequired,
  doctorTitle: PropTypes.string.isRequired,
  initialMessages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isDoctor: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

function App() {
  const previousChats = [
    {
      doctorName: 'Dr. Shaun Murphy',
      doctorTitle: 'Gastroenterologist - Apollo Hospitals',
      initialMessages: [
        { text: 'You will do good in Radiology.', isDoctor: true },
        { text: 'I am Surgeon.', isDoctor: false },
      ],
    },
    {
      doctorName: 'Dr. Claire Browne',
      doctorTitle: 'Cardiologist - City Clinic',
      initialMessages: [
        { text: 'How are you feeling today?', isDoctor: true },
        { text: 'I am feeling much better, thank you!', isDoctor: false },
        { text: 'Great to hear! Continue your medication.', isDoctor: true },
      ],
    },
    {
      doctorName: 'Dr. Neil Melendez',
      doctorTitle: 'Neurologist - County Hospital',
      initialMessages: [
        { text: 'Follow up on your medication', isDoctor: true },
        { text: 'Have you been experiencing any side effects?', isDoctor: true },
        { text: 'No, everything seems fine.', isDoctor: false },
      ],
    },
    {
      doctorName: 'Dr. Audrey Lim',
      doctorTitle: 'Pediatrician - Sunshine Clinic',
      initialMessages: [
        { text: 'Review your test results', isDoctor: true },
        { text: 'Your test results look good.', isDoctor: true },
        { text: 'Thank you, doctor.', isDoctor: false },
      ],
    },
  ];

  return (
    <Router>
      <main className="w-full h-screen bg-[#075E54]">
        <div className="w-full h-full flex relative">
          {/* Sidebar */}
          <div className="w-[22%] h-full bg-[#88BBA3] p-8 overflow-y-auto">
            {/* Patient Info */}
            <div className="w-full bg-[#075E54] rounded-lg p-4 mb-8 shadow-md">
              <div className="flex items-center">
                <DoctorAvatar doctorName="JD" />
                <div className="ml-4">
                  <p className="text-white font-bold">John Doe</p>
                  <p className="text-gray-200">Patient ID: 619420</p>
                </div>
              </div>
            </div>
            <h1 className="font-semibold uppercase text-2xl mb-4">
              Previous Chats
            </h1>
            <div className="space-y-4">
              {previousChats.map((chat, index) => (
                <Link
                  key={index}
                  to={`/chat/${encodeURIComponent(
                    chat.doctorName.toLowerCase().replace(/\s/g, '-')
                  )}`}
                  className="block bg-[#dbdada] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <DoctorAvatar doctorName={chat.doctorName} />
                    <div className="ml-4">
                      <h2 className="font-medium text-lg">{chat.doctorName}</h2>
                      <p className="text-sm text-gray-800 opacity-80">
                        {chat.initialMessages[chat.initialMessages.length - 1].text}
                      </p>
                      <p className="text-xs text-gray-600">
                        {chat.initialMessages[chat.initialMessages.length - 1].isDoctor ? 'Sent' : 'Received'}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <Routes>
            {previousChats.map((chat, index) => (
              <Route
                key={index}
                path={`/chat/${encodeURIComponent(
                  chat.doctorName.toLowerCase().replace(/\s/g, '-')
                )}`}
                element={<ChatPage {...chat} />}
              />
            ))}
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
