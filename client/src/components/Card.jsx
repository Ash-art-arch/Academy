import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = ({ name, specialty, credentials, hospital, email, time, image, }) => {
    let navigate = useNavigate();
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card">
          <div className="front">
            <div className="card-top">
              <p className="card-top-para">Profile</p>
            </div>
            <img
              src={image}
              className="w-48 h-48 rounded-full border-4 border-white mt-10"
            />
            <div className="text-3xl font-bold">{name}</div>
            <div className="text-xl font-semibold">{specialty}</div>
            <div className="text-xl text-white font-semibold">{credentials}</div>          
            </div>
          <div className="back">
            <div className="mt-7 mb-15 mx-10 flex flex-col">
              <div className="text-xl my-4 text-white font-semibold">
                {hospital}
              </div>
              <div className="text-xl my-4 text-white font-semibold">
                E-mail: {email}
              </div>
              <div className="text-xl my-4 text-white font-semibold">
                Time: {time}
              </div>
            </div>
            <div className="flex justify-center mt-32">
              <button 
              onClick={() => navigate("/chats")}
              className="btn">Contact Now</button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    height: 441px;
    width: 360px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 800px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .card {
    width: 100%;
    height: 100%;
    background: #111828;
    border-radius: 2rem;
    position: relative;
    transition: transform 1500ms;
    transform-style: preserve-3d;
  }

  .card-top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    position: absolute;
    width: 50%;
    background-color: transparent;
    border: 2px solid white;
    top: 0;
    border-top: none;
    border-radius: 0 0 1rem 1rem;
  }

  .card-top-para {
    font-size: 16px;
    font-weight: bold;
  }

  .container:hover > .card {
    cursor: pointer;
    transform: rotateX(180deg) rotateZ(-180deg);
  }

  .front {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.7);
    position: absolute;
    backface-visibility: hidden;
    align-items: left;
    margin: 10px;
    gap: 20px;
    background-color: #111828;
    transform: rotateX(180deg) rotateZ(-180deg);
  }

  .btn {
    width: auto;
    height: 2.3em;
    margin: 0.3em;
    background: black;
    padding: 0 3em;
    color: white;
    border: none;
    border-radius: 0.625em;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  button:hover {
    color: black;
  }

  button:after {
    content: "";
    background: white;
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  button:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  credentials: PropTypes.string.isRequired,
  hospital: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
