import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable'; // 加载时进行模块分离
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
const loadingComponent = () => (<div>Loading...</div>);
const Layout = Loadable({
  loader: () => import('./container/layout'),
  loading: loadingComponent,
});
// import Login from './container/login';
const Login = Loadable({
  loader: () => import('./container/login'),
  loading: loadingComponent,
});
const App = () => (
  	<BrowserRouter>
	    <Switch>
        <Route path='/' render={()=><Redirect to="/login"/>} exact></Route>
	    	<Route path='/login' component={Login}></Route>
        <Route path='/layout' component={Layout} ></Route>
	    </Switch>
  	</BrowserRouter>
);
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
if (module.hot) {
  module.hot.accept();
}
/*
@作者：姜中希
@日期：2018-06-05
@描述：入口文件，定义了根路由，引入了根组件
*/
