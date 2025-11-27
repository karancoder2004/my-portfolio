import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsAnimating(true);
      setTimeout(() => {
        onLogin();
      }, 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div
        className={`w-full max-w-md px-8 transform transition-all duration-700 ${
          isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          animation: 'slideIn 0.8s ease-out'
        }}
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1
              className="text-4xl font-bold text-gray-900 dark:text-white"
              style={{
                animation: 'fadeInDown 0.6s ease-out 0.2s both'
              }}
            >
              Welcome
            </h1>
            <p
              className="text-gray-600 dark:text-gray-400"
              style={{
                animation: 'fadeInDown 0.6s ease-out 0.4s both'
              }}
            >
              Enter your credentials to view portfolio
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              style={{
                animation: 'fadeInUp 0.6s ease-out 0.6s both'
              }}
            >
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-all duration-300"
                placeholder="Enter username"
                required
              />
            </div>

            <div
              style={{
                animation: 'fadeInUp 0.6s ease-out 0.8s both'
              }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-all duration-300"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                animation: 'fadeInUp 0.6s ease-out 1s both'
              }}
            >
              Login
            </button>
          </form>

          <div
            className="text-center text-sm text-gray-500 dark:text-gray-400"
            style={{
              animation: 'fadeIn 0.6s ease-out 1.2s both'
            }}
          >
            Demo: Use any credentials
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
