import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cardFive from "../images/card5.png";
import cardFour from "../images/card4.png";
import cardThree from "../images/card3.png";
import cardTwo from "../images/card2.png";
import cardOne from "../images/card1.png";

const Cards = () => {
  const { cardList, activeObj } = useSelector((state) => state.cards);

  console.log(cardList);
  return (
    <>
      <div>
        <h2>This card is Active</h2>
        {activeObj === cardList[0].id ? (
          <div className="card4">
            {cardList[0].vendor === "blank-bank" ? (
              <img className="cardImg" src={cardFive} alt="" width="450px" />
            ) : cardList[0].vendor === "Hederlig Banking" ? (
              <img className="cardImg" src={cardFour} alt="" width="450px" />
            ) : cardList[0].vendor === "KANO" ? (
              <img className="cardImg" src={cardThree} alt="" width="450px" />
            ) : cardList[0].vendor === "FlodInvest" ? (
              <img className="cardImg" src={cardTwo} alt="" width="450px" />
            ) : cardList[0].vendor === "AK Banking" ? (
              <img className="cardImg" src={cardOne} alt="" width="450px" />
            ) : null}

            <p className="activeCardNum1"> {cardList[0].cardNumber}</p>
            <p className="activeCardNam1">{cardList[0].cardHolderName}</p>
            <p className="activeCardMonth1"> {cardList[0].validMonth}</p>
            <p className="activeCardYear1"> {cardList[0].validYear}</p>
            <p className="activeCardcvc1">{cardList[0].cvc}</p>
            {/* <p>{cardList[0].vendor}</p> */}
          </div>
        ) : activeObj === cardList[1].id ? (
          <div className="card3">
            {cardList[1].vendor === "blank-bank" ? (
              <img className="cardImg" src={cardFive} alt="" width="450px" />
            ) : cardList[1].vendor === "Hederlig Banking" ? (
              <img className="cardImg" src={cardFour} alt="" width="450px" />
            ) : cardList[1].vendor === "KANO" ? (
              <img className="cardImg" src={cardThree} alt="" width="450px" />
            ) : cardList[1].vendor === "FlodInvest" ? (
              <img className="cardImg" src={cardTwo} alt="" width="450px" />
            ) : cardList[1].vendor === "AK Banking" ? (
              <img className="cardImg" src={cardOne} alt="" width="450px" />
            ) : null}

            <p className="activeCardNum2"> {cardList[1].cardNumber}</p>
            <p className="activeCardNam2">{cardList[1].cardHolderName}</p>
            <p className="activeCardMonth2"> {cardList[1].validMonth}</p>
            <p className="activeCardYear2"> {cardList[1].validYear}</p>
            <p className="activeCardcvc2">{cardList[1].cvc}</p>
            {/* <p> {cardList[1].vendor}</p> */}
          </div>
        ) : activeObj === cardList[2].id ? (
          <div className="card2">
            {cardList[2].vendor === "blank-bank" ? (
              <img className="cardImg" src={cardFive} alt="" width="450px" />
            ) : cardList[2].vendor === "Hederlig Banking" ? (
              <img className="cardImg" src={cardFour} alt="" width="450px" />
            ) : cardList[2].vendor === "KANO" ? (
              <img className="cardImg" src={cardThree} alt="" width="450px" />
            ) : cardList[2].vendor === "FlodInvest" ? (
              <img className="cardImg" src={cardTwo} alt="" width="450px" />
            ) : cardList[2].vendor === "AK Banking" ? (
              <img className="cardImg" src={cardOne} alt="" width="450px" />
            ) : null}

            <p className="activeCardNum3"> {cardList[2].cardNumber}</p>
            <p className="activeCardNam3">{cardList[2].cardHolderName}</p>
            <p className="activeCardMonth3"> {cardList[2].validMonth}</p>
            <p className="activeCardYear3"> {cardList[2].validYear}</p>
            <p className="activeCardcvc3">{cardList[2].cvc}</p>
            {/* <p>{cardList[2].vendor}</p> */}
          </div>
        ) : activeObj === cardList[3].id ? (
          <div className="card1">
            {cardList[3].vendor === "blank-bank" ? (
              <img className="cardImg" src={cardFive} alt="" width="450px" />
            ) : cardList[3].vendor === "Hederlig Banking" ? (
              <img className="cardImg" src={cardFour} alt="" width="450px" />
            ) : cardList[3].vendor === "KANO" ? (
              <img className="cardImg" src={cardThree} alt="" width="450px" />
            ) : cardList[3].vendor === "FlodInvest" ? (
              <img className="cardImg" src={cardTwo} alt="" width="450px" />
            ) : cardList[3].vendor === "AK Banking" ? (
              <img className="cardImg" src={cardOne} alt="" width="450px" />
            ) : null}

            <p className="activeCardNum4"> {cardList[3].cardNumber}</p>
            <p className="activeCardNam4">{cardList[3].cardHolderName}</p>
            <p className="activeCardMonth4"> {cardList[3].validMonth}</p>
            <p className="activeCardYear4"> {cardList[3].validYear}</p>
            <p className="activeCardcvc4">{cardList[3].cvc}</p>
            {/* <p>{cardList[3].vendor}</p> */}
          </div>
        ) : null}

        {cardList.map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} activeObj={activeObj} />
            </div>
          );
        })}
        {cardList.length <= 3 ? (
          <Link to={"/add/"} className="button_1">
            <button className="btn_1">Add a new card</button>
          </Link>
        ) : (
          <p>
            Your wallet have the maximum amount of 4 cards. Remove cards to add
            a new one.
          </p>
        )}
      </div>
    </>
  );
};
export default Cards;
