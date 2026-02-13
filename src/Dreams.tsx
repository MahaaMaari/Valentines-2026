import './App.css';
import { useNavigate } from "react-router-dom";
import background from "./assets/tajmahal.png";
import { HiArrowNarrowLeft,HiArrowNarrowRight } from "react-icons/hi";
const Dreams = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="leftDreams">
                <div className="back-arrow" onClick={() => { navigate('/') }}>
                    <HiArrowNarrowLeft />
                </div>
                <img src={background} alt="Ghibli" />
            </div>

            <div className="rightDreams">
                <div className="text-content">
                    <h1>I Promise To Try My Best To Fulfill Your Dreams</h1>
                    <p>
                        Together we’ll build the life you imagine,
                        step by step, dream by dream —
                        until everything we wished for
                        becomes something we lived.
                    </p>
                </div>
                <div className="next-arrow" onClick={() => navigate("/three")}>
                    <HiArrowNarrowRight />
                </div>
            </div>
        </div>
    );
};

export default Dreams;
