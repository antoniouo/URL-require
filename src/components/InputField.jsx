const InputField = ({value, handleChange, handleClick, removeField, addField}) => {
  
  return (
    <div style={{marginLeft: 50}}>
      <h1>URLs</h1>
        <div style={{ width: 400 }}>
          {value.map((item, index) => (
            <div key={index} style={{ width: 400 }}>
              {item.id + " "}
              <input
                style={{ width: 200 }}
                value={item.url}
                onChange={(e) => handleChange(e.target.value, index)}
              />{" "}
              <button onClick={() => handleClick(index, item.url)}>
                Get data
              </button>{" "}
              <button onClick={() => removeField(index)}>Remove field</button>
              {item.errorMessage}
            </div>
          ))}
        </div>
        <br />
        <br />

        <div>
          <button onClick={addField}>Add Field</button>
        </div>
    </div>
  )
}

export default InputField