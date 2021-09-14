import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { NoMatchPage } from "../../pages/NoMatchPage";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { Profile } from "../../pages/Profile";
import { Lesson8 } from "../../pages/Lesson8";
import { Chates } from "../../pages/Chates";
import { getIsAuth, initAuthAction } from '../../store/profile';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import { PublicRoute } from '../../hocs/PublicRoute';
import { initChatesTracking } from "../../store/chates";

export const Routes  = ({ classes }) => {
    const isAuth = useSelector(getIsAuth);
    const prevIsAuth = useRef(isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth !== prevIsAuth.current) {
            dispatch(initChatesTracking)
        }
    }, [isAuth])

    useEffect(() => {
        dispatch(initAuthAction)
    }, [])

    return (
        <Switch>
            <PublicRoute authenticated={isAuth} exact path="/">
                <Home classes={ classes } />
            </PublicRoute>
            <PublicRoute authenticated={isAuth} exact path="/home">
                <Home classes={ classes } />
            </PublicRoute>
            <PublicRoute authenticated={isAuth} exact path="/login">
                <Login classes={ classes } />
            </PublicRoute>
            <PublicRoute authenticated={isAuth} exact path="/signup">
                <SignUp classes={ classes } />
            </PublicRoute>
            <PrivateRoute authenticated={isAuth} exact path="/chates">
                <Chates classes={ classes } />
            </PrivateRoute>
            <PrivateRoute authenticated={isAuth} exact path="/chates/:chatId">
                <Chates classes={ classes } />
            </PrivateRoute>
            <PrivateRoute authenticated={isAuth} exact path="/lesson8">
                <Lesson8 classes={ classes } />
            </PrivateRoute>
            <PrivateRoute authenticated={isAuth} exact path="/profile">
                <Profile classes={ classes } />
            </PrivateRoute>
            <Route component={ NoMatchPage } />
        </Switch>
    );
};