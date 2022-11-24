import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GlobalStyle = createGlobalStyle`

/*======= Imports ======*/
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600&display=swap");

*,*::before,*::after {
				margin: 0;
				padding: 0;
        box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

html {
  scroll-behavior: smooth;
}

html,
body {

  font-family: 'Exo', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	color: #f8f8f8;
	background-color: ${Colors.bodyColor};

	position: relative;
	
}
.btnFloat{

	display: flex;
	place-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	position: fixed;
    bottom: 0;
    right: 0;
	margin: 0 .5rem .5rem 0;
    z-index: 20000;

	button{
		padding: .4rem;
	border: none;
	background-color: ${Colors.vidro};
	border-radius: 50%;

	
	}

	
}

.cicle1,
  .cicle2,
  .cicle3 {
	width: 150px;
    height: 150px;
    background-color: #3d6cfa;

    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -2;
    overflow-x: hidden;
  }
  .cicle1{
   
    top: -2.5rem;
    left: -1.5rem;
  }
  .cicle2{
    top: 16rem;
    right: -6.5rem;
  } 
  .cicle3{
    top: 35rem;
    left: -8.5rem;
  }
  
  
@media screen and (min-width: 968px) {
	h1{
		font-size: 2.25rem;
	}
	h2{
		font-size:1.5rem;
	}
	h3{
		font-size: 1.25rem;
	}
	p{
		font-size: 1rem;
	}
}


`;

export const theme = {
	light: {
		primary: "#0070f3",
	},
	dark: {
		primary: "#0070f3",
	},
};