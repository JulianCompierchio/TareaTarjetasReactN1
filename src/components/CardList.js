import Card from "./Card"


const CardList = (props) => {
  return (
    <div>
        <section style={ContainerStyle}>
            {
                props.data.map(item => <Card
                    key ={item.id}
                    card = {item}
                />)
            }
        </section>
    </div>
  )
}

const ContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "darkviolet"
}
export default CardList