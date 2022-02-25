import React from 'react';
import Axios from 'axios';
import { Card } from './Card/Card';
import './Lista.css';
export const Lista = () => {
  const [list, setList] = React.useState();

  React.useEffect(() => {
    Axios.get('http://localhost:3001/contatos').then((response) => {
      setList(response.data);
    });
  }, []);
  return (
    <div className="lista--container">
      {typeof list !== 'undefined' &&
        list.map((value) => {
          return (
            <Card
              key={value.id}
              List={list}
              setList={setList}
              name={value.name}
              numero={value.numero}
              id={value.id}
            ></Card>
          );
        })}
    </div>
  );
};
