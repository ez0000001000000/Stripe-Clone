import { BsFillCreditCardFill } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

import s from "../../styles/payments.module.scss";

export default function Payments() {
  return (
    <div>
      <div className={s.paymentsContainer}>
        <div className={s.paymentsTextContainer}>
          <h2 className={s.heading}>Unified platform</h2>
          <h1 className={s.title}>
            A fully integrated suite of payments products
          </h1>
          <div className={s.textContainer}>
            <p className={s.text}>
              We bring together everything that&apos;s required to build
              websites and apps that accept payments and send payouts globally.
              Stripe&apos;s products power payments for
              <a href="#" className={s.link}>
                online and in- person retailers
              </a>
              ,
              <a href="#" className={s.link}>
                subscriptions businesses
              </a>
              ,
              <a href="#" className={s.link}>
                software platforms and marketplaces
              </a>
              , and everything in between
            </p>
            <p className={s.text}>
              We also help companies{" "}
              <a href="#" className={s.link}>
                beat fraud
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                send invoices
              </a>
              ,
              <a href="#" className={s.link}>
                issue virtual and physical cards
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                reduce friction at checkout
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                get financing
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                manage business spend
              </a>
              , and much more.
            </p>
          </div>
          <button className={s.btn}>
            Start with payments<span className={s.arrow}></span>
          </button>
        </div>
        <div className={s.paymentsFiguresContainer}>
          <div className={s.visaCardContainer}>
            <div className={s.visaCardTop}>
              <p className={s.commutifiHeading}>Commutifi</p>
              <p className={s.zestfulHeading}>Zestful</p>
              <p className={s.postmatesHeading}>Postmates</p>
            </div>
            <div className={s.visaCardMiddle}>
              <img
                src="./postmatesimage.png"
                alt=""
                className={s.postmatesImage}
              />
              <img src="./cardchip.png" alt="" className={s.chip} />
              <img
                src="./commutifyimage.png"
                alt=""
                className={s.commutifiImage}
              />
              <img src="./zestfulimage.png" alt="" className={s.zestfulImage} />
            </div>
            <div className={s.visaCardBottom}>
              <p className={s.commutifiName}>Micaela Ballew</p>
              <p className={s.zestfulName}>Thomas Degry</p>
              <p className={s.postmatesName}>Jane Diaz</p>
              <img src="./visalogo.png" alt="" className={s.visaLogo} />
            </div>
          </div>
          <div className={s.invoiceContainer}>
            <div className={s.invoiceBG}></div>
            <div className={s.invoiceCard}>
              <div className={s.logoContainer}>
                <img src="./slacklogo.png" alt="" className={s.slackLogo} />
                <img
                  src="./onemedicallogo.png"
                  alt=""
                  className={s.oneMedLogo}
                />
                <img src="./udacitylogo.png" alt="" className={s.udacityLogo} />
              </div>
              <h1 className={s.slackHeading}>Invoice from Slack</h1>
              <h1 className={s.oneMedHeading}>Invoice from One Medical</h1>
              <h1 className={s.udacityHeading}>Invoice from Udacity</h1>
              <p className={s.invoiceName}>Billed to Jenny Rosen</p>
              <div className={s.bottomSection}>
                <h1 className={s.slackAmount}>$750.00 due Aug 1 2020</h1>
                <h1 className={s.oneMedAmount}>$199.00 due Jan 1 2021</h1>
                <h1 className={s.udacityAmount}>$399.00 due Sep 1 2020</h1>
                <div className={s.inputContainer}>
                  <div className={`${s.input} ${s.active}`}>
                    <BsFillCreditCardFill size={15} className={s.inputIcon} />
                    Card
                  </div>
                  <div className={s.input}>
                    <AiFillBank size={18} className={s.inputIcon} />
                    Bank
                  </div>
                </div>
                <div className={s.input}>
                  <BsFillCreditCardFill size={15} className={s.inputIcon} />
                  Card Number
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  MM/YY &nbsp; CVC
                </div>
                <div className={s.payButton}>Pay Invoice</div>
              </div>
            </div>
          </div>
          <div className={s.deviceContainer}>
            <TiArrowSortedUp size={20} className={s.deviceArrow} />
            <img src="./device.png" alt="" className={s.device} />
          </div>
          <div className={s.phoneContainer}>
            <div className={s.phoneBackground}>
              <div className={s.awayScreen}>
                <img src="./awaylogo.png" alt="" className={s.awayLogo} />
                <div className={s.cartTextContainer}>
                  <p className={s.yourCart}>Your cart</p>
                  <p className={s.itemCount}>2 items</p>
                </div>
                <div className={s.divider}></div>
                <div className={s.item}>
                  <img src="./bag.PNG" alt="" className={s.itemImage} />
                  <div className={s.itemText}>
                    <h1 className={s.itemName}>The Bigger Carry-On</h1>
                    <p className={s.itemDescription}>Color: Navy</p>
                    <div className={s.itemNumber}>
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </div>
                  </div>
                  <p className={s.price}>$245.00</p>
                </div>
                <div className={s.divider}></div>
                <div className={s.item}>
                  <img src="./tag.PNG" alt="" className={s.itemImageSmall} />
                  <div className={s.itemText}>
                    <h1 className={s.itemName}>The Luggage Tag</h1>
                    <p className={s.itemDescription}>Color: Sand</p>
                    <div className={s.itemNumber}>
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </div>
                  </div>
                  <p className={s.price}>$25.00</p>
                </div>
                <div className={s.bottomSection}>
                  <div className={s.divider}></div>
                  <div className={s.cartTextContainer}>
                    <p className={s.yourCart}>Total</p>
                    <p className={s.itemCount}>$270.00</p>
                  </div>
                  <div className={`${s.phoneButton} ${s.buttonClick}`}>
                    <img
                      src="./applepay.png"
                      alt=""
                      className={s.applePayLogo}
                    />
                  </div>
                  <div className={s.phoneButton}>Checkout</div>
                </div>
              </div>
            </div>
            <div className={s.darkenScreen}></div>
            <div className={s.payScreen}>
              <div className={s.topSection}>
                <img src="./applepay.png" alt="" className={s.applePayLogo} />
                <p className={s.cancel}>Cancel</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.payField}>
                <img src="./visacard.png" alt="" className={s.visaCard} />
                <p className={s.payFieldText}>
                  CHASE FREEDOM (**** 1234) <br />
                  27 FREDRICK AVE BROTHERS OR
                </p>
                <IoIosArrowForward size={10} />
              </div>
              <div className={s.divider}></div>
              <div className={s.payField}>
                <p className={s.payFieldText}>BILLING</p>
                <p className={s.payFieldText}>
                  JOHN APPLESEED <br />
                  27 FREDRICK AVE
                  <br />
                  BROTHERS, OR 97712 <br />
                  UNITED STATES
                </p>
                <IoIosArrowForward size={10} />
              </div>
              <div className={s.divider}></div>
              <div className={s.payField}>
                <p className={s.payFieldText}>CONTACT</p>
                <p className={s.payFieldText}>
                  J.APPLESEED@EXAMPLE.COM <br />
                  +1 (458) 555-2683
                </p>
                <IoIosArrowForward size={10} />
              </div>
              <div className={s.divider}></div>
              <div className={s.payField}>
                <p className={s.payFieldText}>PAY TOTAL</p>
                <p className={s.payFieldText}>$250.00</p>
              </div>
              <img src="./faceid.gif" alt="" className={s.faceID} />
            </div>
          </div>
          <div className={s.graphContainer}>
            <img src="./fraudgraph.PNG" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
