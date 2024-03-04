import { useForm } from "react-hook-form";

const CommonRegister = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handleRegister,
}) => {
  const {
handleSubmit,
register,
formState:{errors}

  }=useForm()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
            {...register('name',{required:true})}
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {errors.name &&<span className="text-error">name required</span>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
            {...register('email',{required:true,pattern:/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/})}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {errors.email&&<span className="text-error">email required</span>}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
            {...register('password',{required:true,minLength:8})}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {errors.password&&<span className="text-error">Password should be min 8 character</span>}
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommonRegister;
