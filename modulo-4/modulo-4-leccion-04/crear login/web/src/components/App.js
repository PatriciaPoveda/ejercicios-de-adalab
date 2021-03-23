// import React, { useState } from "react";
import React from "react";
import Login from "./Login";
// import Header from "./Header";
// import Intranet from "./Intranet";

const App = () => {
  // const [userData, setUserData] = useState("");

  const handlesignIn = (data) => {
    console.log(data);
    // setUserData(data.userName);
  };
  // const renderIntranet = () => {
  //   return (
  //     <>
  //       <Header userData={userData}></Header>
  //       <Intranet></Intranet>
  //     </>
  //   );
  // };
  const renderLogin = () => {
    return (
      <>
        <Login handlesignIn={handlesignIn}></Login>
      </>
    );
  };
  return renderLogin();
  // return userData === "" ? renderLogin() : renderIntranet();
};

export default App;
