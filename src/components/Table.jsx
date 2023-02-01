const Table = ({value}) => {

  return (
    <div>
      <h1>Results</h1>
        <table>	
          <tbody>
            {value.map((item, index) => (
              <tr key={index} >
                <td style={{ width: 20, border: '1px solid black', textAlign: 'center'}}>
                  {item.id}
                </td>
                <td style={{ width: 500, border: '1px solid black' }}>
                  {item.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>	
    </div>
  )
}

export default Table
