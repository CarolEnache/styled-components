import React, { Component } from 'react';
import styled, {keyframes, ThemeProvider} from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding:4em;
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

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const StyledCounter = styled.div`
  padding: 5rem;
  width: 100%;
  background-color: #a2b9bc;
`;

const Paragraph = styled.p`
  font-size: 3rem;
`;

const InputAttrs = styled.input.attrs({
  type: 'password',
  margin: props => props.size || '1rem',
  padding: props => props.size || '1rem'
})`
  color: palevioletred;
  font-size: 1rem;
  border: 2px solid palevioletred;
  borde-radius: 3px;
  margin: ${props => props.margin};
  padding ${props => props.padding};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
    display: inlile-block;
    animation: ${rotate360} 2s linear infinite;
    padding 2rem 1rem;
    font-size: 2.2rem;
`;

const ThemedButton = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

ThemedButton.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
};

const theme = {
  main: 'mediumseagreen'
}

class App extends Component {
  state = { count: 0 }

  incremet = () => this.setState({ count: this.state.count +1});
  decremet = () => this.setState({ count: this.state.count -1});

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
          <Input defaultValue='with out props' type='text'/>
          <Input defaultValue='with props' type='text' inputColor='rebeccapurple'/>
          <StyledCounter>
            <Paragraph>{this.state.count}</Paragraph>
              <Button onClick={this.incremet}>Increment</Button>
              <Button primary onClick={this.decremet}>Decrement</Button>
          </StyledCounter>
          <InputAttrs placeHolder='A small text input' size='1rem'/>
          <br/>
          <InputAttrs placeHolder='A big text input' size='2.5rem' />
          <Rotate>
            Rotate
          </Rotate>
          <br/>
          <ThemedButton>Normal Button</ThemedButton>
          <ThemeProvider theme={theme}>
            <ThemedButton>Themed Button</ThemedButton>
          </ThemeProvider>
      </div>
    );
  }
}

export default App;
