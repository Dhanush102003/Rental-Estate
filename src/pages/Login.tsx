import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, Mail, Lock, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name?: string;
  email: string;
  password: string;
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      setError('');
      if (isLogin) {
        await login(data.email, data.password);
      } else {
        if (data.name) {
          await signup(data.name, data.email, data.password);
        }
      }
      navigate('/'); // Redirect to home page after successful auth
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-gray-600">
                {isLogin
                  ? 'Sign in to access your account'
                  : 'Join us to start your journey'}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <UserPlus className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      {...register('name', { required: !isLogin })}
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <span className="text-red-500 text-sm">Name is required</span>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i
                    })}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm">Valid email is required</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    {...register('password', { required: true, minLength: 6 })}
                    type="password"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    Password must be at least 6 characters
                  </span>
                )}
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
              >
                {isLogin ? (
                  <>
                    <LogIn className="h-5 w-5 mr-2" />
                    Sign In
                  </>
                ) : (
                  <>
                    <UserPlus className="h-5 w-5 mr-2" />
                    Sign Up
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="text-sm text-primary-600 hover:text-primary-500"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;