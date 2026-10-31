// utils/auth.js

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getTokenExpiration = (token = localStorage.getItem("token")) => {
  if (!token) return null;

  try {
    const encodedPayload = token.split(".")[1];
    if (!encodedPayload) return null;

    const base64Payload = encodedPayload
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(encodedPayload.length / 4) * 4, "=");
    const payload = JSON.parse(atob(base64Payload));

    return Number.isFinite(payload.exp) ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  const expiresAt = getTokenExpiration(token);

  if (token && expiresAt !== null && expiresAt <= Date.now()) {
    removeToken();
    return null;
  }

  return token ? { token } : null;
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
