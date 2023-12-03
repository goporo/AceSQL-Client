import { useDispatch } from "react-redux";
import { loginSuccess, logoutSuccess } from "../app/authSlice";
import { LOCAL_STORAGE } from "../utils/storageConstants";


const authService = {
    handleLogin: (dispatch, user, token) => {
        localStorage.setItem(LOCAL_STORAGE.JWT_TOKEN, token);

        // auto remember
        localStorage.setItem(LOCAL_STORAGE.REMEMBER_ME, true);

        dispatch(loginSuccess());
    },
    handleAutoLogin: async (dispatch) => {
        dispatch(loginSuccess());
    },
    handleLogout: (dispatch) => {
        localStorage.removeItem(LOCAL_STORAGE.REMEMBER_ME);
        localStorage.removeItem(LOCAL_STORAGE.JWT_TOKEN);
        dispatch(logoutSuccess());

    },

    getToken: () => {
        return localStorage.getItem(LOCAL_STORAGE.JWT_TOKEN);
    },

    verifyAccessTokenRequest: async () => {
        if (!localStorage.getItem(LOCAL_STORAGE.JWT_TOKEN)) {
            return;
        }
        return 1;
    }
};

export default authService;
