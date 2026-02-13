import "./Final.css";
import bg from "./assets/final.png";

const Final = () => {
    return (
        <div
            className="final-page"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="overlay"></div>

            <div className="final-content">
                <h1>Happy Valentine’s Day ❤️</h1>

                <p>
                    My Beebu,
                    I wish you the most beautiful Valentine’s Day.
                    I wish for the day we are together soon,
                    and for a lifetime that never separates us.
                </p>

                <h2>Forever Yours 💍</h2>

                <div className="decorations">
                    <span>🌹</span>
                    <span>✨</span>
                    <span>❤️</span>
                    <span>✨</span>
                    <span>🌹</span>
                </div>
            </div>
        </div>
    );
};

export default Final;
