import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
body {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 400;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
textarea {
  font-family: 'Noto Sans KR', sans-serif;
  outline: none;
}
`;
export default GlobalStyle;
