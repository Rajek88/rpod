import React from "react";
import TitleBar from "../components/TitleBar";

class Artists extends React.Component {
  render() {
    return (
      <div style={styles.artistsContainer}>
        <TitleBar pageName={"Artists"} />

        <div style={styles.info}>
          <div style={styles.imageContainer}></div>

          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>
              rPod.js{" "}
              <span>
                <img
                  style={styles.image}
                  src="https://cdn-icons-png.flaticon.com/512/3659/3659784.png"
                  alt="music"
                />
              </span>
            </h4>
            <p style={{ marginBottom: "0", marginLeft: "10px" }}>
              {" "}
              React Project
            </p>
            <p style={{ marginLeft: "10px" }}>Made by : Rajendra Kulkarni</p>
          </div>
        </div>

        <div style={styles.info2}>
          <h5 style={{ alignSelf: "center" }}>Thanks !!</h5>
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

export default Artists;
