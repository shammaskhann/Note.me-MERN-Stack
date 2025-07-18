// src/api.js

export const BASE_URL = "http://localhost:5000";

export const API = {
  getUser: `${BASE_URL}/api/users/me`,
  googleAuth: `${BASE_URL}/api/users/google`,
  googleCallback: `${BASE_URL}/api/users/google/callback`,
  // Add more endpoints as needed
};
