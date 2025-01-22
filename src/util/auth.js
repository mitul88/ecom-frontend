import { jwtDecode } from "jwt-decode";
import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export async function refreshToken() {
  try {
    const response = await fetch("v1/api/auth/refresh-token", {
      method: "GET",
      credentials: "include", // Include httpOnly cookies
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setAccessToken(data.token);
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
}

export function setAccessToken(token) {
  localStorage.setItem("token", token);
  let expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
}

export function removeAccessToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) return null;

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    redirect("/");
    return null;
  }

  return token;
}

export function decodeToken() {
  const token = getAuthToken();
  if (token) {
    return jwtDecode(token);
  }
  return;
}

// export function checkAuthLoader() {
//   const token = getAuthToken();

//   if (!token) {
//     return redirect("/auth?mode=login");
//   }

//   return null;
// }
