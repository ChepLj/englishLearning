import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import "./theme/variables.css";
import { createContext, useEffect, useState } from "react";
import getDataFromDB from "./api/getDataFromDB";
import { removeTooltip } from "./functions/removeTooltip";

setupIonicReact();

const MAIN_CONTEXT = createContext({});

const App: React.FC = () => {
  
  const [refresh, setRefresh] = useState<number>(0);
  const [data, setData] = useState<any>();
  const [bucket, setBucket] = useState<string>('/');
 
  useEffect(() => {
    if (bucket) {
      const callback = (disPatch: any) => {
        if (disPatch.type === "SUCCESSFUL") {
          // console.log("🚀 ~ callback ~ disPatch:", disPatch)
          setData(disPatch.payload);
        } else {
          alert("cant get data from sever");
        }
      };
      getDataFromDB(bucket, callback);
    }
  }, [refresh]);




  return (
    <IonApp>
      <MAIN_CONTEXT.Provider value={{ refresh, setRefresh, setBucket , data}}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/folder/Create" />
              </Route>
              <Route path="/folder/:name" exact={true}>
                <Page />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </MAIN_CONTEXT.Provider>
    </IonApp>
  );
};

export  {App, MAIN_CONTEXT};
