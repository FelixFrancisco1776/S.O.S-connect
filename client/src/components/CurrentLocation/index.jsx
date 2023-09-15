const CurrentLocation = () => {
  const styles = {
    map: {
      height: "800%",
      width: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      
    },
  };
  return (
    <>
      <div id="demo" style={styles.map} className="map m-0">
        
      </div>
    </>
  );
};

export default CurrentLocation;
