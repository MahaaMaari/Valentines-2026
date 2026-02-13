import { useNavigate } from "react-router-dom";
import background from "./assets/VinWonders.png";
import "./App.css";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
const Forever = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="leftForever">
        <div className="back-arrow" onClick={() => { navigate('/two') }}>
          <HiArrowNarrowLeft />
        </div>
        <img src={background} alt="Ghibli" />
      </div>

      <div className="rightForever">
        <div className="text-content">
          <h1>I Promise To Be With You Forever</h1>
          <p>
            In all your dreams, in all your fears,
            in your laughter and in your tears —
            I choose you, today and always.
          </p>
        </div>
      </div>

      {/* Next Arrow */}
      <div className="next-arrow" onClick={() => navigate("/four")}>
        <HiArrowNarrowRight />
      </div>
    </div>
  );
};

export default Forever;
