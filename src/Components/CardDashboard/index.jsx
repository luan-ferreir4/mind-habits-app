import { useEffect, useState } from "react";

export const CardDashboard = ({ listType }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    listType === "habit" ? setContent("Habitos") : setContent("Grupos");
  },[listType]);

  return (
    <div>
      <h1>{content}</h1>
      <p>Você possui 0 {content}</p>
    </div>
  );
};
