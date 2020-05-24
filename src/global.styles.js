import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed', sans-serif;

		@media screen and (max-width: 800px) {
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
`;
