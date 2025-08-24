export default function({oldPrice, newPrice}) {
    let oldStyle = {
        textDecorationLine : "Line-through"
    }

    let newStyle = {
        fontWeight : "bold"
    }

    let styles = {
        backgroundColor : "#e0c367",
        height : "30px",
        width : "200px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",
    }

    return (
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>

    )
}