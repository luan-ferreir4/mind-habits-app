import { Select } from "../../Styles/ComponentsStyle/InputSelector"

export const InputSelector = ({selectType}) => {
    return (
        <Select>
            {selectType === "category" ? (
                <>
                <option value="alimentação" selected>alimentação</option>
                <option value="fitness">fitness</option>
                <option value="sono">sono</option>
                <option value="meditação">meditação</option>
                <option value="yoga">yoga</option>
                <option value="produtividade">produtividade</option>
                <option value="outros">outros...</option>
                </>
            ): selectType === "dificulty" ? ( 
                <>
                <option value="muito fácil" selected>muito fácil</option>
                <option value="facil">facil</option>
                <option value="médio">médio</option>
                <option value="difícil">difícil</option>
                <option value="muito difícil">muito difícil</option>
                </>
            ): selectType === "time" ? (
                <>
                <option value="hora">hora</option>
                <option value="dia" selected>dia</option>
                <option value="semana">semana</option>
                <option value="mês">mês</option>
                <option value="ano">ano</option>
                </>
            ):(<></>)
            }
        </Select>
    )
}