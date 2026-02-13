import './App.css';
import { useNavigate } from "react-router-dom";
import img1 from "./assets/Disney Land.png";
import img2 from "./assets/VinWonders.png";
import img3 from "./assets/final.png";
import img4 from "./assets/tajmahal.png";
import heart1 from "./assets/heart1.png";
import heart2 from "./assets/heart2.png";
import heart3 from "./assets/heart3.png";
import heart4 from "./assets/heart4.png";
import heart5 from "./assets/heart5.png";
import heart6 from "./assets/heart6.png";
import img5 from "./assets/dinner.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import background from "./assets/dinner.png";
const Travel = () => {
    const ImagesPreLoad = [heart1, heart2, heart3, heart4, heart5, heart6,img1,img2,img3,img4,img5];
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        let loadedCount = 0;

        ImagesPreLoad.forEach((src) => {
            const img = new Image();
            img.src = src;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === ImagesPreLoad.length) {
                    setLoaded(true);
                }
            };
        });
    }, []);
    if (!loaded) {
        return (
            <div className="loader-screen">
                <h1>Loading Love... <span className='loadingHeart'>❤️</span></h1>
            </div>
        );
    }
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
