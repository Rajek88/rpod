import React from "react";
import TitleBar from "./components/TitleBar";

class Games extends React.Component {
  render() {
    return (
      <div style={styles.settings}>
        <TitleBar pageName={"Games"} />
        <div style={{ width: "100%", height: "90%" }}>
          <img
            style={styles.image}
            src="https://c.tenor.com/yJOUcNpFxzkAAAAC/super-mario-video-game.gif"
            alt="super-mario"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  settings: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
};

export default Games;
