import './App.css';
import { useNavigate } from "react-router-dom";
import background from "./assets/Disney Land.png";
import { HiArrowNarrowRight } from "react-icons/hi";
const Travel = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="leftTravel">
                <img src={background} alt="Ghibli" />
            </div>

            <div className="rightTravel">
                <div className="text-content">
                    <h1>I Promise To Travel The World With You</h1>
                    <p>
                        From quiet mountain mornings
                        to oceans that kiss golden sunsets,
                        I promise every journey will begin and end with us.
                    </p>
                </div>
                <div className="next-arrow" onClick={() => navigate("/two")}>
                    <HiArrowNarrowRight />
                </div>
            </div>
        </div>
    );
};

export default Travel;
