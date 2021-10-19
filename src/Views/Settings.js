import React from "react";
import TitleBar from "../components/TitleBar";

// the Setting component with all its styles at bottom

class Settings extends React.Component {
  render() {
    return (
      <div style={styles.settings}>
        <TitleBar pageName={"Settings"} />
        <div
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* A gif of setting gear rotating infinetly */}
          <img
            style={styles.image}
            src="https://c.tenor.com/eXPpVjeORscAAAAi/brainpull-brainpull-stories.gif"
            alt="setting gif"
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
    width: "80px",
    height: "80px",
    alignSelf: "center",
  },
};

export default Settings;
