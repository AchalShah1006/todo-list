export const saveUserToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

export const getUserToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
