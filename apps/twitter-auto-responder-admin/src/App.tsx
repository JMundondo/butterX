import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrendList } from "./trend/TrendList";
import { TrendCreate } from "./trend/TrendCreate";
import { TrendEdit } from "./trend/TrendEdit";
import { TrendShow } from "./trend/TrendShow";
import { TwitterAccountList } from "./twitterAccount/TwitterAccountList";
import { TwitterAccountCreate } from "./twitterAccount/TwitterAccountCreate";
import { TwitterAccountEdit } from "./twitterAccount/TwitterAccountEdit";
import { TwitterAccountShow } from "./twitterAccount/TwitterAccountShow";
import { AutoResponseList } from "./autoResponse/AutoResponseList";
import { AutoResponseCreate } from "./autoResponse/AutoResponseCreate";
import { AutoResponseEdit } from "./autoResponse/AutoResponseEdit";
import { AutoResponseShow } from "./autoResponse/AutoResponseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"TwitterAutoResponder"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Trend"
          list={TrendList}
          edit={TrendEdit}
          create={TrendCreate}
          show={TrendShow}
        />
        <Resource
          name="TwitterAccount"
          list={TwitterAccountList}
          edit={TwitterAccountEdit}
          create={TwitterAccountCreate}
          show={TwitterAccountShow}
        />
        <Resource
          name="AutoResponse"
          list={AutoResponseList}
          edit={AutoResponseEdit}
          create={AutoResponseCreate}
          show={AutoResponseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
