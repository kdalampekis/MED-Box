import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import Login from "./components/AddForms/Login";
import { CookiesProvider, useCookies } from "react-cookie";


const App = () => {
  const routing = useRoutes(Themeroutes);
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }
  return (
      <CookiesProvider>
        <div>
          {cookies.user ? (
             <div className="dark">{routing}</div>
            ) : (
              <Login onLogin={handleLogin} />
          )}
        </div>
      </CookiesProvider>
  );



};

export default App;
