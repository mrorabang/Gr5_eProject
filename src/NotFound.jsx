import { useNavigate } from "react-router-dom";
function NotFound() {
    const nav = useNavigate();
    return (
        <div className="nf">
            <img className="nf-icon" src="./image/nf-icon.png" alt="" />
            <h1>404</h1>
            <h3>Page not found</h3>
            <p>This Page you are looking for doesn't exist or an orther error occurred, <br />
                <span onClick={() => {window.scrollTo(0,0);nav(`/#`)}}>Go back home</span> ,or head over to Festivals.com to choose a new direction.
            </p>
        </div>
    );

}

export default NotFound;