const LoginPage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center" style={{ padding: "0.5rem" }}>
      <div className="flex flex-col md:flex-row items-center justify-center" style={{ margin: "0.5rem", padding: "0" }}>
        {/* Sign In Card */}
        <div className="bg-gray-900 text-white rounded-lg shadow-lg h-[500px] relative" style={{ margin: "0.5rem", padding: "2vh" }}>
          <div className="absolute top-0 left-0 right-0 h-20 bg-gray-900 rounded-t-lg" style={{ margin: "0", padding: "0" }}></div>
          <div className="relative z-10" style={{ marginTop: "2rem", padding: "0" }}>
            <h2 className="text-2xl font-bold" style={{ marginBottom: "2rem", padding: "0" }}>Hello there, welcome back</h2>
            <form>
              <div style={{ marginBottom: "1rem", padding: "0" }}>
                <label className="block text-sm" style={{ marginBottom: "0.5rem", padding: "0" }}>E-mail</label>
                <input type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" style={{ margin: "0", padding: "0" }} />
              </div>
              <div style={{ marginBottom: "1rem", padding: "0" }}>
                <label className="block text-sm" style={{ marginBottom: "0.5rem", padding: "0" }}>Password</label>
                <input type="password" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" style={{ margin: "0", padding: "0" }} />
              </div>
              <div className="text-right" style={{ marginBottom: "1rem", padding: "0" }}>
                <a href="#" className="text-sm text-blue-400 hover:underline" style={{ margin: "0", padding: "0" }}>Forgot your Password?</a>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded shadow-lg" style={{ margin: "0", padding: "0" }}>Sign In</button>
            </form>
            <div className="text-center" style={{ marginTop: "1rem", padding: "0" }}>
              <p className="text-sm" style={{ margin: "0", padding: "0" }}>New here? <a href="#" className="text-blue-400 hover:underline" style={{ margin: "0", padding: "0" }}>Sign Up instead</a></p>
            </div>
          </div>
        </div>

        {/* Sign Up Card */}
        <div className="bg-gray-900 text-white rounded-lg shadow-lg h-[500px] w-full max-w-md relative" style={{ margin: "0.5rem", padding: "2vh" }}>
          <div className="absolute top-0 left-0 right-0 h-20 bg-gray-900 rounded-t-lg" style={{ margin: "0", padding: "0" }}></div>
          <div className="relative z-10" style={{ marginTop: "2rem", padding: "0" }}>
            <h2 className="text-2xl font-bold" style={{ marginBottom: "2rem", padding: "0" }}>Get on Board</h2>
            <form>
              <div style={{ marginBottom: "1rem", padding: "0" }}>
                <label className="block text-sm" style={{ marginBottom: "0.5rem", padding: "0" }}>Name</label>
                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" style={{ margin: "0", padding: "0" }} />
              </div>
              <div style={{ marginBottom: "1rem", padding: "0" }}>
                <label className="block text-sm" style={{ marginBottom: "0.5rem", padding: "0" }}>E-mail</label>
                <input type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" style={{ margin: "0", padding: "0" }} />
              </div>
              <div style={{ marginBottom: "1rem", padding: "0" }}>
                <label className="block text-sm" style={{ marginBottom: "0.5rem", padding: "0" }}>Enter Password</label>
                <input type="password" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" style={{ margin: "0", padding: "0" }} />
              </div>
              <div style={{ marginBottom: "1rem", padding: "0" }}>
                <label className="block text-sm" style={{ marginBottom: "0.5rem", padding: "0" }}>Confirm Password</label>
                <input type="password" className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" style={{ margin: "0", padding: "0" }} />
              </div>
              <div className="text-sm text-gray-400" style={{ marginBottom: "1rem", padding: "0" }}>
                By creating an account, you agree to the <a href="#" className="text-blue-400 hover:underline" style={{ margin: "0", padding: "0" }}>Terms and Use</a> and <a href="#" className="text-blue-400 hover:underline" style={{ margin: "0", padding: "0" }}>Privacy Policy</a>.
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded shadow-lg" style={{ margin: "0", padding: "0" }}>Sign Up</button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

