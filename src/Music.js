import React from "react";
import { ListGroup } from "react-bootstrap";
import TitleBar from "./components/TitleBar";

class Music extends React.Component {
  render() {
    return (
      <div style={styles.musicScreen} id="music-screen">
        <div style={styles.menuList} id="menu-list">
          <TitleBar pageName={"Music"} />
          <ListGroup style={{ borderRadius: "0" }}>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "MyMusic" ? "active" : ""}
            >
              My Music{" "}
              {this.props.activeItem === "MyMusic" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Artists" ? "active" : ""}
            >
              Artists{" "}
              {this.props.activeItem === "Artists" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}

const styles = {
  musicScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
  },
  menuList: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1",
  },
  imageContainer: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    backgroundImage:
      'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0",
  },
};

export default Music;
