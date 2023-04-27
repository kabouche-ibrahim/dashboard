import React, { useState } from "react";
import "./loginform.css";
import logo from "./cnr.png";
import passwordIcon from "./password.png";
import userIcon from "./user.png";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
=======


>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const inputStyle = {
        backgroundImage: `url(${userIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "5px center",
        paddingLeft: "30px",
        backgroundSize: "20px 20px",
    };

    const passwordInputStyle = {
        backgroundImage: `url(${passwordIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "5px center",
        paddingLeft: "30px",
        backgroundSize: "20px 20px",
<<<<<<< HEAD
    };

=======
        
    };


>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
    const handleSubmit = (e) => {     
        e.preventDefault();
        onLogin(username, password);
        setIsLoggedIn(true);
        navigate("/Dashboard");
    }

    return (
<<<<<<< HEAD
        <div className="form">
=======
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
        <form className="form-inner" onSubmit={handleSubmit}>
            <h2><img src={logo} width={60} height={50} /></h2>
            <div className="form-groop">
                <input
                    type="text"
                    id="usrname"
                    placeholder="Nom d'utilisateur"
                    style={inputStyle}
<<<<<<< HEAD
                    className="form-input"
=======
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-groop">
                <input
                    type="password"
                    id="pwd"
                    placeholder="Mot de passe"
                    style={passwordInputStyle}
<<<<<<< HEAD
                    className="form-input"
=======
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
<<<<<<< HEAD
            <button type="submit" className="form-button">Connexion</button>
        </form>
        </div>
    );
}

export default LoginForm;
=======
            <button type="submit">Connexion</button>
        </form>
    )
}

export default LoginForm
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
