import React from 'react';
import Axios from 'axios';
import './Cadastrar.css';
export const Cadastrar = () => {
  const [values, setValues] = React.useState();

  const handleChangeValues = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/cadastro', {
      name: values.name,
      numero: values.numero,
    }).then(() => {});
    window.location.reload();
  };

  return (
    <div className="cadastro--container">
      <div className="registro--">
        <h1>Cadastro</h1>
        <input
          type="text"
          name="name"
          placeholder="Insira o Nome"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="numero"
          placeholder="Insira o Numero"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button className="botao" onClick={() => handleClickButton()}>
          CADASTRAR
        </button>
        <span id="namenull"></span>
      </div>
    </div>
  );
};
