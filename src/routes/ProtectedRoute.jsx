import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken, getTokenExpiration, removeToken } from "../../utils/auth";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  const token = getToken();
  const accessToken = token?.token;
  const expiresAt = accessToken ? getTokenExpiration(accessToken) : null;

  useEffect(() => {
    if (!accessToken || expiresAt === null) return undefined;

    const timeout = window.setTimeout(() => {
      removeToken();
      navigate("/admin/login", {
        replace: true,
        state: { sessionExpired: true },
      });
    }, Math.max(0, expiresAt - Date.now()));

    return () => window.clearTimeout(timeout);
  }, [accessToken, expiresAt, navigate]);

  if (!token) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ sessionExpired: Boolean(storedToken) }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
