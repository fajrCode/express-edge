import * as AuthService from './auth.service.js';

export const login = async (req, res, next) => {
    try {
        const data = await AuthService.login();
        console.log(data);
        res.render('pages/auth/login', { login: data.result, foods: data.foods });
    } catch (error) {
        next(error)
    }
};