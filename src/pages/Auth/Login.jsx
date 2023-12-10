import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthWrapper from './AuthWrapper';
import { jwtDecode } from "jwt-decode";
import UiSpinning from '../../components/ui/UiSpinning/UiSpinning';
import UiButton from '../../components/ui/UiButton/UiButton';
import authService from '../../services/authService';
import { ROUTES } from '../../routes/RouterConfig';
import loginimg from '../../assets/images/login-image.png'
import axios from 'axios';
import api from '../../config/axios';

const Login = () => {
    const [onLoadingSubmit, setOnLoadingSubmit] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const isAccessTokenValid = (accessToken) => {
        if (!accessToken) return false;
        const decoded = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;
        // error here - exp is undefined
        const expiresTime = decoded?.exp || 0;

        if (expiresTime < currentTime) {
            return true;
        }

        return true;
    }

    const onSubmit = async (data) => {
        try {
            if (onLoadingSubmit) return;
            setOnLoadingSubmit(true);

            // Send login request to your backend API
            const response = await api.post('/authentication/login', data);

            console.log(response);

            if (response.status !== 200) {
                throw new Error('Login failed');
            }

            const user = response.data;
            const token = user.token;

            if (token) {
                authService.handleLogin(dispatch, user, token);
                navigate(ROUTES.Home);
                setOnLoadingSubmit(false);
            }



        } catch (error) {
            console.error('Login failed', error);
        }

        finally {
            // This block will be executed whether an error occurred or not
            // will add error display later
            setOnLoadingSubmit(false);
        }
    };


    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-screen h-screen">
                <div className='flex justify-evenly items-center'>
                <div>
                <h2 className="flex justify-center text-2xl mb-6 font-semibold text-gray-800">Login</h2>
                <h5 className='text-gray-800 mb-3 '>Hi, enter your details to get login to your account !</h5>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder='Enter Email / Phone Number'
                        id="username"
                        {...register('username', { required: 'Username is required' })}
                        className={`w-full px-3 py-2 border rounded ${errors.username ? 'border-red-500' : ''}`}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>
                <div className="mb-4 relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        id="password"
        {...register('password', { required: 'Password is required' })}
        className={`w-full px-3 py-2 border rounded ${
          errors.password ? 'border-red-500' : ''
        }`}
      />
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
    </div>
                <div className='flex justify-end'>
                    <a href='#' className='text-gray-600 mb-4'>Forgot password ?</a>
                </div>
                <div className="flex justify-center flex-row">
                    {onLoadingSubmit ? (
                        <UiSpinning></UiSpinning>
                    ) : (
                        <UiButton type="submit" className="bg-indigo-700 text-white px-4 py-2 rounded w-96 h-68">
                            Login
                        </UiButton>)}
                </div>
                </div>
                <div className='items-center'>
                    <img src={loginimg}></img>
                </div>
                </div>
            </form>
        </AuthWrapper>
    );
};

export default Login;
