import {
  GComPage,
  GComMain,
  GComContent,
} from "../../Styles/PagesStyle/GroupsComunnityPage";

import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";
import { useContext } from "react";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";

const GroupsCommunity = () => {
  const { communityGroups } = useContext(GroupsCommunityContext);

  return (
    <>
      <NavBar typeNav={"logged"} />
      <GComPage>
        <GComMain>
          <SideDock />
          <GComContent>
            <h1>Groups Community</h1>
            <div className="btnCreate">
              <ButtonCreate listType="group" />
            </div>
            <div className="divCards">
              {communityGroups.map((item) => (
                <CardRender listType={"group"} item={item} />
              ))}
            </div>
          </GComContent>
        </GComMain>
      </GComPage>
    </>
  );
};

export default GroupsCommunity;
