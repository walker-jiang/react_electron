import React, {Component} from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

export default class Index extends Component {
  render() {
    return (
      <Window>
			登陆吧
      </Window>

    );
  }
}
/* 将登录窗总是在窗体中间*/
const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #006699;
  width: 100%;
  height: 100vh;
`;
/*
@作者：姜中希
@日期：2018-08-05
@描述：登录所涉及的组件（登录i、找回密码、绑定、初始化设置）路由容器
*/
