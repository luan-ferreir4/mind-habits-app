import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";
import { useContext } from "react";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import "../../Styles/PagesStyle/GroupsComunnityPage/style.css";
// import {
//   GroupMain,
//   GroupSection,
//   Main,
//   Header,
// } from "../../Styles/PagesStyle/GroupsComunnityPage";
const GroupsCommunity = () => {
  const { communityGroups } = useContext(GroupsCommunityContext);

  return (
    <body>
      <NavBar typeNav={"logged"} />
      <div className="divSide">
        <SideDock />
      </div>
      <div className="divMain">
        <div className="title">
          <h3>Groups Community</h3>
          <ButtonCreate listType="group" />
        </div>
        {communityGroups.map((item) => (
          <CardRender listType={"group"} item={item} />
        ))}
      </div>
    </body>
  );
};

export default GroupsCommunity;
