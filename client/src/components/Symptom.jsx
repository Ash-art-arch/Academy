import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../constants/image";
import styled from 'styled-components';

function Symptom() {
  const [symptom, setSymptom] = useState("");
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSymptomChange = (e) => {
    setSymptom(e.target.value);
  };

  const getSpecialistContact = (disease) => {
    switch (disease.toLowerCase()) {
      case "acne":
      case "psoriasis":
      case "impetigo":
      case "fungal infection":
      case "chicken pox":
        return "Dermatologist";
      case "allergy":
        return "Allergist";
      case "arthritis":
        return "Rheumatologist";
      case "bronchial asthma":
      case "pneumonia":
        return "Pulmonologist";
      case "cervical spondylosis":
        return "Orthopedist";
      case "dengue":
      case "malaria":
      case "typhoid":
      case "urinary tract infection":
        return "Infectious Disease Specialist";
      case "diabetes":
        return "Endocrinologist";
      case "gastroesophageal reflux disease":
      case "peptic ulcer disease":
        return "Gastroenterologis";
      case "hypertension":
        return "Cardiologist";
      case "jaundice":
        return "Hepatologist";
      case "common cold":
      case "dimorphic hemorrhoids":
        return "General Practitioner";
      case "drug reaction":
        return "Internal Medicine Specialist";
      default:
        return null;
    }
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
      const response = await fetch(
        "https://1c7a-34-45-150-78.ngrok-free.app/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: symptom }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to fetch prediction. Please try again."
        );
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
      <div className="px-20 pt-20 pb-5 text-center flex flex-col items-center justify-around bg-[#293446]/77 rounded-xl shadow-lg backdrop-blur-sm border border-gray-500">
        <input
          type="text"
          value={symptom}
          onChange={handleSymptomChange}
          placeholder="Describe your Symptoms"
          className="px-10 py-5 text-xl text-white text-center bg-gray-900 border border-gray-300 rounded mb-5 w-80"
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
          <div className="text-xl text-green-300 font-bold px-14 py-3.5 my-5 border border-green-300 rounded">
            Predicted Disease: <span className="text-white">{prediction}</span>
          </div>
        )}

        {prediction && (
          <StyledWrapper>
            <button
              onClick={() => navigate("/contacts")}
             className="btn"
            >
             Click Here to Contact a{" "}
              {getSpecialistContact(prediction)}
           </button>
          </StyledWrapper>
        )}

        <button
          onClick={() => navigate("/chats")}
          className="text-xl px-8 pb-3.5 mt-2 text-green-300 underline"
        >
          Go to Previous Chats
        </button>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .btn {
   margin: 15px 0px;
   background-color: #00BFA6;
   padding: 14px 40px;
   color: #fff;
   text-transform: uppercase;
   letter-spacing: 2px;
   cursor: pointer;
   border-radius: 10px;
   border: 2px dashed #00BFA6;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
   transition: .4s;
  }

  .btn span:last-child {
   display: none;
  }

  .btn:hover {
   transition: .4s;
   border: 2px dashed #00BFA6;
   background-color: #fff;
   color: #00BFA6;
  }

  .btn:active {
   background-color: #87dbd0;
  }`;


export default Symptom;
