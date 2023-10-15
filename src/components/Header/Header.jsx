import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>

    <li> <NavLink to="/">Home</NavLink></li>
    <li> <NavLink to="/jobs">Jobs</NavLink></li>
    <li> <NavLink to="/applied"> Applied Jobs </NavLink></li>
    <li> <NavLink to="/statistics"> Statistics </NavLink></li>
    <li> <NavLink to="/blogs">Blogs</NavLink></li>
    
    </>


    return (
        <div className="bg-[#F2F2F2]">

<div className=" max-w-6xl mx-auto">


<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        {/* <li><a>Statistics</a></li>
        <li><a>Applied Jobs</a></li>
        <li><a>Blog</a></li> */}

        {links}

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Career hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      {/* <li><a>Statistics</a></li>
      <li><a>Applied Jobs</a></li>
      <li><a>Blog</a></li> */}

      {links}

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Apply Now</a>
  </div>
</div>
            
        </div>

        </div>
    );
};

export default Header;