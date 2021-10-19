import { NavBar } from "../../Components/NavBar";
import { CardAboutUs } from "../../Components/CardAboutUS";

const AboutUs = () => {
  const groupArray = [
    {
      name: "Hiran Oliveira",
      linkedin: "https://www.linkedin.com/in/hiranoliveira/",
      githubpage: "https://github.com/hiranoliveira",
      image: "images/hiran.jpeg",
    },
    {
      name: "Raissa Toledo",
      linkedin: "https://www.linkedin.com/in/raissalstoledo/",
      githubpage: "https://github.com/raissalst",
      image: "/images/raissatoledo.jpg",
    },
    {
      name: "Luan Ferreira",
      linkedin: "https://www.linkedin.com/in/luanferreira02/",
      githubpage: "https://github.com/luan-ferreir4",
      image: "/images/luanferreira.jpg",
    },
    {
      name: "Roberto Rocha",
      linkedin: "https://www.linkedin.com/in/rsrocha",
      githubpage: "https://github.com/r-rocha",
      image: "images/robertorocha.jpg",
    },
  ];

  return (
    <>
      <NavBar typeNav={"unlogged"} />
      About Us
      {groupArray.map((item) => (
        <CardAboutUs item={item} />
      ))}
    </>
  );
};

export default AboutUs;
