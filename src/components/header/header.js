import "./header.css";
import slackLogo from "../../assets/slack_logo.svg";

const HeaderComponent = () => {
  return (
    // <>
    //   <div id="headerMainContainer">
    //     <div id="headerChild">
    //       <div className="blankArea">
    //         <div className="parts">
    //           <img src={slackLogo} alt="slack-logo" width={120} />
    //         </div>
    //       </div>
    //       <div className="logoArea">
    //         <div className="parts">
    //           <img src={slackLogo} alt="slack-logo" width={120} />
    //         </div>
    //       </div>
    //       <div className="sideLink">
    //         <div className="parts">
    //           <img src={slackLogo} alt="slack-logo" width={120} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <header className="headerContainer">
        <div className="leftItem"></div>
        <div className="centeredItem">
          <img src={slackLogo} alt="slack-logo" width={120} />
        </div>
        <div className="rightItem">
          <div>
            Need account? <br />
            <a className="createAccountLink" href="/register">
              Create an account
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
