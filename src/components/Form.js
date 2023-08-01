import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export const Form = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    // age: yup.number().positive().integer().min(18).required(),
    phone: yup.number().required(),
    //address: yup.string().required(),
    password: yup.string().min(4).max(15).required(),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-6 ml-80 mr-80 gap-1 bg-white p-2 w-[480px] h-[500px] rounded-3xl"
      >
        <h2 className="text-3xl ml-40">Sign Up</h2>
        <h2 className="text-lg ml-28 mt-2">Create Your An Account</h2>
        <div className="pb-10 ml-10">
          <div className="flex mt-4 gap-5">
            <span className="flex flex-col gap-1">
              <label>First Name </label>
              <input
                type="text"
                {...register("firstname")}
                className=" bg-slate-200 p-1 mr-1 rounded-lg w-44"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label for="">lastName</label>
              <input
                type="text"
                {...register("lastname")}
                className=" bg-slate-200 p-1 mr-1 rounded-lg w-44"
              />
            </span>
          </div>
          <div className="flex mt-4 gap-5">
            <span className="flex flex-col gap-1">
              <label for="">Email </label>
              <input
                type="text"
                {...register("Email")}
                className=" bg-slate-200 p-1 mr-1 rounded-lg w-44"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label for="">Address </label>
              <input
                type="text"
                {...register("address")}
                className=" bg-slate-200 p-1 mr-1 rounded-lg w-44"
              />
            </span>
          </div>

          <div className="flex mt-4 gap-5">
            <span className="flex flex-col gap-1">
              <label for="">Password</label>
              <input
                type="password"
                {...register("password")}
                className=" bg-slate-200 p-1 mr-1 rounded-lg w-44"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label for="">Confirm password</label>
              <input
                type="password"
                {...register("ConfirmPassword")}
                className=" bg-slate-200 p-1 mr-1 rounded-lg w-44"
              />
            </span>
          </div>
          <input
            type="submit"
            className="p-1 mr-1 rounded-lg w-44 ml-24 mt-8 bg-sky-600 text-white text-xl"
          />
        </div>

        <div className="flex justify-center gap-3 mt-[-20px]">
          <FcGoogle className="text-xl" />
          <FaFacebook className="text-xl text-blue-700" />
          <FaInstagramSquare className="text-xl text-[]" />
          <AiFillLinkedin className="text-xl text-blue-700" />
        </div>

        <h2 className="ml-28 mt-3">
          Already have an account <span className="text-blue-600">Sign In</span>
        </h2>
      </form>
    </div>
  );
};
