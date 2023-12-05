import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    return (
        <div className="home">
            <h2>Welcome to my Homepage!</h2>
            My name is Karthikeya Reddy and I  made this website.Please go through the signin,signup and account below
            Thank you.
        </div>
    );
}
export default Home;
