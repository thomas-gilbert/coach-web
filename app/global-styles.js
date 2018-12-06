import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .form-group {
    width: 900px;
    margin: 0 auto;
  }

  .exercise-group {
    border: 1px solid #000;
    overflow: hidden;
    padding: 10px;
  }

  .exercise-item {
    width: 25%;
    float: left;
    margin-bottom: 10px;
  }

  .exercise-item label {
    display: block;
  }

  .exercise-item input {
    border: 1px solid #ccc;
  }
`;

export default GlobalStyle;
