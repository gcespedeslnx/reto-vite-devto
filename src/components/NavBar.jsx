import { CgBell } from "react-icons/cg";
import { HiArrowCircleUp } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full flex flex-row gap-4 bg-white justify-center border border-stone-400">
      <div>
        {/* Boton de inicio */}
        <button className="bg-black text-white m-2 p-2 border rounded">
          DEV
        </button>
      </div>
      <div>
        <input
          className="border border-neutral-400 rounded m-2 p-2 w-auto"
          type="text"
          placeholder="Search...            Powered by @Angolia"
        />
      </div>
      <div>
        {/* Este boton es el de 'login' */}
        <Link to={`login`} >
        <button className="border border-neutral-400 rounded m-2 p-2 text-blue-500">
          Login
        </button></Link>
        {/*Este el boton de la ruta de crear cuenta*/}
        <Link to={`signup`}>
        <button className="border border-neutral-400 rounded m-2 p-2 text-blue-500">
          Create Account
        </button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CgBell style={{ color: "black", fontSize: "2em" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HiArrowCircleUp style={{ color: "black", fontSize: "2em" }} />
      </div>
    </nav>
  );
}
