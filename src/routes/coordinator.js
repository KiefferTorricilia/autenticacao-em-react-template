export const navigateToHome = (navigate) => {
  navigate("/");
};

export const navigateToAdmin = (navigate, id) => {
  navigate(`/admin/${id}`);
};
export const navigateToLogin = (navigate) => {
  navigate("/login");
};
export const navigateToCrate = (navigate) => {
  navigate("/create");
};
export const navigateToCreateTrip = (navigate) => {
  navigate("/criar")
}