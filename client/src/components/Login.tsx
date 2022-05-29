import React, { useState } from "react";
import ElkLogo from "./ElkLogo";

const Login = ({ setId }: { setId: (id: string) => void }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setId(inputValue);
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <ElkLogo />
        <h2 className="text-white font-bold">Collab Drumpad</h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-500">
          Enter your username
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Drumming
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
