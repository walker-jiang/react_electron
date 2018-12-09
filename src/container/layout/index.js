import React, {Component} from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class Index extends Component {
  
  render() {
    return (
      <h1>主框架</h1>
    );
  }
}

/*
@作者：姜中希
@日期：2018-06-05
@描述：布局文件，包含头部导航，以及以下主要内容
*/
export default withRouter(Index);
