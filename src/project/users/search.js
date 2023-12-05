import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Search() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    return (
        <div className="home">
            <h2>Search page</h2>
            When signed in as admin you can go through the users table and check the CRUD operations
            (try username: ada and password: ada123).
        </div>
    );
}
export default Search ;
