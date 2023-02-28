import React from "react";
import Header from "../../components/Header/Header";
import SignInBtn from "../../components/SignInBtn/SignInBtn";
import Story from "./Story/index"

const HomeHeader = () => {
  return (
    <>
      <Header>
        <SignInBtn></SignInBtn>
      </Header>
      <Story></Story>
    </>
  )
}


export default HomeHeader
