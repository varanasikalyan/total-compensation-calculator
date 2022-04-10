import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ForgotPassword from "../auth/ForgotPassword";
import NotFound from '../common/notfound/NotFound'
import requireAuth from '../auth/JWTAuthentication';
import UserProfile from '../auth/UserProfile';
import SignOut from '../auth/SignOut';
import Loading from "../common/loading/Loading";

const Routes = () => (
	<div className='page-wrap'>
		<Switch>
			<Route exact path='/' component={Dashboard} />
			<Route exact path='/signin' component={SignIn} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/forgot' component={ForgotPassword} />
			<Route exact path='/loading' component={Loading} />

			<Route exact path='/signout' component={requireAuth(SignOut)} />
			<Route exact path='/profile' component={ requireAuth(UserProfile) } />
			
			<Route path='*' component={ NotFound } />	
		</Switch>
	</div>
);

export default Routes;
