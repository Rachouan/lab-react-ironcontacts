export const Contact = ({pictureUrl,name,popularity,wonOscar,wonEmmy,removeContact}) => {
    return (
        <tr>
            <td><img src={pictureUrl} alt={`Picture of ${name}`} width="auto" height="150"/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td>{wonOscar && '🏆'}</td>
            <td>{wonEmmy && '🏆'}</td>
            <td align="right"><button onClick={removeContact}>Delete</button></td>
        </tr>
    )
}