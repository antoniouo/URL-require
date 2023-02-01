import {React, useState} from 'react';
import validator from 'validator';
import axios from 'axios';
import InputField from './components/InputField';
import Table from './components/Table';

const newUrl = {
  id: 1,
  url: "", 
  result: ""
};

export default function App() {
  const [value, setValue] = useState([{ ...newUrl }]);
  const [lastId, setId] = useState(1);

  function handleChange(event, index) {
    const valueNew = [...value];
    valueNew[index].url = event;
    setValue(valueNew);
  }

  function addField() {
    if (value.length < 10) {
      const added = [...value];
      const data = { ...newUrl };
      data.id = lastId + 1;
      added.push(data);
      setId((e) => ++e);
      setValue(added);
    }
  }

  function removeField() {
		if (value.length > 1) {
    setValue(value.filter((item, index) => index !== value.length - 1));
		setId((e) => --e);
		}
  }

	async function handleClick(index, url) {
    if (validator.isURL(url)) {
      await axios
        .get(url)
        .then((response) => {
          if (response.status === 200) {
            const resNew = [...value];
            resNew[index].result = response.headers;
            setValue(resNew);
          }
        })
        .catch(function (error) {
          if (error.response) {
            const resNew = [...value];
            resNew[index].result = error.response.status;
						setValue(resNew);
          }
        });
    } else {
      const resNew = [...value];
      resNew[index].result = "Некорректный URL";
      setValue(resNew);
    }
  }

  return (
    <div style={{display: 'flex'}}>
			<InputField
				value={value}
				handleChange={handleChange}
				handleClick={handleClick}
				removeField={removeField}
				addField={addField}		
			/>   

			<Table
				value={value}
			/>   
    </div>
  );
}
