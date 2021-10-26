import { NavBar } from "../../Components/NavBar";
import { CardAboutUs } from "../../Components/CardAboutUS";
import { ContainerAbout } from "../../Styles/PagesStyle/AboutUsPage";

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
    {
      name: "Kelvin Crepaldi",
      linkedin: "https://www.linkedin.com/in/kelvincrepaldi",
      githubpage: "https://github.com/KelvinCrepaldi",
      image: "images/kelvincrepaldi.jpeg",
    },
  ];
  
  const token = localStorage.getItem("token")
  const typeNavBar = token ? "logged" : "unlogged";

  return (
    <>
      <NavBar typeNav={typeNavBar} />
      <ContainerAbout>
        <h2>Equipe MindHabits</h2>
        <ul>
          {groupArray.map((item) => (
            <CardAboutUs item={item} />
          ))}
        </ul>
      </ContainerAbout>
    </>
  );
};

export default AboutUs;
