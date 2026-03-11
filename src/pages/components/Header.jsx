import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { BsCalendarFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { useState } from "react";

import s from "../../styles/header.module.scss";
import MobileMenu from "./MobileMenu";
import NavbarMenu from "./NavbarMenu";
import { AnimatedGradient } from "../../components/ui/animated-gradient";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navMenu, setNavMenu] = useState(0);

  console.log(navMenu);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={s.lineSection}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
      <AnimatedGradient className={s.gradient} />
      <div className={s.navContainer}>
        <div className={s.navbar}>
          <img src="./logo.png" className={s.logo} />
          <div className={s.navLinks}>
            <ul className={s.navList}>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(1)}>
                Products
              </li>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(2)}>
                Solutions
              </li>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(3)}>
                Developers
              </li>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(4)}>
                Resources
              </li>
              <li className={s.navLink}>Pricing</li>
            </ul>
          </div>
          <button className={s.navBtn}>
            Sign in<span className={s.arrow}></span>
          </button>
          <div className={s.mobileButtonContainer}>
            <FiMenu className={s.mobileMenuIcon} onClick={toggleMobileMenu} />
          </div>
        </div>
        <NavbarMenu index={navMenu} setNavMenu={setNavMenu} />
        <MobileMenu isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />

        <div className={s.heroContainer}>
          <div className={s.heroTextContainer}>
            <div className={s.titleContainer}>
              <h1 className={s.title}>
                Financial <br /> infrastructure <br />
                for the internet
              </h1>
              <p className={`${s.title} ${s.overlay}`}>
                Financial <br />
                infrastructure <br /> for the internet
              </p>
            </div>
            <p className={s.text}>
              Millions of companies of all sizes—from startups to Fortune <br />
              500s—use Stripe&apos;s software and APIs to accept payments,{" "}
              <br />
              send payouts, and manage their businesses online.
            </p>
            <div className={s.buttonContainer}>
              <button className={s.startBtn}>
                Start now<span className={s.arrow}></span>
              </button>
              <button className={s.contactBtn}>
                Contact sales<span className={s.arrow}></span>
              </button>
            </div>
          </div>
          <div className={s.heroFigureContainer}>
            <div className={s.phoneContainer}>
              <div className={s.phoneBackground}>
                <img src="./cards.PNG" alt="" className={s.cardsImage} />
                <p className={s.description}>Increment Magazine</p>
                <p className={s.price}>$14 per quarter</p>
                <div className={s.phoneButton}>
                  <img src="./applepay.png" alt="" className={s.applePayLogo} />
                </div>
                <div className={s.paySeperator}>
                  <p className={s.payText}>Or pay with card</p>
                </div>
                <div className={s.payInfoContainer}>
                  <h1 className={s.payInfoHeading}>Email</h1>
                  <div className={s.payInput}></div>
                </div>
                <div className={s.payInfoContainer}>
                  <h1 className={s.payInfoHeading}>Card Information</h1>
                  <div className={s.payInput}>
                    <div className={s.subInput}>
                      <h1 className={s.inputText}>Number</h1>
                      <div className={s.cardLogos}>
                        <img src="./visacard.png" alt="" className={s.card} />
                        <img src="./mastercard.png" alt="" className={s.card} />
                        <img
                          src="./americanexpress.png"
                          alt=""
                          className={s.card}
                        />
                        <img src="./discover.png" alt="" className={s.card} />
                      </div>
                    </div>
                    <div className={s.divider}></div>
                    <div className={s.subInput}>
                      <h1 className={s.inputText}>MM/YY</h1>
                      <div className={s.center}>
                        <div className={s.subDivider}></div>
                        <h1 className={s.inputText}>CVC</h1>
                      </div>
                      <AiFillCreditCard size={10} />
                    </div>
                  </div>
                </div>
                <div className={s.payInfoContainer}>
                  <h1 className={s.payInfoHeading}>Country or region</h1>
                  <div className={s.payInput}>
                    <div className={s.subInput}>
                      <h1 className={s.inputText}>United States</h1>
                      <IoIosArrowDown size={10} />
                    </div>
                    <div className={s.divider}></div>
                    <div className={s.subInput}>
                      <h1 className={s.inputText}>ZIP</h1>
                    </div>
                  </div>
                </div>
                <div className={s.phoneButton}>Pay</div>
              </div>
            </div>
            <div className={s.laptopContainer}>
              <div className={s.sidebar}>
                <img src="./rocketLogo.png" alt="" className={s.rocketLogo} />
                <h1 className={s.rocketText}>ROCKET RIDES</h1>
                <IoIosArrowDown size={10} className={s.rocketArrow} />
              </div>
              <div className={s.laptopContent}>
                <div className={s.searchBar}>
                  <IoIosSearch size={10} />
                  <p className={s.searchText}>Search</p>
                </div>
                <div className={s.graphContainer}>
                  <div className={s.toolbar}>
                    <h1 className={s.toolbarText}>Today</h1>
                  </div>
                  <div className={s.divider}></div>
                  <div className={s.graphInfoContainer}>
                    <div className={s.graphTextContainer}>
                      <p className={s.graphTitle}>
                        Gross volume
                        <IoIosArrowDown size={10} />
                      </p>
                      <p className={s.graphValuePurple}>$3,528,198.72</p>
                      <p className={s.graphTime}>1:00PM</p>
                    </div>
                    <div className={s.graphTextContainer}>
                      <p className={s.graphTitle}>
                        August 18
                        <IoIosArrowDown size={10} />
                      </p>
                      <p className={s.graphValue}>$2,931,556.34</p>
                      <p className={s.graphTime}>1:00PM</p>
                    </div>
                  </div>
                  <div className={s.graphLineContainer}>
                    <img src="./graphline.png" alt="" className={s.graphLine} />
                  </div>
                  <div className={s.divider}></div>
                  <div className={s.bottomText}>
                    <p className={s.bottomTime}>12:00 AM</p>
                    <p className={s.bottomTextPurple}>Now</p>
                  </div>
                </div>
                <div className={s.reportContainer}>
                  <div className={s.toolbar}>
                    <h1 className={s.toolbarHeading}>Reports summary</h1>
                    <div className={s.toolbarTextContainer}>
                      <p className={s.toolbarText}>
                        Last 4 weeks
                        <IoIosArrowDown size={10} />
                      </p>
                      <p className={s.toolbarText}>
                        <BsCalendarFill size={10} />
                        July 18 - August 18
                        <IoIosArrowDown size={10} />
                      </p>
                      <p className={s.toolbarText}>
                        Compared to previous
                        <IoIosArrowDown size={10} />
                      </p>
                    </div>
                  </div>
                  <div className={s.divider}></div>
                  <div className={s.graphsContainer}>
                    <div className={s.subGraphContainer}>
                      <div className={s.graphTextContainer}>
                        <p className={s.graphText}>Gross volume</p>
                        <p className={s.percentage}>+4.6%</p>
                      </div>
                      <div className={s.graphValues}>
                        <p className={s.graphValuePurple}>$4,542,345.45</p>
                        <p className={s.graphValue}>$4,062,124.33</p>
                      </div>
                      <img
                        src="./subgraphline.png"
                        alt=""
                        className={s.subGraphLine}
                      />
                      <div className={s.subDivider}></div>
                      <div className={s.bottomTextContainer}>
                        <p className={s.bottomText}>Jul 18</p>
                        <p className={s.bottomText}>Aug 18</p>
                      </div>
                    </div>
                    <div className={s.sideDivider}></div>
                    <div className={s.subGraphContainer}>
                      <div className={s.graphTextContainer}>
                        <p className={s.graphText}>Net volume from sales</p>
                        <p className={s.percentage}>+4.6%</p>
                      </div>
                      <div className={s.graphValues}>
                        <p className={s.graphValuePurple}>$4,180,332.54</p>
                        <p className={s.graphValue}>$4,062,124.33</p>
                      </div>
                      <img
                        src="./subgraphline.png"
                        alt=""
                        className={s.subGraphLine}
                      />
                      <div className={s.subDivider}></div>
                      <div className={s.bottomTextContainer}>
                        <p className={s.bottomText}>Jul 18</p>
                        <p className={s.bottomText}>Aug 18</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.logosContainer}>
          <img src="./instacart.png" className={s.partnerLogo} />
          <img src="./salesforce.png" className={s.partnerLogo} />
          <img src="./amazon.png" className={s.partnerLogo} />
          <img src="./slack.png" className={s.partnerLogo} />
          <img src="./shopify.png" className={s.partnerLogo} />
          <img src="./google.png" className={s.partnerLogo} />
          <img src="./lyft.png" className={s.partnerLogo} />
          <img src="./zoom.png" className={s.partnerLogo} />
        </div>
      </div>
    </div>
  );
}
