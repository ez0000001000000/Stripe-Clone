import s from "../../styles/getStarted.module.scss";

export default function GetStarted() {
  return (
    <div>
      <div className={s.getStartedContainer}>
        <div className={s.mainColumn}>
          <h1 className={s.title}>Ready to get started?</h1>
          <p className={s.mainText}>
            Explore <a href="#">Stripe Payments</a> or create an account
            instantly and start accepting payments. You can also contact us to
            design a custom package for your business.
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
        <div className={s.detailsContainer}>
          <div className={s.detailColumn}>
            <div className={s.priceTagIcon}>
              <img src="./pricetagback.png" alt="" className={s.priceTagBack} />
              <img
                src="./pricetagfront.png"
                alt=""
                className={s.priceTagFront}
              />
            </div>
            <h2 className={s.detailTitle}>Always know what you pay</h2>
            <p className={s.detailText}>
              Integrated per-transaction pricing with no hidden fees.
            </p>
            <button className={s.contactBtn}>
              Pricing details<span className={s.arrow}></span>
            </button>
          </div>
          <div className={s.detailColumn}>
            <div className={s.integrationIcon}>
              <img
                src="./integrationIconBlue.png"
                alt=""
                className={s.integrationBack}
              />
              <img
                src="./integrationIconPurple.png"
                alt=""
                className={s.integrationFront}
              />
              <img
                src="./brackets.png"
                alt=""
                className={s.integrationBrackets}
              />
            </div>
            <h2 className={s.detailTitle}>Start your integration</h2>
            <p className={s.detailText}>
              Get up and running with Stripe in as little as 10 minutes.
            </p>
            <button className={s.contactBtn}>
              API reference<span className={s.arrow}></span>
            </button>
          </div>
        </div>
        <div className={s.stripeLeft}>
          <div className={s.shortStripe}></div>
          <div className={s.longStripe}></div>
        </div>
        <div className={s.stripeRight}>
          <div className={s.longStripe}></div>
          <div className={s.shortStripe}></div>
        </div>
      </div>
    </div>
  );
}
