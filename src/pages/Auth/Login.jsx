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

const Login = () => {
    const [onLoadingSubmit, setOnLoadingSubmit] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            // const response = await axios.post('YOUR_BACKEND_LOGIN_API_URL', data);

            // sample token
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwMTM1OTAwNiwiaWF0IjoxNzAxMzU5MDA2fQ.8_ehOUhNWjR9haBUQnysfmDGAj68ilqCh22-32nBTP8';

            const user = {}

            if (isAccessTokenValid(token)) {
                setTimeout(() => {

                    authService.handleLogin(dispatch, user, token);
                    navigate(ROUTES.Home);
                    setOnLoadingSubmit(false);

                }, 1000);
            }



        } catch (error) {
            console.error('Login failed', error);
        }
    };


    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl mb-6 font-semibold text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        {...register('username', { required: 'Username is required' })}
                        className={`w-full px-3 py-2 border rounded ${errors.username ? 'border-red-500' : ''}`}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: 'Password is required' })}
                        className={`w-full px-3 py-2 border rounded ${errors.password ? 'border-red-500' : ''}`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div className="flex justify-center flex-row">
                    {onLoadingSubmit ? (
                        <UiSpinning></UiSpinning>
                    ) : (
                        <UiButton type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Login
                        </UiButton>)}
                </div>

            </form>
        </AuthWrapper>
    );
};

export default Login;
