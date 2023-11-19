import { Form } from "../components";
import { AuthContextProvider } from "../context/AuthContextProvider";
import "./LoginPage.css";

export function LoginPage() {
  return (
    <AuthContextProvider>
      <div className="LoginPage">
        <h2 className="TitlePage">
          Welcome to <span>Hogwarts Connect</span>
        </h2>
        <Form />
      </div>
    </AuthContextProvider>
  );
}
