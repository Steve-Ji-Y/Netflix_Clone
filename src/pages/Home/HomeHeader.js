import React from "react";
import Header from "../../components/Header/Header";
import SignIn from "../../components/SignIn/SignIn";
import Story from "./Story/index"

const HomeHeader = () => {
  return (
    <>
      <Header>
        <SignIn></SignIn>
      </Header>
      <Story></Story>
    </>
  )
}


export default HomeHeader
