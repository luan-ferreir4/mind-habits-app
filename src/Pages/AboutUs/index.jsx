import { NavBar } from "../../Components/NavBar";
import { CardAboutUs } from "../../Components/CardAboutUS";
import "../../Styles/PagesStyle/AboutUsPage/style.css";

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
      name: "Roberto Rocha",
      linkedin: "https://www.linkedin.com/in/rsrocha",
      githubpage: "https://github.com/r-rocha",
      image: "images/robertorocha.jpg",
    },
  ];

  return (
    <div className="container">
      <NavBar typeNav={"unlogged"} />
      <h2>Equipe MindHabits</h2>
      <div className="cards">
        {groupArray.map((item) => (
          <CardAboutUs item={item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
