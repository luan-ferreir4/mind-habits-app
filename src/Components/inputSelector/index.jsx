export const InputSelector = ({selectType}) => {
    return (
        <select>
            {selectType === "category" ? (
                <>
                <option value="alimentação">alimentação</option>
                <option value="fitness">fitness</option>
                <option value="sono">sono</option>
                <option value="meditação">meditação</option>
                <option value="yoga">yoga</option>
                <option value="produtividade">produtividade</option>
                <option value="outros">outros...</option>
                </>
            ): selectType === "dificulty" ? ( 
                <>
                <option value="muito fácil">muito fácil</option>
                <option value="facil">facil</option>
                <option value="médio">médio</option>
                <option value="difícil">difícil</option>
                <option value="muito difícil">muito difícil</option>
                </>
            ): selectType === "time" ? (
                <>
                <option value="hora">hora</option>
                <option value="dia">dia</option>
                <option value="semana">semana</option>
                <option value="mês">mês</option>
                <option value="ano">ano</option>
                </>
            ):(<></>)
            }
        </select>
    )
}