import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getName } from "../redux/slices/nameSlice";
import Card from "./Card";
import cardFive from "../images/card5.png";
import cardFour from "../images/card4.png";
import cardThree from "../images/card3.png";
import cardTwo from "../images/card2.png";
import cardOne from "../images/card1.png";

const Cards = () => {
  const dispatch = useDispatch();

  const { cardList, activeObj } = useSelector((state) => state.cards);

  return (
    <>
      <div>
        <h2 className="active-card-h2">Active Card</h2>
        <div>
          {activeObj === cardList[0].id ? (
            <div className="activeCard4">
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
              <p
                className="activeCardNam1"
                style={{ textTransform: "uppercase" }}
              >
                {cardList[0].cardHolderFirst} {cardList[0].cardHolderLast}
              </p>
              <p className="activeCardMonth1"> {cardList[0].validMonth}</p>
              <p className="activeCardYear1"> {cardList[0].validYear}</p>
              <p className="activeCardCvc1">{cardList[0].cvc}</p>
            </div>
          ) : activeObj === cardList[1].id ? (
            <div className="activeCard3">
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
              <p
                className="activeCardNam2"
                style={{ textTransform: "uppercase" }}
              >
                {cardList[1].cardHolderFirst} {cardList[1].cardHolderLast}
              </p>
              <p className="activeCardMonth2"> {cardList[1].validMonth}</p>
              <p className="activeCardYear2"> {cardList[1].validYear}</p>
              <p className="activeCardCvc2">{cardList[1].cvc}</p>
            </div>
          ) : activeObj === cardList[2].id ? (
            <div className="activeCard2">
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
              <p
                className="activeCardNam3"
                style={{ textTransform: "uppercase" }}
              >
                {cardList[2].cardHolderFirst} {cardList[2].cardHolderLast}
              </p>
              <p className="activeCardMonth3"> {cardList[2].validMonth}</p>
              <p className="activeCardYear3"> {cardList[2].validYear}</p>
              <p className="activeCardCvc3">{cardList[2].cvc}</p>
            </div>
          ) : activeObj === cardList[3].id ? (
            <div className="activeCard1">
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
              <p
                className="activeCardNam4"
                style={{ textTransform: "uppercase" }}
              >
                {cardList[3].cardHolderFirst} {cardList[3].cardHolderLast}
              </p>
              <p className="activeCardMonth4"> {cardList[3].validMonth}</p>
              <p className="activeCardYear4"> {cardList[3].validYear}</p>
              <p className="activeCardCvc4">{cardList[3].cvc}</p>
            </div>
          ) : null}
        </div>
        <h2 className="inactive-card-h2">Inactive Cards</h2>
        {cardList.length <= 3 ? (
          <Link to={"/addCard"}>
            <button
              className="add-card-button"
              onClick={() => {
                dispatch(getName());
              }}
            >
              Add a new card
            </button>
          </Link>
        ) : (
          <p className="wallet-full-p">
            Your wallet have the maximum amount of four cards.
          </p>
        )}
        {cardList.map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} activeObj={activeObj} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
