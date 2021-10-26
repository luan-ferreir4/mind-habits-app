import {
  ListContainer,
  NavContainer,
  Page,
  PageContent,
} from "../../Styles/PagesStyle/GlobalPageStyle";
import { PageNavButtons } from "../../Styles/PagesStyle/GroupsComunnityPage";

import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";

import { useContext } from "react";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import { useState } from "react";
import { GroupsFilter } from "../../Styles/ComponentsStyle/GroupsFilter";

const GroupsCommunity = () => {
  const [ isFiltered, setIsFiltered ] = useState(false);
  const { communityGroups, goToNextPage, goToPreviousPage, searchGroups } =
    useContext(GroupsCommunityContext);

  const filter = (category) =>{
    searchGroups(category)
    setIsFiltered(true)
  }

  const showAll = (select) => {
    const backToDefault = "default";
    select.value = backToDefault;
    searchGroups("")
    setIsFiltered(false)
  }

  return (
    <>
      <NavBar typeNav={"logged"} />
      <Page>
        <NavContainer>
          <SideDock />
        </NavContainer>

        <PageContent>
          <h1>Todos os grupos</h1>
          <div className="btnCreate">
            <ButtonCreate listType="group" />
          </div>

          <GroupsFilter>
            <section>

            <p>Filtrar por categoria: </p>
            <select defaultValue="default" onChange={(e)=> filter(e.target.value)}>
              <option value="default" disabled>
                Categoria
              </option>

              <option value="alimentação" defaultValue>
                alimentação
              </option>
              <option value="fitness">fitness</option>
              <option value="sono">sono</option>
              <option value="meditação">meditação</option>
              <option value="yoga">yoga</option>
              <option value="produtividade">produtividade</option>
              <option value="outros">outros...</option>
            </select>
            </section>

            {isFiltered &&
                <button onClick={(e)=>showAll(e.target.previousSibling)}>Mostar tudo</button>
             } 
          </GroupsFilter>

          <PageNavButtons>
            <button className="bttnPrev" onClick={() => goToPreviousPage()}>
              Página anterior
            </button>
            <button className="bttnNext" onClick={() => goToNextPage()}>
              Próxima página
            </button>
          </PageNavButtons>

          <ListContainer>
            {communityGroups.map((item, index) => (
              <CardRender key={index} listType={"group"} item={item} />
            ))}
          </ListContainer>

          <PageNavButtons>
            <button className="bttnPrev" onClick={() => goToPreviousPage()}>
              Página anterior
            </button>
            <button className="bttnNext" onClick={() => goToNextPage()}>
              Próxima página
            </button>
          </PageNavButtons>
        </PageContent>
      </Page>
    </>
  );
};

export default GroupsCommunity;
