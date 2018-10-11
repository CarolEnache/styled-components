import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  paddingL 4em;
  background: papyawhip;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const AnchorTagButton = styled(Button)`
  color: blue;
  border-color: blue;
`;

const Link = ({className, children}) => (
  <a className={className} href='/'>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold; 
`;

const ReverseButton = props => <button {...props} children={props.children.split('').reverse()}/>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Wrapper>
          <Title>Let's Rock &amp; Roll</Title>
        </Wrapper>
        < Button>Normal</Button>
        < Button primary>Primary</Button>
        <TomatoButton>Tomato Button</TomatoButton>
        <AnchorTagButton as='a' href='https://www.google.co.uk'>This button has Anchor Tag</AnchorTagButton>
        <AnchorTagButton as={ReverseButton}>This button has Anchor Tag</AnchorTagButton>
        <br/>
        <Link>Unstyled link</Link>
        <StyledLink>Styled link</StyledLink>


      </div>
    );
  }
}

export default App;
