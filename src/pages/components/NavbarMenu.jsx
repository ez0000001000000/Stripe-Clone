import { useState } from "react";
import s from "../../styles/navbarmenu.module.scss";

export default function NavbarMenu({ index, setNavMenu }) {
  const [productMenu, setProductMenu] = useState(1);

  return (
    <div>
      <div
        className={`${s.menuArrow} ${index !== 0 && s.showArrow} ${
          index === 1 && s.arrowProducts
        } ${index === 2 && s.arrowSolutions} ${
          index === 3 && s.arrowDevelopers
        } ${index === 4 && s.arrowResources}`}
      ></div>
      <div
        className={`${s.navbarMenuContainer} ${index === 0 && s.hideMenu} ${
          index !== 1 && s.menuShift
        }`}
        onMouseLeave={() => setNavMenu(0)}
      >
        <div
          className={`${s.productsMenuContainer} ${
            index !== 1 && s.hideSubMenu
          }`}
        >
          <div className={s.productsTabs}>
            <div
              className={`${s.productsTab} ${productMenu === 1 && s.activeTab}`}
              onMouseEnter={() => setProductMenu(1)}
            >
              <h1 className={s.tabHeading}>Global Payments</h1>
              <p className={s.tabText}>
                Accept payments online, in-person, or through your platform
              </p>
            </div>
            <div
              className={`${s.productsTab} ${productMenu === 2 && s.activeTab}`}
              onMouseEnter={() => setProductMenu(2)}
            >
              <h1 className={s.tabHeading}>Revenue and Financial Management</h1>
              <p className={s.tabText}>
                Automate revenue collection and finance.
              </p>
            </div>
            <div
              className={`${s.productsTab} ${productMenu === 3 && s.activeTab}`}
              onMouseEnter={() => setProductMenu(3)}
            >
              <h1 className={s.tabHeading}>Banking-as-a-Service</h1>
              <p className={s.tabText}>
                Embed financial services in your platform or product.
              </p>
            </div>
          </div>
          <div className={s.productsMenu}>
            <div
              className={`${s.content} ${productMenu === 1 && s.showContent}`}
            >
              <ul className={s.contentList}>
                <li className={s.contentLink}>
                  <img src="./Payments.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Payments</h1>
                    <p className={s.contentText}>Online payments</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Checkout.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Checkout</h1>
                    <p className={s.contentText}>Prebuilt payments page</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Elements.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Elements</h1>
                    <p className={s.contentText}>Customizable payments UIs</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img
                    src="./PaymentLinks.PNG"
                    alt=""
                    className={s.contentIcon}
                  />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Payment Links</h1>
                    <p className={s.contentText}>No-code payments</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Radar.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Radar</h1>
                    <p className={s.contentText}>Fraud &amp; risk management</p>
                  </div>
                </li>
              </ul>
              <ul className={s.contentList}>
                <li className={s.contentLink}>
                  <img src="./Connect.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Connect</h1>
                    <p className={s.contentText}>Payments for platforms</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Billing.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Billing</h1>
                    <p className={s.contentText}>Subscription management</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Invoicing.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Invoicing</h1>
                    <p className={s.contentText}>Online invoices</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Terminal.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Terminal</h1>
                    <p className={s.contentText}>In-person payments</p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={`${s.content} ${productMenu === 2 && s.showContent}`}
            >
              <ul className={s.contentList}>
                <li className={s.contentLink}>
                  <img src="./Billing.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Billing</h1>
                    <p className={s.contentText}>Subscription management</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Invoicing.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Invoicing</h1>
                    <p className={s.contentText}>Online invoices</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Tax.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Tax</h1>
                    <p className={s.contentText}>
                      Sales tax &amp; VAT automation
                    </p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img
                    src="./RevenueRecognition.PNG"
                    alt=""
                    className={s.contentIcon}
                  />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Revenue Recognition</h1>
                    <p className={s.contentText}>Accounting automation</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Sigma.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Sigma</h1>
                    <p className={s.contentText}>Custom reports</p>
                  </div>
                </li>
              </ul>
              <ul className={s.contentList}>
                <li className={s.contentLink}>
                  <img
                    src="./DataPipeline.PNG"
                    alt=""
                    className={s.contentIcon}
                  />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Data Pipeline</h1>
                    <p className={s.contentText}>Data warehouse sync</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img
                    src="./FinancialConnections.PNG"
                    alt=""
                    className={s.contentIcon}
                  />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Financial Connections</h1>
                    <p className={s.contentText}>
                      Linked financial account data
                    </p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Identity.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Identity</h1>
                    <p className={s.contentText}>
                      Online identity verification
                    </p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Atlas.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Atlas</h1>
                    <p className={s.contentText}>Startup incorporation</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Climate.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Climate</h1>
                    <p className={s.contentText}>Carbon removal</p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={`${s.content} ${productMenu === 3 && s.showContent}`}
            >
              <ul className={s.contentList}>
                <li className={s.contentLink}>
                  <img src="./Connect.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Connect</h1>
                    <p className={s.contentText}>Payments for platforms</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Capital.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Capital</h1>
                    <p className={s.contentText}>Business financing</p>
                  </div>
                </li>
              </ul>
              <ul className={s.contentList}>
                <li className={s.contentLink}>
                  <img src="./Issuing.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Issuing</h1>
                    <p className={s.contentText}>Card creation</p>
                  </div>
                </li>
                <li className={s.contentLink}>
                  <img src="./Treasury.PNG" alt="" className={s.contentIcon} />
                  <div className={s.contentTextContainer}>
                    <h1 className={s.contentHeading}>Treasury</h1>
                    <p className={s.contentText}>Banking-as-a-service</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${s.subMenu} ${index !== 2 && s.hideSubMenu}`}>
          <div className={s.subSection}>
            <h1 className={s.subMenuHeading}>USE CASES</h1>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Ecommerce.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Ecommerce</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Saas.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>SaaS</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./Marketplaces.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Marketplaces</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./EmbeddedFinance.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Embedded Finance</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Platforms.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Platforms</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./CreatorEconomy.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Creator Economy</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Crypto.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Crypto</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Enterprise.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Global Businesses</h1>
              </li>
            </ul>
          </div>
          <div className={`${s.subSection}  ${s.bottomSection}`}>
            <h1 className={s.subMenuHeading}>
              INTEGRATIONS &amp; CUSTOM SOLUTIONS
            </h1>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./AppMarketplace.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>App Marketplace</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./ProfessionalServices.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Professional Services</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./PartnerEcosystem.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Partner Ecosystem</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${s.subMenu} ${index !== 3 && s.hideSubMenu}`}>
          <div className={s.subSection}>
            <ul className={`${s.subMenuList} ${s.spanTwo}`}>
              <li className={s.subMenuLink}>
                <img
                  src="./Documentation.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <div className={s.subTextContainer}>
                  <h1 className={s.subLinkText}>Documentation</h1>
                  <p className={s.secondaryText}>
                    Start integrating Stripes products and tools
                  </p>
                </div>
              </li>
            </ul>
            <ul className={s.secondaryList}>
              <h1 className={s.secondaryListHeading}>GET STARTED</h1>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Prebuilt Checkout</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Libraries and SDKs</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Plugins</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Code samplers</h1>
              </li>
            </ul>
            <ul className={s.secondaryList}>
              <h1 className={s.secondaryListHeading}>GUIDES</h1>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Accept online payments</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Manage subscriptions</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Send payments</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>
                  Set up in-person payments
                </h1>
              </li>
            </ul>
          </div>
          <div className={`${s.subSection}  ${s.bottomSection}`}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./FullAPIReference.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Full API Reference</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./APIStatus.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>API Status</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./APIChangelog.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>API Changelog</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./BuildAStripeApp.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Build A Stripe App</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${s.subMenu} ${index !== 4 && s.hideSubMenu}`}>
          <div className={s.subSection}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./SupportCenter.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Support Center</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./SupportPlans.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Support Plans</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Guides.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Guides</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./CustomerStories.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Customer Stories</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Blog.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Blog</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./AnnualConference.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Annual Conference</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./ContactSales.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Contact Sales</h1>
              </li>
            </ul>
          </div>
          <div className={`${s.subSection}  ${s.bottomSection}`}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Jobs.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Jobs</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Newsroom.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Newsroom</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./StripePress.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Stripe Press</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./BecomeAPartner.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Become a Partner</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
