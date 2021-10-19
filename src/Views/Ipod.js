import React from "react";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import sound from "../assets/music/modernLone.mp3";

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying",
      activePage: "Home",
      enter: 0,
      play: true,
    };
  }

  // The algorithm to handle rotation of wheel

  rotateWheel = () => {
    var containerElement = document.getElementById("inner-container");
    var activeRegion = new ZingTouch.Region(containerElement);
    // var childElement = document.getElementById('inner-container');
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;

    // check how the wheel is getting rotated and add actions into the ipod correspondingly
    if (self.state.enter < 2) {
      activeRegion.bind(containerElement, "rotate", function (event) {
        //Perform Operations

        var newAngle = event.detail.distanceFromLast;
        console.log(newAngle);

        if (newAngle < 0) {
          console.log(change);
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Games",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        } else {
          console.log(change);
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Games",
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        }
      });
    } else {
      console.log("Not allowed to enter");
    }
  };

  // to hancdle the page change
  changePage = () => {
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic",
        activePage: this.state.activeItem,
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying",
        activePage: "MyMusic",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem,
      });
    }
  };
  // to handle back to the home screen
  changePageToHomeScreen = () => {
    if (
      this.state.activeItem === "MyMusic" ||
      this.state.activeItem === "Artists"
    ) {
      this.setState({
        activeItem: "Music",
        activePage: "Home",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: "Home",
      });
    }
  };

  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause();
        this.setState({
          play: false,
        });
      } else {
        this.state.audio.play();
        this.setState({
          play: true,
        });
      }
      console.log("toggled");
    }
  };

  // when component mounts start playing song
  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    this.setState({
      audio: audio,
    });
    console.log(this.state);
  }

  // rendering of UI
  render() {
    return (
      <div style={styles.ipodContainer}>
        <audio className="audio-element">
          <source src={sound}></source>
        </audio>

        {/* this is the screen */}
        <Screen
          // send props to screen element
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
          audio={this.state.audio}
        />

        <div
          id="inner-container"
          style={styles.wheel}
          onMouseOver={this.rotateWheel}
        >
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <i
                onClick={this.changePageToHomeScreen}
                style={styles.image}
                className="fas fa-bars"
              ></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              <i style={styles.image} className="fas fa-fast-backward"></i>
              <div
                onClick={this.changePage}
                style={{
                  backgroundImage: "linear-gradient(45deg, #39393B, #39393B)",
                  boxShadow: " inset -6px -6px 16px  , inset 6px  6px 16px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "500px",
                }}
              ></div>
              <i style={styles.image} className="fas fa-fast-forward"></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div onClick={this.toggle} style={styles.playButton}>
              <i
                onClick={this.toggle}
                style={styles.image}
                className="fas fa-play"
              ></i>
              &nbsp;
              <i
                onClick={this.toggle}
                style={styles.image}
                className="fas fa-pause"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//page and its design

const styles = {
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundImage: "radial-gradient(#D9D9D9, #D9D9D9)",
    margin: "4rem auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "30px",
  },
  wheel: {
    width: "180px",
    height: "180px",
    margin: "1rem auto",
    backgroundColor: "#38373A",
    borderRadius: "500px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    height: "32%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    alignSelf: "center",
    fontSize: "15px",
    color: "white",
  },
};

export default Ipod;
