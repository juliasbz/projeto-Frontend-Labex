import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToHomePage } from "../routes/coordinator";
import { requestLogin } from "../services/requests";


function Header() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputValues = (event) => {
        switch (event.target.name) {
            case "email":
                return setEmail(event.target.value);
            case "password":
                return setPassword(event.target.value);
            default:
                return;
        };
    };

    const login = (event) => {
        event.preventDefault();

        requestLogin(email, password, navigate);
    };

    const logout = () => {
        localStorage.removeItem("token");
        goToHomePage(navigate);
    };

    const renderHeader =
        localStorage.getItem("token") ?
            (
                <button onClick={logout}>Logout</button>
            ) : (
                <form onSubmit={login}>
                    <label htmlFor={"email"}>E-mail: </label>
                    <input id={"email"} name={"email"} value={email} onChange={handleInputValues}></input>
                    <br />
                    <label htmlFor={"password"}>Senha: </label>
                    <input id={"password"} type={"password"} name={"password"} value={password} onChange={handleInputValues}></input>
                    <br />
                    <button type={"submit"}>Entrar</button>
                </form>
            );

    return (
        <header>
            <h1>LabeX</h1>
            {renderHeader}
        </header>
    );
};

export default Header;