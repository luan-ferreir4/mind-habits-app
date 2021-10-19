import { InputBox } from "../../Styles/ComponentsStyle/Input";

export const Input = ({ icon: Icon, ...rest }) => {
  return (
      <>
    <InputBox>
    {Icon &&
     <div>
         <Icon size={16}/>
    </div>} 
    <input {...rest} />
    </InputBox>
    </>
  );
};
