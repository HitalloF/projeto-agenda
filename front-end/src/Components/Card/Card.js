import React from 'react';
import FormDialog from '../Dialog/Dialog';
import './card.css';
export const Card = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        numero={props.numero}
        list={props.list}
        setList={props.setList}
        id={props.id}
      />
      <div className="card" onClick={() => handleClickCard()}>
        <h1 className="card_name">{props.name}</h1>
        <div className="card_opt">
          <p className="card_numero">{props.numero}</p>
        </div>
      </div>
    </>
  );
};
