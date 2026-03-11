import { TiLocationArrow } from "react-icons/ti";
import { BsFillChatFill } from "react-icons/bs";

import s from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <div>
      <div className={s.footerBG}></div>
      <div className={s.footerContainer}>
        <div className={s.columnOne}>
          <div className={s.logoContainer}>
            <img src="./logo.png" alt="" className={s.logo} />
            <div className={s.link}>
              <TiLocationArrow size={20} />
              <a href="#">United States</a>
            </div>
            <div className={s.link}>
              <BsFillChatFill size={12} />
              <a href="#">English (United States)</a>
            </div>
          </div>
          <p className={s.copyright}>© 2022 Stripe, Inc.</p>
        </div>
        <div className={s.column}>
          <ul className={s.footerList}>
            <h2 className={s.columnHeading}>Products</h2>
            <a href="#">Atlas</a>
            <a href="#">Billing</a>
            <a href="#">Capital</a>
            <a href="#">Checkout</a>
            <a href="#">Climate</a>
            <a href="#">Connect</a>
            <a href="#">Corporate Card</a>
            <a href="#">Data Pipeline</a>
            <a href="#">Elements</a>
            <a href="#">Financial Connections</a>
            <a href="#">Identity</a>
            <a href="#">Invoicing</a>
            <a href="#">Issuing</a>
            <a href="#">Link</a>
            <a href="#">Payments</a>
            <a href="#">Payment Links</a>
            <a href="#">Payouts</a>
            <a href="#">Pricing</a>
            <a href="#">Radar</a>
            <a href="#">Revenue Recognition</a>
            <a href="#">Sigma</a>
            <a href="#">Tax</a>
            <a href="#">Terminal</a>
            <a href="#">Treasury</a>
          </ul>
        </div>
        <div className={s.column}>
          <ul className={s.footerList}>
            <h2 className={s.columnHeading}>Use Cases</h2>
            <a href="#">Ecommerce</a>
            <a href="#">Saas</a>
            <a href="#">Marketplaces</a>
            <a href="#">Embedded Finance</a>
            <a href="#">Platforms</a>
            <a href="#">Creator Economy</a>
            <a href="#">Crypto</a>
            <a href="#">Global Businesses</a>
          </ul>
          <ul className={s.footerList}>
            <h2 className={s.columnHeading}>
              Integrations &amp; Custom Solutions
            </h2>
            <a href="#">App Marketplace</a>
            <a href="#">Partner Ecosystem</a>
            <a href="#">Professional Services</a>
          </ul>
          <ul className={s.footerList}>
            <h2 className={s.columnHeading}>Developers</h2>
            <a href="#">Documentation</a>
            <a href="#">API Reference</a>
            <a href="#">API Status</a>
            <a href="#">API Changelog</a>
            <a href="#">Build a Stripe App</a>
          </ul>
        </div>
        <div className={s.finalColumn}>
          <ul className={s.footerList}>
            <h2 className={s.columnHeading}>Resources</h2>

            <a href="#">Support Center</a>
            <a href="#">Support Plans</a>
            <a href="#">Guides</a>
            <a href="#">Customer Stories</a>
            <a href="#">Blog</a>
            <a href="#">Annual Conference</a>
            <a href="#">Privacy &amp; Terms</a>
            <a href="#">Licenses</a>
            <a href="#">COVID-19</a>
            <a href="#">Sitemap</a>
            <a href="#">Cookie settings</a>
          </ul>
          <ul className={s.footerList}>
            <h2 className={s.columnHeading}>Company</h2>

            <a href="#">Jobs</a>
            <a href="#">Newsroom</a>
            <a href="#">Stripe Press</a>
            <a href="#">Become a Partner</a>
          </ul>
        </div>
      </div>
      <div className={s.footerBGEnd}></div>
    </div>
  );
}
