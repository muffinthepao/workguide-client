import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { joiResolver } from "@hookform/resolvers/joi";
import { useApp } from "../../context/AppContext";
import { useForm } from "react-hook-form";

import { SchemaLogin } from "./LoginValidation";
import { SchemaJoin } from "./JoinValidation";

export default function AuthPage() {
  const navigate = useNavigate();
  const { authPage, setAuthPage, setUserData } = useApp();

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    // watch,
    formState: { errors: errorsLogin },
  } = useForm({
    resolver: joiResolver(SchemaLogin),
    defaultValues: {
      loginEmail: "mervin4@gmail.com",
      loginPassword: "123",
    },
  });

  const {
    register: registerJoin,
    handleSubmit: handleSubmitJoin,
    // watch,
    formState: { errors: errorsJoin },
  } = useForm({
    resolver: joiResolver(SchemaJoin),
    defaultValues: {
      // email: "",
      // password: "",
      joinFullName: "Mervin 1",
      joinPreferredName: "Mervin 1",
      joinEmail: "mervin1@gmail.com",
      joinPassword: "123",
      joinConfirmPassword: "123",
    },
  });

  const onLoginSubmit = async (data) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_USER_BASE_URL}/login`,
        {
          email: data.loginEmail,
          password: data.loginPassword,
        }
      );
      

      if (response.error) {
        toast.error(response.error);
        return;
      }

      if (response.status === 200) {
        toast.success("Logged-in Successfully");
        const token = response.data.token
        const userData = response.data.userData
        localStorage.setItem("user_token", token)

        setUserData(userData)

        navigate("/questions");
      }

    } catch (error) {
      if (error.response.status === 400) {
        return toast.warning("Email Taken. Please use another email.");
      }

      console.log(error.response);
      toast.error("Unable to Register. Please try again later. FROM CATCH");
    }
    
  };

  const onJoinSubmit = async (data) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_USER_BASE_URL}/join`,
        {
          fullName: data.joinFullName,
          preferredName: data.joinPreferredName,
          email: data.joinEmail,
          password: data.joinPassword,
          confirmPassword: data.joinConfirmPassword,
        }
      );
      

      if (response.error) {
        toast.error(response.error);
        return;
      }

      if (response.status === 201) {
        toast.success("Registered Successfully");
        const token = response.data.token
        const userData = response.data.userData
        localStorage.setItem("user_token", token)
        setUserData(userData)

        navigate("/questions");
      }

    } catch (error) {
      if (error.response.status === 400) {
        return toast.warning("Email Taken. Please use another email.");
      }

      console.log(error.response);
      toast.error("Unable to Register. Please try again later. FROM CATCH");
    }
  };
  return (
    <>
      {authPage === "join" && (
        <div className="container px-5 py-24 pb-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <p>{AuthPage}</p>
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
                  Join
                </h2>

                <form
                  onSubmit={handleSubmitJoin(onJoinSubmit)}
                  className="max-w-lg border rounded-lg mx-auto"
                >
                  <div className="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                      <label
                        for="fullName"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        {...registerJoin("joinFullName")}
                        name="joinFullName"
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                      <p className="text-red-500">
                        {errorsJoin.joinFullName?.message}
                      </p>
                    </div>

                    <div>
                      <label
                        for="fullName"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Preferred Name
                      </label>
                      <input
                        {...registerJoin("joinPreferredName")}
                        name="joinPreferredName"
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                      <p className="text-red-500">
                        {errorsJoin.joinPreferredName?.message}
                      </p>
                    </div>

                    <div>
                      <label
                        for="email"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Email
                      </label>
                      <input
                        {...registerJoin("joinEmail")}
                        name="joinEmail"
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                      <p className="text-red-500">
                        {errorsJoin.joinEmail?.message}
                      </p>
                    </div>

                    <div>
                      <label
                        for="password"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Password
                      </label>
                      <input
                        {...registerJoin("joinPassword")}
                        name="joinPassword"
                        type="password"
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                      <p className="text-red-500">
                        {errorsJoin.joinPassword?.message}
                      </p>
                    </div>

                    <div>
                      <label
                        for="ConfirmPassword"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Confirm Password
                      </label>
                      <input
                        {...registerJoin("joinConfirmPassword")}
                        name="joinConfirmPassword"
                        type="password"
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                      <p className="text-red-500">
                        {errorsJoin.joinConfirmPassword?.message}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    >
                      Join
                    </button>

                    <div className="flex justify-center items-center relative">
                      <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                      <span className="bg-white text-gray-400 text-sm relative px-4">
                        Join with social
                      </span>
                    </div>

                    <button className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                      <svg
                        className="w-5 h-5 shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                          fill="#EA4335"
                        />
                      </svg>
                      Continue with Google
                    </button>
                  </div>

                  <div className="flex justify-center items-center bg-gray-100 p-4">
                    <p className="text-gray-500 text-sm text-center">
                      Don't have an account?
                      <button
                        onClick={() => setAuthPage("login")}
                        className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 transition duration-100"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {authPage === "login" && (
        <div className="container px-5 py-24 pb-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <p>{AuthPage}</p>
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
                  Login
                </h2>

                <form
                  onSubmit={handleSubmitLogin(onLoginSubmit)}
                  className="max-w-lg border rounded-lg mx-auto"
                >
                  <div className="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                      <label
                        for="email"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Email
                      </label>
                      <input
                        {...registerLogin("loginEmail")}
                        name="loginEmail"
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                      <p className="text-red-500">
                        {errorsLogin.loginEmail?.message}
                      </p>
                    </div>

                    <div>
                      <label
                        for="password"
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                      >
                        Password
                      </label>
                      <input
                        {...registerLogin("loginPassword")}
                        name="loginPassword"
                        type="password"
                        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                      <p className="text-red-500">
                        {errorsLogin.loginPassword?.message}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    >
                      Login
                    </button>

                    <div className="flex justify-center items-center relative">
                      <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                      <span className="bg-white text-gray-400 text-sm relative px-4">
                        Log in with social
                      </span>
                    </div>

                    <button className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                      <svg
                        className="w-5 h-5 shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                          fill="#EA4335"
                        />
                      </svg>
                      Continue with Google
                    </button>
                  </div>

                  <div className="flex justify-center items-center bg-gray-100 p-4">
                    <p className="text-gray-500 text-sm text-center">
                      Don't have an account?
                      <button
                        onClick={() => setAuthPage("join")}
                        className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 transition duration-100"
                      >
                        Join
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
