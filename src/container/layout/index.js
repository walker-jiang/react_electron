import React, {Component} from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import background_wall from './imgs/background_wall.jpg';
import { withRouter } from 'react-router-dom';

class Index extends Component {

  render() {
    return (
      <Container>
        <Header>
          <SpecAppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Open drawer">
                +
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                小笺
              </Typography>
              <SpecInputBase
                placeholder="通过关键词搜索"
              />
            </Toolbar>
          </SpecAppBar>
        </Header>
        <Body>
          <SpecCard>
            <CardContent>
              完成主页面的
            </CardContent>
            <CardFooter>
              2018-12-9 19:49
            </CardFooter>
          </SpecCard>
          <SpecCard>
            <CardContent>
              完成主页面的设计，实现主要的功能，争取更好的用户体验，一款很棒的APP，开发登录功能，与手机APP交互，可以同步通知，查看记忆相册
            </CardContent>
            <CardFooter>
              2018-12-9 19:49
            </CardFooter>
          </SpecCard>
          <SpecCard>
            <CardContent>
              完成主页面的
            </CardContent>
            <CardFooter>
              2018-12-9 19:49
            </CardFooter>
          </SpecCard>
        </Body>
      </Container>
    );
  }
}
const Container = styled.div`
  background: url(${background_wall});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 455px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px;
`;
const SpecAppBar = styled(AppBar)`
  &&& {
    background-color: #4a333f70 !important;
  }
`;
const SpecInputBase = styled(InputBase)`
  margin-left: 60px;
  & input {
    width: 200px;
    border-bottom: 1px solid #a56363;
  }
  & input: focus{
    width: 250px;
    border-bottom: 1px solid #a56363;
  }
`;
const SpecCard = styled(Card)`
  &&& {
    width: 120px;
    height: 120px;
    background-color: yellow;
    font-size: 12px;
    color: #4c1818;
    font-family: cursive;
  }
`;
const CardContent = styled.div`
  width: 120px;
  height: 98px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  text-indent: 16px;
  overflow: hidden;
  line-height: 14px;
`;
const CardFooter = styled.div`
  text-align: right;
  padding: 3px 5px;
  border-top: 1px solid gray;
`;
/*
@作者：姜中希
@日期：2018-06-05
@描述：布局文件，包含头部导航，以及以下主要内容
*/
export default withRouter(Index);
