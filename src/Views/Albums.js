import React from "react";
import TitleBar from "../components/TitleBar";

// the album component with all its styles at bottom

class Albums extends React.Component {
  render() {
    return (
      <div style={styles.artistsContainer}>
        <TitleBar pageName={"Albums"} />

        <div style={styles.info}>
          <div style={styles.imageContainer}></div>

          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>
              rPod.js{" "}
              <span>
                <img
                  style={styles.image}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lauv_2019_by_Glenn_Francis.jpg/1200px-Lauv_2019_by_Glenn_Francis.jpg"
                  alt="music"
                />
              </span>
            </h4>
            <p style={{ marginBottom: "0", marginLeft: "10px" }}> Lonely</p>
            <p style={{ marginLeft: "10px" }}>Luav</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    height: "65%",
    width: "35%",
    borderRadius: "50%",
    backgroundImage: `url('https://avatars.githubusercontent.com/u/51524384?v=4')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignSelf: "center",
  },
  image: {
    width: "2rem",
    height: "2rem",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info2: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subInfo: {
    alignSelf: "center",
  },
};

export default Albums;
