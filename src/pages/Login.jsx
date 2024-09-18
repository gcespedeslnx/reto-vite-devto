
import Buttons from "../components/Buttons"
import { FaDev } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userDevto from "../usescases/User.usescase.js";
//import CreateModel from "../models/User.models.js";
export default function Login() {
  const {register,
         handleSubmit,
         formState:{errors,},
         } = useForm();
  const navigate = useNavigate()


  async function onSubmit(data){
    //const user = CreateModel()
    
    const newUser = userDevto(data)
     
    navigate("/")
    return newUser;

  }
  return (
    <body className="bg-white text-black">
      <main className="box-content">        
        <div className="flex flex-row justify-center">
          <FaDev style={{ fontSize: "3rem" }} />
        </div>
        <div className="flex justify-center">
          <h1 className="font-sans font-bold text-2xl">
            Join the DEV Community
          </h1>
        </div>
        <div className="flex justify-center">
          <h3 className="text-sm font-light">
            DEV Community is a community of 2,035,460 amazing developers
          </h3>
        </div>
        <Buttons />

       <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center flex-row w-auto pt-2">
            <label className=""> Email</label>
          </div>   
        <div className="flex justify-center w-auto pt-2">
          <input type="text" className="flex w-1/4 items-center border border-neutral-300
           text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200"
            placeholder="Email"
            {...register("email",{
              required:{
                value:true,
                message:"Please enter your email",
              }
            })}/>
         </div>

         <div className="flex justify-center w-auto pt-2">
            <label htmlFor="">Password</label>
          </div>

         <div className="flex justify-center w-auto pt-2">
          <input type= "password" className="flex w-1/4 items-center border border-neutral-300
           text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200"
           placeholder="Password"
           {...register("password",{
            required:{
              value:true,
              message:"Please enter your password",
            }
           })}/>
         </div>
         <div  className="flex justify-center items-center w-auto pt-2">
          <button type="submit" className="flex w-1/4 items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            Login
          </button>
        </div>
        </form>

         <div className="flex justify-center space-x-5  w-auto pt-2">
            <label>Remember me</label> <label>Forgot Password?</label>
          </div>
        
        <div className="flex flex-row justify-center pt-5 pb-5">
          <div className="w-96">
            <div className="pb-5">
              <p className="text-xs font-light">
                By signing up, you are agreeing to our{" "}
                <a className="text-blue-600" href="">
                  privacy policy, terms of use
                </a>{" "}
                <br /> and{" "}
                <a className="text-blue-600" href="">
                  code of conduct.
                </a>
              </p>
            </div>
            <div className="flex justify-center pt-5 border-t border-neutral-300 w-auto">
              <p className="">
                Already have account?{" "}
                <a className="text-blue-600" href="">
                  Log in.
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}