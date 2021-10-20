import { SelectBox, Select } from "../../Styles/ComponentsStyle/InputSelector";

export const InputSelector = ({ register, name, error, selectType }) => {
  return (
    <SelectBox>
      <div>
      {!!error && <span>{error}</span>}
      </div>
      <Select {...register(name)} defaultValue={"default"}>
        {selectType === "category" ? (
          <>
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
          </>
        ) : selectType === "dificulty" ? (
          <>
           <option value="default" disabled>
             Dificuldade
            </option>
            <option value="muito fácil">
              muito fácil
            </option>
            <option value="facil">facil</option>
            <option value="médio">médio</option>
            <option value="difícil">difícil</option>
            <option value="muito difícil">muito difícil</option>
          </>
        ) : selectType === "time" ? (
          <>
            <option value="default" disabled>
              Frequência
            </option>

            <option value="hora">hora</option>
            <option value="dia" defaultValue>
              diário
            </option>
            <option value="semana">semanal</option>
            <option value="mês">mensal</option>
            <option value="ano">anual</option>
          </>
        ) : (
          <></>
        )}
      </Select>
    </SelectBox>
  );
};
