import { InputContainer, InputBox } from "../../Styles/ComponentsStyle/Input";

export const Input = ({ register, name, error, icon: Icon, ...rest }) => {
  return (
    <InputContainer>
      <div>{!!error && <span> - {error}</span>}</div>
      <InputBox>
        {Icon && (
          <div>
            <Icon size={16} />
          </div>
        )}
        <input {...register(name)} {...rest} />
      </InputBox>
    </InputContainer>
  );
};
