import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import Login from "./components/AddForms/Login";
import { CookiesProvider, useCookies } from "react-cookie";
import UserForm from "./components/AddForms/UserForm";


const App = () => {
  const routing = useRoutes(Themeroutes);
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
      setCookie("user", user, { path: "/" });
  }
  console.log(cookies);

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
