import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Loadable from 'react-loadable'; // 加载时进行模块分离
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
const loadingComponent = () => (<div>Loading...</div>);
const Layout = Loadable({
  loader: () => import('./container/layout'),
  loading: loadingComponent,
});
const Login = Loadable({
  loader: () => import('./container/login'),
  loading: loadingComponent,
});
const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    useNextVariants: true,
  }
});
const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path='/' render={()=><Redirect to="/Layout"/>} exact></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/layout' component={Layout} ></Route>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
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
