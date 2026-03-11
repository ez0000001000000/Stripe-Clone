import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import s from "../../styles/mobilemenu.module.scss";

export default function MobileMenu({ isOpen, toggleMobileMenu }) {
  const [displaySection, setDisplaySection] = useState(0);

  return (
    <div>
      <div className={`${s.mobileMenuContainer} ${isOpen && s.mobileMenuOpen}`}>
        <div className={s.mobileMenuTop}>
          <img
            src="./logo(purple).png"
            className={`${s.mobileMenuLogo} ${
              displaySection !== 0 && s.hideElement
            }`}
          />
          <div
            className={`${s.backButton} ${
              displaySection === 0 && s.hideElement
            }`}
            onClick={() => setDisplaySection(0)}
          >
            <MdArrowBackIos size={10} />
            <p className={s.backText}>Back</p>
          </div>
          <AiOutlineClose
            className={s.mobileCloseIcon}
            onClick={toggleMobileMenu}
          />
        </div>
        <div
          className={`${s.mobileTabsContainer} ${
            displaySection !== 0 && s.hideMenu
          }`}
        >
          <div className={s.productsContainer}>
            <h2 className={s.menuTitle}>Products</h2>
            <div className={s.divider}></div>
            <ul className={s.productsList}>
              <li
                className={s.productsListItem}
                onClick={() => setDisplaySection(1)}
              >
                <div className={s.listItemTextContainer}>
                  <p className={s.listItemHeading}>Global Payments</p>
                  <p className={s.listItemText}>
                    Accept payments online, in-person, or through your platform.
                  </p>
                </div>
                <MdArrowForwardIos size={20} />
              </li>
              <li
                className={s.productsListItem}
                onClick={() => setDisplaySection(2)}
              >
                <div className={s.listItemTextContainer}>
                  <p className={s.listItemHeading}>
                    Revenue and financial management
                  </p>
                  <p className={s.listItemText}>
                    Automate revenue collection and finance.
                  </p>
                </div>
                <MdArrowForwardIos size={20} />
              </li>
              <li
                className={s.productsListItem}
                onClick={() => setDisplaySection(3)}
              >
                <div className={s.listItemTextContainer}>
                  <p className={s.listItemHeading}>Banking-as-a-Service</p>
                  <p className={s.listItemText}>
                    Embed financial services in your platform or product.
                  </p>
                </div>
                <MdArrowForwardIos size={20} />
              </li>
            </ul>
          </div>
          <ul className={s.mobileLinks}>
            <li className={s.mobileLink} onClick={() => setDisplaySection(4)}>
              <h1 className={s.mobileLinkHeading}>Solutions</h1>
              <MdArrowForwardIos size={20} />
            </li>
            <div className={s.divider}></div>
            <li className={s.mobileLink} onClick={() => setDisplaySection(5)}>
              <h1 className={s.mobileLinkHeading}>Developers</h1>
              <MdArrowForwardIos size={20} />
            </li>
            <div className={s.divider}></div>
            <li className={s.mobileLink} onClick={() => setDisplaySection(6)}>
              <h1 className={s.mobileLinkHeading}>Resources</h1>
              <MdArrowForwardIos size={20} />
            </li>
            <div className={s.divider}></div>
            <li className={s.mobileLink}>
              <h1 className={s.mobileLinkHeading}>Pricing</h1>
            </li>
          </ul>
        </div>
        <div
          className={`${s.subMenu} ${displaySection !== 1 && s.hideSubMenu}`}
        >
          <div className={s.subMenuContainer}>
            <h2 className={s.subMenuTitle}>GLOBAL PAYMENTS</h2>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img src="./Payments.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Payments</h1>
                  <p className={s.subLinkText}>Online Payments</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Checkout.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Checkout</h1>
                  <p className={s.subLinkText}>Pre-built payments page</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Elements.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Elements</h1>
                  <p className={s.subLinkText}>Customizable payments UIs</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./PaymentLinks.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Payments Links</h1>
                  <p className={s.subLinkText}>No-code payments</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Radar.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Radar</h1>
                  <p className={s.subLinkText}>Fraud &amp; risk management</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Connect.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Connect</h1>
                  <p className={s.subLinkText}>Payments for platforms</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Billing.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Billing</h1>
                  <p className={s.subLinkText}>Subscription management</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Invoicing.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Invoicing</h1>
                  <p className={s.subLinkText}>Online invoices</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Terminal.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Terminal</h1>
                  <p className={s.subLinkText}>In-person payments</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${s.subMenu} ${displaySection !== 2 && s.hideSubMenu}`}
        >
          <div className={s.subMenuContainer}>
            <h2 className={s.subMenuTitle}>REVENUE AND FINANCIAL MANAGEMENT</h2>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img src="./Billing.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Billing</h1>
                  <p className={s.subLinkText}>Subscription Management</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Invoicing.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Invoicing</h1>
                  <p className={s.subLinkText}>Online invoices</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Tax.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Tax</h1>
                  <p className={s.subLinkText}>
                    Sales tax &amp; VAT automation
                  </p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./RevenueRecognition.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Revenue Recognition</h1>
                  <p className={s.subLinkText}>Accounting automation</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Sigma.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Sigma</h1>
                  <p className={s.subLinkText}>Custom reports</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./DataPipeline.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Data Pipeline</h1>
                  <p className={s.subLinkText}>Data warehouse sync</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./FinancialConnections.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Financial Connections</h1>
                  <p className={s.subLinkText}>Linked financial account data</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Identity.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Identity</h1>
                  <p className={s.subLinkText}>Online identity verification</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Atlas.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Atlas</h1>
                  <p className={s.subLinkText}>Startup incorporation</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Climate.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Climate</h1>
                  <p className={s.subLinkText}>Carbon removal</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${s.subMenu} ${displaySection !== 3 && s.hideSubMenu}`}
        >
          <div className={s.subMenuContainer}>
            <h2 className={s.subMenuTitle}>BANKING-AS-A-SERVICE</h2>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img src="./Connect.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Connect</h1>
                  <p className={s.subLinkText}>Payments for platforms</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Capital.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Capital</h1>
                  <p className={s.subLinkText}>Business financing</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Issuing.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Issuing</h1>
                  <p className={s.subLinkText}>Card creation</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Treasury.PNG" alt="" className={s.subLinkIcon} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Treasury</h1>
                  <p className={s.subLinkText}>Banking-as-a-service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${s.subMenu} ${displaySection !== 4 && s.hideSubMenu}`}
        >
          <div className={s.subMenuContainer}>
            <h2 className={s.subMenuTitle}>USE CASES</h2>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img
                  src="./Ecommerce.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Ecommerce</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Saas.PNG" alt="" className={s.subLinkIconSmall} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Saas</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./Marketplaces.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Marketplaces</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./EmbeddedFinance.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Embedded Finance</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./Platforms.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Platforms</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./CreatorEconomy.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Creator Economy</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Crypto.PNG" alt="" className={s.subLinkIconSmall} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Crypto</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./Enterprise.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Enterprise</h1>
                </div>
              </li>
            </ul>
            <div className={s.subMenuDivider}></div>
            <h2 className={s.subMenuTitle}>
              INTEGRATIONS &amp; CUSTOM SOLUTIONS
            </h2>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img
                  src="./AppMarketplace.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>App Marketplace</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./ProfessionalServices.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Professional Services</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./PartnerEcosystem.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Partner Ecosystem</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${s.subMenu} ${displaySection !== 5 && s.hideSubMenu}`}
        >
          <div className={s.subMenuContainer}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img
                  src="./Documentation.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Documentation</h1>
                </div>
              </li>
              <h2 className={s.subMenuTitleSecondary}>GET STARTED</h2>
              <li className={s.subMenuItem}>
                <div className={s.subLinkTextContainer}>
                  <p className={s.subLinkSecondary}>Prebuilt checkout</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <div className={s.subLinkTextContainer}>
                  <p className={s.subLinkSecondary}>Libraries and SDKs</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <div className={s.subLinkTextContainer}>
                  <p className={s.subLinkSecondary}>Plugins</p>
                </div>
              </li>
              <h2 className={s.subMenuTitleSecondary}>GUIDES</h2>
              <li className={s.subMenuItem}>
                <div className={s.subLinkTextContainer}>
                  <p className={s.subLinkSecondary}>Accept Online Payments</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <div className={s.subLinkTextContainer}>
                  <p className={s.subLinkSecondary}>Manage Subscriptions</p>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <div className={s.subLinkTextContainer}>
                  <p className={s.subLinkSecondary}>Send payments</p>
                </div>
              </li>
            </ul>
            <div className={s.divider}></div>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img
                  src="./FullAPIReference.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Full API Reference</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./APIStatus.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>API Status</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./APIChangelog.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>API Changelog</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./BuildAStripeApp.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Build A Stripe App</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${s.subMenu} ${displaySection !== 6 && s.hideSubMenu}`}
        >
          <div className={s.subMenuContainer}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img
                  src="./SupportCenter.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Support Center</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./SupportPlans.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Support Plans</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Guides.PNG" alt="" className={s.subLinkIconSmall} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Guides</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./CustomerStories.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Customer Stories</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img src="./Blog.PNG" alt="" className={s.subLinkIconSmall} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Blog</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./AnnualConference.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Annual Conference</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./ContactSales.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Contact Sales</h1>
                </div>
              </li>
              <div className={s.divider}></div>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuItem}>
                <img src="./Jobs.PNG" alt="" className={s.subLinkIconSmall} />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Jobs</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./Newsroom.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Newsroom</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./StripePress.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Stripe Press</h1>
                </div>
              </li>
              <li className={s.subMenuItem}>
                <img
                  src="./BecomeAPartner.PNG"
                  alt=""
                  className={s.subLinkIconSmall}
                />
                <div className={s.subLinkTextContainer}>
                  <h1 className={s.subLinkHeading}>Become A Partner</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.mobileMenuButtonContainer}>
          <button className={s.mobileMenuBtn}>
            Sign in<span className={s.arrow}></span>
          </button>
        </div>
      </div>
    </div>
  );
}
