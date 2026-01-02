export const saveAuth = (data) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.user.role);
};

export const getRole = () => localStorage.getItem("role");

export const logout = () => {
  localStorage.clear();
};
