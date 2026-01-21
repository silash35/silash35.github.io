import type { ResumeSection } from "./types";

const resume: ResumeSection[] = [
  {
    title: "Summary",
    paragraphs: [
      "Technician in electromechanics from the IFBA (Federal Institute of Education, Science and Technology of Bahia), with great interest in the automation area.",
      "I have experience as an educational robotics monitor and I am a programmer in C++ and web development.",
    ],
  },
  {
    title: "Work Experience",
    jobs: [
      {
        company: {
          text: "OPTIMUS Jr. Controle e Automação",
          title: "Website of OPTIMUS Jr.",
          href: "https://optimusjr.com.br/",
        },
        positions: [
          "Marketing Director - Feb. 2023 to Dec. 2023",
          "Performance Manager - Nov. 2022 to Feb. 2023",
          "Trainee - Sept. 2022 to Nov. 2022",
        ],
        activities: [
          "Leadership and management of the Marketing Department",
          "Development of the company's new website",
          "Design of corporate and promotional materials, including artwork for social media",
        ],
      },
      {
        company: "Makilab Serviços",
        positions: ["Intern - Aug. 2021 to Feb. 2022"],
        activities: [
          "Maintenance & Repair for Electromechanical Equipments",
          "Project Development with Arduino",
          "Costumer Service",
        ],
      },
    ],
  },
  {
    title: "Academic background",
    topics: [
      "Control and Automation Engineering - UFBA (2022 - present)",
      {
        text: "Electromechanical technician course - IFBA (2018 - 2022)",
        href: "https://drive.silas.eng.br/eletromecanica.pdf",
        title: "Electromechanical Technician Certificate",
      },
    ],
  },
  {
    title: "Skills",
    topics: [
      "Video editing",
      "C++ development (with Qt framework)",
      {
        text: "FrontEnd (HTML, CSS, JS)",
        href: "/portfolio",
        title: "My portfolio (which includes web projects)",
      },
      "Inkscape",
      "Gimp",
      "Libre Office Suite",
      {
        text: "Git and GitHub",
        href: "http://brorlandi.github.io/GitTrainingWall/",
        title: "Git Training Wall",
      },
      "Linux",
    ],
  },
  {
    title: "Relevant Coursework",
    topics: [
      {
        text: "Robotics (basics)",
        href: "https://drive.silas.eng.br/cursoRobotica1.pdf",
        title: "Robotics Certificate",
        outsideText: "- 32 hours",
      },
      {
        text: "Information and communication technology",
        href: "https://drive.silas.eng.br/senaiTIC.pdf",
        title: "Information and communication technology Certificate",
        outsideText: "- 14 hours",
      },
      {
        text: "Entrepreneurship",
        href: "https://drive.silas.eng.br/senaiEmpreendedorismo.pdf",
        title: "Entrepreneurship Certificate",
        outsideText: "- 14 hours",
      },
      {
        text: "Programming logic",
        href: "https://drive.silas.eng.br/senaiLogicaDaProgramacao.pdf",
        title: "Programming logic Certificate",
        outsideText: "- 14 hours",
      },
      {
        text: "Microcomputer maintenance",
        href: "https://drive.silas.eng.br/megaCursos5.pdf",
        title: "Microcomputer maintenance Certificate",
        outsideText: "- 48 hours",
      },
      {
        text: "Administration assistant",
        href: "https://drive.silas.eng.br/megaCursos4.pdf",
        title: "Administration assistant Certificate",
        outsideText: "- 48 hours",
      },
      {
        text: "Web Design (basics)",
        href: "https://drive.silas.eng.br/megaCursos3.pdf",
        title: "Web Design Certificate",
        outsideText: "- 48 hours",
      },
      {
        text: "Microsoft Office (advanced)",
        href: "https://drive.silas.eng.br/megaCursos2.pdf",
        title: "Microsoft Office Certificate",
        outsideText: "- 32 hours",
      },
      {
        text: "Microsoft Windows, Typing, Multimedia, Corel Draw, Printing Techniques, Office Training and Internet",
        href: "https://drive.silas.eng.br/megaCursos1.pdf",
        title:
          "Microsoft Windows, Typing, Multimedia, Corel Draw, Printing Techniques, Office Training and Internet Certificate",
        outsideText: "- 56 hours",
      },
    ],
  },
  {
    title: "Languages",
    topics: [
      "Portuguese - Native speaker",
      {
        text: "English - Intermediate",
        href: "https://drive.silas.eng.br/ALLingles4.pdf",
        title: "English Certificate",
      },
    ],
  },
  {
    title: "Other Things",
    topics: [
      {
        text: "UFBA: Mostra a Sua Cara 2023",
        href: "https://drive.silas.eng.br/UFBAMostraSuaCara.pdf",
        title: "Monitor at UFBA: Mostra a Sua Cara 2023 Event Certificate",
        outsideText: "- 10 hours - monitor",
      },
      "QtCon Brazil 2020 - 12 hours - listener",
      {
        text: "Oportuniza 2019",
        href: "https://drive.silas.eng.br/oportuniza2019.pdf",
        title: "listener at Oportuniza 2019 Event Certificate",
        outsideText: "- 2 hours - listener",
      },
      {
        text: "SNCT (National Science and Technology Week) 2019",
        href: "https://drive.silas.eng.br/CNCTIFBA2019.pdf",
        title: "listener at National Science and Technology Week 2019 Event Certificate",
        outsideText: "- 16 hours - listener",
      },
      {
        text: "Enconecta 2018",
        href: "https://drive.silas.eng.br/enconecta2018.pdf",
        title: "listener at Enconecta 2018 Event Certificate",
        outsideText: "- 8 hours - listener",
      },
    ],
  },
];

export default resume;
