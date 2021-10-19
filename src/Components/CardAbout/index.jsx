import { CardContainer } from "../../Styles/ComponentsStyle/CardAbout";

export const CardAbout = ({ groupSpecific }) => {
  return (
    <CardContainer>
      <p>
        Número de inscritos: <span>{groupSpecific.users_on_group.length}</span>
      </p>

      <p>
        Atividades cadastradas: <span>{groupSpecific.activities.length}</span>
      </p>

      <p>
        Metas cadastradas: <span>{groupSpecific.goals.length}</span>
      </p>
    </CardContainer>
  );
};
