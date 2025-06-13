import type React from "react";
import { Image, Descriptions } from "antd";
import { AntProfileData } from "../utils/AntProfileData"; // Assuming you have this data in a separate file

const AntSkill: React.FC = () => (
  <Descriptions
    layout="vertical"
    bordered
    column={5}
    items={AntProfileData}
    size={"small"}
  />
);

const AntImage: React.FC = () => <Image src="../../../images/telegram.png" />;

export { AntSkill, AntImage };
