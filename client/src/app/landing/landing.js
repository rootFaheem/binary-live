import React from "react";

import Container from "@material-ui/core/Container";
import ChatList from "../user/user";

export default function landing() {
  return (
    <div
      style={{
        background: "#f5f5f5"
      }}
    >
      <Container>
        <ChatList></ChatList>
      </Container>
    </div>
  );
}
