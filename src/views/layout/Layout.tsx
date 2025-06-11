import './layout.less'

import {ContentPage} from '../content/Content';
import InfoPage from "../info/Info";
import MenuPage from "../menu/Menu";  

const LayoutPage = () => {

  return (
    <div className="layout-container">
      <InfoPage/>
      <ContentPage />
      <MenuPage/>
    </div>
  );
};

export default LayoutPage;
