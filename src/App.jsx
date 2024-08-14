import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer.jsx";
import Login from "./components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.jsx";
import ChatArea from "./components/ChatArea.jsx";
import Users from "./components/Users.jsx";
import CreateGroups from "./components/CreateGroups.jsx";
import Groups from "./components/Groups.jsx";
import { useSelector } from "react-redux";

function App() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"App" + (lightTheme ? "" : "-dark")}>
      {/* <MainContainer /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat/:_id" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;