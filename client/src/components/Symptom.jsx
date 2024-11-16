import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../constants/image";

function Symptom() {
  const [symptom, setSymptom] = useState("");
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSymptomChange = (e) => {
    setSymptom(e.target.value);
  };

  const handlePredict = async () => {
    // Reset state
    setLoading(true);
    setError("");
    setPrediction("");

    if (!symptom.trim()) {
      setLoading(false);
      setError("Please provide a valid symptom description.");
      return;
    }

    try {
      const response = await fetch("https://a9c7-34-45-150-78.ngrok-free.app/predict", {  /*replace https://....free.app*/
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: symptom }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch prediction. Please try again.");
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-auto bg-center"
      style={{ backgroundImage: `url(${image.background})` }}
    >
      <div className="p-20 text-center flex flex-col items-center justify-around bg-[#293446]/77 rounded-xl shadow-lg backdrop-blur-sm border border-gray-500">
        <input
          type="text"
          value={symptom}
          onChange={handleSymptomChange}
          placeholder="Describe your Symptoms"
          className="px-10 py-5 text-xl text-white bg-gray-900 border border-gray-300 rounded mb-5 w-80"
        />

        <button
          onClick={handlePredict}
          className="text-white text-xl px-14 py-3.5 my-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Disease"}
        </button>

        {error && (
          <div className="text-xl font-bold px-14 py-3.5 my-5 border border-red-700 text-red-700 rounded">
            {error}
          </div>
        )}

        {prediction && (
          <div className="text-xl text-white font-bold px-14 py-3.5 my-5 border border-green-300 rounded">
            Predicted Disease: {prediction}
          </div>
        )}

        <button
          onClick={() => navigate("/chats")}
          className="text-xl px-8 py-3.5 mt-5 border border-green-300 text-green-300 rounded"
        >
          Go to Previous Chats
        </button>
      </div>
    </div>
  );
}

export default Symptom;
