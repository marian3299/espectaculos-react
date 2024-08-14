const Message = ({name, email}) => {
  return (
    <div>
        <h2>Gracias, {name}</h2>
        <h2>Te enviamos tus entradas a: {email}</h2>
    </div>
  )
}

export default Message