export default function Singers (singer){
    const divStyle = {
        border: '2px solid red',
        borderRadius: '20px',
        padding: '15px',
        margin: '10px'
    }
    console.log(singer);
    return (
        <div style={divStyle}>
            <h2>name: {singer.name}</h2>
            <h2>age: {singer.age}</h2>
            <h2>home: {singer.home}</h2>

        </div>
    )
}