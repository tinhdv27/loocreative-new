import React from "react";
import "./App.scss";
import RoutesPage from "./Components/Routers/RoutesPage";

function App() {
  return (
    <div className="App">
      {/* <select onChange={onchange}>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select> */}
      {/* <h1>{t("welcome")}</h1> */}
      {/* <Trans>sample</Trans> */}
      <RoutesPage />
    </div>
  );
}

export default App;
