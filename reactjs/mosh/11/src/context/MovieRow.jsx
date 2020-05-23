import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);

  return (
    <div>
      Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
