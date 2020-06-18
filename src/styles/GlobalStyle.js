// import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    a{
        text-decoration:none;
        color: #191919;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
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
        border: 0;
        font-size: 100%;
        font-family: 'Heebo', sans-serif;
        vertical-align: baseline;
    }
    body {
        line-height: 1.3;
        font-size: 12px;
    }
    ol, ul {
        list-style: none;
    }
    button, input, select, textarea {
        font-size: 100%;
        margin: 0;
        vertical-align: baseline;
    }
    button, input {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        outline: 0;
    }
`;

export default GlobalStyle;
