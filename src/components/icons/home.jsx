import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <NavLink to="/dashboard">
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="home-svg" // tambahkan class di sini
    >
      <path
        d="M24 36V30"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.14 5.64L6.28004 16.74C4.72004 17.98 3.72004 20.6 4.06004 22.56L6.72004 38.48C7.20004 41.32 9.92004 43.62 12.8 43.62H35.2C38.06 43.62 40.8 41.3 41.28 38.48L43.94 22.56C44.26 20.6 43.26 17.98 41.72 16.74L27.86 5.66C25.72 3.94 22.26 3.94 20.14 5.64Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </NavLink>
  );
};

export default Home;
