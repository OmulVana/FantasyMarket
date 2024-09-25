export const initializeUsers = () => {
  const users = [
    {
      email: "gicu.gaming@gmail.com",
      password: "magicu",
      role: "Customer",
    },
    {
      email: "george.vinde@gmail.com",
      password: "vinde",
      role: "Vendor",
    },
  ];

  // Check if users already exist in local storage
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const saveUserSession = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const clearUserSession = () => {
  localStorage.removeItem("currentUser");
};
