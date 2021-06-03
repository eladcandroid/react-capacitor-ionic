import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRouterLink,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupConfig,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { menuController } from "@ionic/core";
import About from "./About";

setupConfig({
  rippleEffect: true,
});

ReactDOM.render(
  <React.StrictMode>
    <IonApp>
      <IonMenu side="start" menuId="first" contentId="app-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink={"/"}>Home</IonItem>
              <IonItem routerLink={"/about"}>About</IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Left side menu toggle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonReactRouter>
        <IonRouterOutlet id="app-content">
          <Route path="/" component={App} />
          <Route path="/about" component={About} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
