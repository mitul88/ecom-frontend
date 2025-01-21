class AuthService {
  constructor() {
    this.accessToken = null;
  }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  // Fetch a new access token using the refresh token
  async refreshToken() {
    try {
      const response = await fetch("v1/api/auth/refresh-token", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to refresh token: ${response.statusText}`);
      }

      const data = await response.json();
      this.setAccessToken(data.token);
    } catch (error) {
      console.error("Failed to refresh token:", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
