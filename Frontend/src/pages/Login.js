import "../App.css";
import loginMockImage from "../assets/images/loginMock.png";
import logo from "../assets/images/Logo.png";
import googlesvg from "../assets/images/google.svg";
import LoginMockupSection from "../components/Login/LoginMockupSection";
import LoginOptionsSection from "../components/Login/LoginOptionsSection";

function Login() {
  return (
    <div className="login-page bg-white min-h-screen flex flex-col items-center justify-center">
      {/* main content: responsive flex direction */}
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-8xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
        <LoginMockupSection loginMockImage={loginMockImage} />
        <LoginOptionsSection logo={logo} googlesvg={googlesvg} />
      </div>
    </div>
  );
}

export default Login;
