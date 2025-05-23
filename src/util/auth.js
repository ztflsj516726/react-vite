const auth = {
  setToken: (token) => {
    localStorage.setItem("token", token);
  },
  clearToken: () => {
    localStorage.removeItem("token");
  },
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
  clear: (key) => {
    localStorage.removeItem(key);
  },
};

export default auth;
