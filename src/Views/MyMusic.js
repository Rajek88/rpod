import React from "react";
import TitleBar from "../components/TitleBar";

// the MyMusic component with all its styles at bottom

class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: true,
    };
  }

  // When component mounts start playing music asap

  componentDidMount() {
    let self = this;
    self.props.audio.play();

    self.props.audio.addEventListener("timeupdate", function () {
      if (self.state.isMounted) {
        var pos = self.props.audio.currentTime / self.props.audio.duration;
        self.updateTime();
        let fill = document.getElementById("fill");
        console.log(fill);
        if (fill !== null) {
          fill.style.width = pos * 100 + "%";
        }
      }
    });
  }
  // to update time
  updateTime = () => {
    this.setState({
      audio: this.props.audio,
    });
  };

  componentWillUnmount() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.isMounted = false;
  }

  render() {
    let audio = this.props.audio;
    return (
      <div style={styles.myMusicContainer}>
        <TitleBar pageName={"Now Playing"} />

        <div style={styles.info}>
          <img
            style={styles.image}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lauv_2019_by_Glenn_Francis.jpg/1200px-Lauv_2019_by_Glenn_Francis.jpg"
            alt="luav"
          ></img>
          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>Modern Loneliness</h4>
            <p style={{ marginBottom: "0" }}>Luav</p>
          </div>
        </div>

        <div style={styles.statusBar}>
          <p style={styles.currTime}>
            {audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}
          </p>
          <div style={styles.seekBar}>
            <div style={styles.fill} id="fill"></div>
          </div>
          <p style={styles.dur}>
            {audio != null ? Math.floor(audio.duration) : "0 / 0"}
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  myMusicContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: "75%",
    // width: "45%",
    alignSelf: "center",
    marginLeft: "20px",
    borderRadius: "10px",
    marginRight: "10px",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statusBar: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  subInfo: {
    alignSelf: "center",
  },
  seekBar: {
    width: "70%",
    height: "20%",
    border: "1px solid grey",
    cursor: "pointer",
    alignSelf: "center",
    display: "flex",
  },
  fill: {
    height: "100%",
    backgroundColor: "royalblue",
  },
  currTime: {
    margin: "0",
    alignSelf: "center",
  },
  dur: {
    margin: "0",
    alignSelf: "center",
  },
};

export default MyMusic;
