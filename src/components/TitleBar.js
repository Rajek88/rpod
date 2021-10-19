import React from "react";

const TitleBar = ({ pageName }) => {
  return (
    <div style={styles.titleBar}>
      <p style={styles.para}>{pageName}</p>
      <img
        style={styles.battery}
        src="https://cdn-icons-png.flaticon.com/512/188/188092.png"
        alt="battery full"
      ></img>
    </div>
  );
};

export default TitleBar;

const styles = {
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 0 0 0",
    backgroundImage: "linear-gradient(0deg, #E6EEF8, transparent)",
    borderBottom: "1px solid #6c757d",
    // padding: "2px 5px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // textAlign: "center",
  },
  para: {
    padding: 0,
    textAlign: "center",
    // height: "100%",
    marginLeft: "10px",
    // marginTop: '1',
    fontWeight: "bold",
    // border: "1px solid green",
    marginBottom: "0px",
  },
  battery: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
    // border: "1px solid green",
  },
};
