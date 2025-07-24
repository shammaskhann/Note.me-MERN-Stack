import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // window.location.hash: "#/google/callback?token=XYZ"
      const hash = window.location.hash;
      const queryString = hash.includes("?") ? hash.split("?")[1] : "";
      const params = new URLSearchParams(queryString);
      const token = params.get("token");
      if (token) {
        localStorage.setItem("token", token);
        navigate("/loading");
      } else {
        alert("Google sign-in failed: No token found in URL.");
        navigate("/");
      }
    } catch (error) {
      alert("Google sign-in failed: " + error.message);
      navigate("/");
    }
  }, [navigate]);

  return <div>Signing you in with Google...</div>;
}

export default GoogleCallback;
