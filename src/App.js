import moment from "moment/moment";
import "./assets/style.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import image from "./assets/images/496-200x300.jpg";
export const App = () => {
  return `
  ${Header()}
  <main>
    <h1> Web anh An 132</h1>
    <h2>Bay gio la: ${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    <img src="${image}" /> 
  </main>
  ${Footer()}`;
};
