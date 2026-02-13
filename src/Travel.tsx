import './App.css';
import { useNavigate } from "react-router-dom";
import background from "./assets/Disney Land.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
const Travel = () => {
    const ImagesPreLoad = ["./assets/Disney Land.png",
        "./assets/dinner.png",
        "./assets/VinWonders.png",
        "./assets/heart1.png",
        "./assets/heart2.png",
        "./assets/heart3.png",
        "./assets/heart4.png",
        "./assets/heart5.png",
        "./assets/heart6.png",
        "./assets/tajmahal.png",
        "./assets/final.png"];
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
                <h1>Loading Love... ❤️</h1>
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
