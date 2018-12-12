import React, {Component} from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'components/self/icon';
import { Link } from 'react-router-dom';
import background_wall from '../imgs/background_wall.jpg';

export default class NoteEdit extends Component {
  handleClick = () => {};
  backToList = () => {};
  render() {
    return (
      <Container>
        <Return
          aria-label="Add"
          size="small"
          aria-haspopup="true"
          component={Link}
          to="/noteList"
        >
          <Icon type='left' width='25px' height='25px'/>
        </Return>
        <Title>
          <TextField
          id="standard-bare"
          placeholder='伟大的周计划应该有名称'
          margin="normal"
          />
        </Title>
        <Content>
          <SpecTextField
          label="周一"
          placeholder=""
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          />
          <SpecTextField
          label="周二"
          placeholder=""
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          />
          <SpecTextField
          label="周三"
          placeholder=""
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          />
          <SpecTextField
          label="周四"
          placeholder=""
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          />
          <SpecTextField
          label="周五"
          placeholder=""
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          />
        </Content>
        <SpecFab
          aria-label="Add"
          size="small"
          aria-haspopup="true"
          onClick={this.handleClick}>
          <AddIcon />
        </SpecFab>
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
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  margin: 8px;
`;
const SpecTextField = styled(TextField)`
  &&& {
  }
`;
const SpecFab = styled(Fab)`
  &&&{
    background-color: #e0e0e000;
    color: white;
    float: right;
    margin-right: 20px;
  }
`;
const Return = styled(SpecFab)`
  &&& {
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    padding-top: 6px;
    position: fixed;
  }
`;
