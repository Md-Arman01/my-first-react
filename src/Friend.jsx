export default function Friend({frd}){
    const {name, email} = frd
    return (
        <div className="style">
            <h2>name: {name}</h2>
            <p>email: {email}</p>
        </div>
    )
}