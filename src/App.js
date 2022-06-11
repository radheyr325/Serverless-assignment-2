import './App.css';

function App() {

    const login = () => {
        window.location.href = "/login";
    }

    const register = () => {
        window.location.href = "/register";
    }

    const view = () => {
        window.location.href = "/view";
    }



    return(
        <div>
            <center>
                <h2>Home Page</h2>
                <button onClick={login}>Login</button><br/>
                <button onClick={register}>Register</button><br/>
                <button onClick={view}>View the Online Users</button><br/>
            </center>
        </div>
    )
}

export default App;