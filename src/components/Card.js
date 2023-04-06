


const Card = (props) => {
  return (
    <div 
      style={{
        display: "flex",
        height: "330px",
        width: "300px",
        margin: "10px",
        backgroundImage: "url(" + props.card.backgroundimage + ")",
        border: "0",
        borderRadius: "6px",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
      }}>
        <strong style={PrimeStyle}>prime</strong>
        <span style={InvisibleContainer}></span>
        <div style={MiddleTextContainer}>
          <p 
            style={{
              color:"grey", 
              margin: "0 5px 0 15px"
            }}>Ends in</p>
          <p 
            style={{
              color:"white"
            }}>{props.card.remainingtime}</p>
        </div>
        <div style={BottomTextContainer}>
          <p 
            style={{
              fontSize: "13px",
              color:"grey", 
              padding:"20px 0 0 20px", 
              margin: "0"
            }}>{props.card.game}</p>
          <strong 
            style={{
              color:"white", 
              padding: "0 0 30px 20px", 
              margin : "0"
            }}>{props.card.product}</strong>
          <br></br>
          <button style= {ButtonStyle}value={"Claim"}>Claim</button>
        </div>
    </div>
  )
}

const PrimeStyle = {
  margin: "0",
  padding: "0",
  display: "flex",
  justifyContent: "center",
  height: "20px",
  lineHeight: "20px",
  width: "50px",
  backgroundColor: "cornflowerblue",
  border: "0",
  borderRadius: "5px 10px 10px 0px",
  fontSize: "14px"
}
const MiddleTextContainer = {
  display: "flex",
  fontSize: "10px",
  height: "40px",
  width: "300px",
  backgroundColor: "darkslategray",
  alignItems: "center"
}
const InvisibleContainer = {
  height: "140px"
}

const BottomTextContainer = {
  height: "128px",
  backgroundColor:"black",
  border: "0",
  borderRadius: "0 0 5px 5px"
}

const ButtonStyle = {
  height: "30px",
  width: "50px",
  backgroundColor: "mediumslateblue", 
  border: "0", 
  borderRadius: "3px",
  color: "white",
  margin: "20px",
  fontSize: "12px"
}


export default Card
