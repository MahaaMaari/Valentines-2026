import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "./assets/dinner.png";
import { HiArrowNarrowLeft } from "react-icons/hi";
import "./App.css";
import heart1 from "./assets/heart1.png";
import heart2 from "./assets/heart2.png";
import heart3 from "./assets/heart3.png";
import heart4 from "./assets/heart4.png";
import heart5 from "./assets/heart5.png";
import heart6 from "./assets/heart6.png";

const hearts = [heart1, heart2, heart3, heart4, heart5, heart6];
const heartsClasses = ['heart-1', 'heart-2', 'heart-3'];

const Last = () => {
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(false);
    const [noCount, setNoCount] = useState(0);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const moveButton = () => {
        const maxWidth = window.innerWidth - 150;
        const maxHeight = window.innerHeight - 150;

        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;

        setPosition({ top: randomY, left: randomX });
    };
    const handleNoClick = () => {
        const newCount = noCount + 1;
        if (noCount < 5) {
            setNoCount(newCount);
        }
        else {
            setShowOverlay(true);
        }
        if (newCount > 3) {
            moveButton();
        }
    };

    return (
        <div className="container">
            <div className="leftLast">
                <div className="back-arrow" onClick={() => { navigate('/three') }}>
                    <HiArrowNarrowLeft />
                </div>
                <img src={background} alt="Ghibli" />
            </div>

            <div className="rightLast valentine-bg">
                <div className="valentine-content">

                    <h2>I Promise To Try My Best To Keep My Promises.</h2>

                    <div className="heart-wrapper">
                        {hearts.map((heart, index) => (
                            <img
                                key={index}
                                src={heart}
                                alt="heart"
                                className={`${noCount < 3 ? heartsClasses[noCount] : 'heart-rest'} ${index == noCount ? "heart-image-visible" : ""}`}
                            />
                        ))}
                    </div>

                    <h1>Will you be my Valentine?</h1>

                    <div className="button-row">
                        <button className="yes-btn" style={{
                            padding: `${12 + noCount * 6}px ${30 + noCount * 12}px`,
                            fontSize: `${1.1 + noCount * 0.1}rem`,
                        }} onClick={() => navigate('/five')}>Yes</button>
                        <button className="no-btn" style={
                            noCount >= 3
                                ? {
                                    position: "absolute",
                                    top: position.top,
                                    left: position.left,
                                }
                                : {}
                        } onClick={handleNoClick}>
                            No
                        </button>
                    </div>

                </div>
            </div>
            {showOverlay && (
                <div className="final-overlay">
                    <div className="overlay-content">
                        <h1>Stop playing with my heart 💔</h1>
                        <h2>Just say Yes ❤️</h2>

                        <button className="big-yes-btn" onClick={()=>{navigate('/five')}}>
                            YES 💍
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Last;
