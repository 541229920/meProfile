import "./info.less";
import { useState } from "react";
import { BtnOnLogout } from "../../components/ButtonComp";

const InfoPage = () => {
  const [fallbackUrl] = useState(
    "https://raw.githubusercontent.com/541229920/this-a-image/main/15cm.png"
  );

  return (
    <div className="InfoPage">
      <div className="info-header">
        <img src={fallbackUrl} alt="" />
        <BtnOnLogout />
      </div>
    </div>
  );
};

export default InfoPage;
