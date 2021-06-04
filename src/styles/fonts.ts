import {createGlobalStyle} from "styled-components";

export function fontFace(name: string, src: string, fontWeight: string | number = "normal", fontStyle = "normal"){
  return `
    @font-face {
      font-family: ${name};
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      src: url(${require("./../../public/fonts/" + src + ".ttf").default});
      src: url(${require("./../../public/fonts/" + src + ".eot").default}?#iefix) format("embedded-opentype"),
        url(${require("./../../public/fonts/" + src + ".woff").default}) format("woff"),
        url(${require("./../../public/fonts/" + src + ".ttf").default}) format("truetype");
    }
  `;
};

const GlobalFonts = createGlobalStyle`
  ${fontFace("Poppins", "Poppins/Poppins-Regular")}
  ${fontFace("Poppins Medium", "Poppins/Poppins-Medium", 500)}
  ${fontFace("Poppins SemiBold", "Poppins/Poppins-SemiBold", 600)}
  ${fontFace("Poppins Bold", "Poppins/Poppins-Bold", "bold")}
  
  ${fontFace("Geometria Medium", "Geometria/Geometria-Medium", "500")};
  ${fontFace("Geometria Bold", "Geometria/Geometria-Bold", "bold")};

  body {
    line-height: 1;
    font-family: "Poppins", Arial, sans-serif;
  }
`;

export default GlobalFonts;
