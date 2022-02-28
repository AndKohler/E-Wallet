import CardInfo from "./CardInfo";
const Card = (props) => {
  console.log(props.card);
  console.log(props.activeObj);

  return (
    <>
      {props.activeObj !== props.card.id ? (
        <CardInfo
          cardNumber={props.card.cardNumber}
          cardHolderName={props.card.cardHolderName}
          validMonth={props.card.validMonth}
          validYear={props.card.validYear}
          cvc={props.card.cvc}
          vendor={props.card.vendor}
          id={props.card.id}
          isActive={props.card.isActive}
        />
      ) : null}
    </>
  );
};

export default Card;
