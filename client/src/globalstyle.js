import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Aleo');
 
  body {
    padding: 0;
    margin: 0;
    font-family: 'Aleo', sans-serif;
    background-color: #f1f2f4;
  }

  .react-datepicker-wrapper {
    margin: 0 auto;
    cursor: pointer;
    border-right: none;
    position: relative;
    height: 33px;
    width: 95%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #d8d9db;
  }

  .react-datepicker__input-container {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  .react-datepicker__input-container > input:first-child {
      cursor: pointer;
      padding: 0;
      height: 100%;
      width: 100%;
      border-radius: 5px;
      &:hover{
        border-bottom: 1px solid #da3743;
      }
    }
  }

  .react-datepicker__day {
    border: 2px solid white;
    &:hover{
      border: 2px solid #da3743;
    }
  }

  .react-datepicker__day--selected {
    background-color: #da3743 !important;
  }

`;

export default GlobalStyle;