import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

import s from "../../styles/developers.module.scss";

export default function Developers() {
  return (
    <div className={s.developersSection}>
      <div className={s.developersBG}></div>
      <div id="globeViz"></div>
      <div className={s.lineSection}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
      <div className={s.developersContainer}>
        <div className={s.developersLeftColumn}>
          <h2 className={s.heading}>Designed for developers</h2>
          <h1 className={s.title}>
            The world&apos;s most powerful <br /> and easy-to-use APIs
          </h1>
          <p className={s.text}>
            We agonize over the right abstractions so your teams <br />
            don&apos;t need to stitch together disparate systems or <br />
            spend months integrating payments functionality.
          </p>
          <button className={s.btn}>
            Read the docs<span className={s.arrow}></span>
          </button>
          <div className={s.extraInfoContainer}>
            <div className={s.extraLeft}>
              <div className={s.toolsIcon}>
                <img src="./codeIcon.png" alt="" className={s.codeBlockIcon} />
                <div className={s.indexMarker}></div>
                <img src="./gearpurple.png" alt="" className={s.gearPurple} />
              </div>
              <h2 className={s.extraTitle}>Tools for every stack</h2>
              <p className={s.extraText}>
                We offer client and server <br />
                libraries in everything from <br />
                React and PHP to .NET and iOS.
              </p>
              <button className={s.extraBtn}>
                See libraries<span className={s.arrow}></span>
              </button>
            </div>
            <div className={s.extraRight}>
              <div className={s.integrationsIcon}>
                <img src="./cubeblue.png" alt="" className={s.cubeBlue} />
                <img src="./cubepurple.png" alt="" className={s.cubePurple} />
              </div>
              <h2 className={s.extraTitle}>Prebuilt integrations</h2>
              <p className={s.extraText}>
                Use integrations for systems <br />
                like Shopify, WooCommerce, <br />
                NetSuite, and more.
              </p>
              <button className={s.extraBtn}>
                Explore partners<span className={s.arrow}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={s.developersRightColumn}>
          <div className={s.codeBlockTop}>
            <div className={s.lineNumbers}>
              <span className={s.number}>1</span>
              <span className={s.number}>2</span>
              <span className={s.number}>3</span>
              <span className={s.number}>4</span>
              <span className={s.number}>5</span>
              <span className={s.number}>6</span>
            </div>
            <div className={s.typingArea}>
              <div className={s.codeLine}>
                <div className={`${s.typedOut} ${s.lineOne}`}>
                  <p className={s.purple}>const&nbsp;</p>
                  <p className={s.white}>stripe =&nbsp;</p>
                  <p className={s.blue}>require&nbsp;</p>
                  <p className={s.white}>(</p>
                  <p className={s.orange}>&apos;stripe&apos;</p>
                  <p className={s.white}>)(</p>
                  <p className={s.orange}>
                    &apos;sk_test_BQokikJOvBi2Hl4olfQ2&apos;
                  </p>
                  <p className={s.white}>);</p>
                </div>
              </div>
              <div className={s.skipLine}></div>
              <div className={s.codeLine}>
                <div className={`${s.typedOut} ${s.lineTwo}`}>
                  <p className={s.purple}>await&nbsp;</p>
                  <p className={s.white}>stripe.paymentIntents.</p>
                  <p className={s.blue}>create&nbsp;</p>
                  <p className={s.white}>(&#123;</p>
                </div>
              </div>
              <div className={s.codeLine}>
                <div className={`${s.typedOut} ${s.lineThree}`}>
                  <p className={s.white}>&nbsp; amount: &nbsp;</p>
                  <p className={s.yellow}>2000</p>
                  <p className={s.white}>,</p>
                </div>
              </div>
              <div className={s.codeLine}>
                <div className={`${s.typedOut} ${s.lineFour}`}>
                  <p className={s.white}>&nbsp; currency: &nbsp;</p>
                  <p className={s.orange}>&apos;usd&apos;</p>
                </div>
              </div>
              <div className={s.codeLine}>
                <div className={`${s.typedOut} ${s.lineFive}`}>
                  <p className={s.white}>&#125;);</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.codeBlockMiddle}>
            <div className={s.statusLeft}>
              <div className={s.editingStatus}>NORMAL</div>
              <div className={s.serverStatus}>server.js</div>
            </div>
            <div className={s.statusRight}>
              <div className={s.percentage}>100%</div>
              <div className={s.lineIcon}>☰</div>
              <div className={s.lineProgress}>6/6</div>
              <div className={s.lineIndicator}>lin : </div>
              <div className={s.currentLineNo}>4</div>
            </div>
          </div>
          <div className={s.codeBlockBottom}>
            <div className={s.terminalArea}>
              <div className={s.terminalLine}>
                <div className={s.typedOut}>
                  <p className={s.purple}>$ &nbsp;</p>
                  <p className={s.white}>
                    node server.js &amp;&amp; stripe listen
                  </p>
                </div>
              </div>
              <div className={`${s.terminalLine} ${s.appearFirst}`}>
                <p>
                  {" "}
                  <IoIosArrowForward size={13} className={s.arrow} /> Ready!
                  Waiting for requests...
                </p>
              </div>
              <div className={`${s.terminalLine} ${s.appearSecond}`}>
                <p className={s.gray}>2022-11-05 14:05:44 &nbsp;</p>
                <p>[</p>
                <p className={s.blue}>200</p>
                <p>] payment_intent.created</p>
              </div>
              <div className={`${s.terminalLine} ${s.appearThird}`}>
                <p className={s.gray}>2022-11-05 14:05:44 &nbsp;</p>
                <p>[</p>
                <p className={s.blue}>200</p>
                <p>] charge.succeeded</p>
              </div>
              <div className={`${s.terminalLine} ${s.appearFourth}`}>
                <p className={s.gray}>2022-11-05 14:05:44 &nbsp;</p>
                <p>[</p>
                <p className={s.blue}>200</p>
                <p>] payment_intent.succeeded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
