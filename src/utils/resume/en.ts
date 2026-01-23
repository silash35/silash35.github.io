import type { ResumeSection } from "./types";

const resume: ResumeSection[] = [
  {
    title: "Summary",
    paragraphs: [
      "Undergraduate student in Control and Automation Engineering at UFBA and certified Electromechanical Technician from IFBA, with experience in applied research in control systems, neural networks, and embedded systems. Has experience in educational robotics, web development, and leadership within a junior enterprise.",
    ],
  },
  {
    title: "Academic Background",
    formations: [
      {
        name: "Control and Automation Engineering (2022 - present)",
        place: "Universidade Federal da Bahia (UFBA)",
        activities: [
          {
            name: "Undergraduate Research – Programa de Recursos Humanos da ANP em Descarbonização e Transformação Digital para a Indústria de Petróleo e Gás (PRH 41/UFBA)",
            period: "July 2024 to June 2026",
          },
        ],
      },
      {
        name: {
          text: "Electromechanical Technician (2022)",
          href: "https://drive.silas.eng.br/eletromecanica.pdf",
          title: "Electromechanical Technician Certificate",
        },
        place: "Instituto Federal da Bahia (IFBA)",
        activities: [
          {
            name: {
              text: "Teaching Assistant – Educational Robotics Project",
              href: "https://drive.silas.eng.br/robotica-voluntario.pdf",
              title: "Educational robotics project teaching assistant certificate",
            },
            period: "May 2018 to April 2019",
          },
        ],
      },
    ],
  },
  {
    title: "Professional Experience",
    jobs: [
      {
        company: {
          text: "OPTIMUS Jr. Controle e Automação",
          title: "OPTIMUS Jr. Website",
          href: "https://optimusjr.com.br/",
        },
        positions: [
          "Marketing Director – February 2023 to December 2023",
          "Performance Manager – November 2022 to February 2023",
          "Trainee – September 2022 to November 2022",
        ],
        activities: [
          "Leadership and management of the Marketing Department",
          "Development of the company’s new website",
          "Design of corporate and promotional materials, including social media content",
        ],
      },
      {
        company: "Makilab Serviços",
        positions: ["Intern – August 2021 to February 2022"],
        activities: [
          "Repair and maintenance of electromechanical equipment",
          "Development of projects using Arduino",
          "Customer service",
        ],
      },
    ],
  },
  {
    title: "Technical Skills",
    topics: [
      {
        text: "Programming and Application Development: C++ and Web (HTML, CSS, JS)",
        href: "/portfolio",
        title: "Portfolio with projects in C++/Qt and Web applications",
      },
      "Image and Video Editing",
      "Linux",
    ],
  },
  {
    title: "Additional Training",
    topics: [
      {
        text: "Basic Robotics",
        href: "https://drive.silas.eng.br/robotica-curso.pdf",
        title: "Basic robotics certificate",
        outsideText: "- 32 hours",
      },
      {
        text: "Computer Maintenance",
        href: "https://drive.silas.eng.br/mega-cursos-5.pdf",
        title: "Computer maintenance certificate",
        outsideText: "- 48 hours",
      },
      {
        text: "Advanced Microsoft Office",
        href: "https://drive.silas.eng.br/mega-cursos-2.pdf",
        title: "Advanced Microsoft Office certificate",
        outsideText: "- 32 hours",
      },
    ],
  },
  {
    title: "Research and Academic Production",
    publications: [
      {
        title: {
          text: "Embedding of a Physics-Informed Recurrent Neural Network for Pressure Control of a Gas Lift System",
          href: "https://drive.silas.eng.br/cobeq-2025-apresentacao.pdf",
          title:
            "Oral presentation certificate at the Brazilian Congress of Chemical Engineering (COBEQ)",
        },
        type: "Oral Presentation",
        venue: {
          text: "25° Congresso Brasileiro de Engenharia Química (COBEQ 2025)",
          href: "https://www.cobeq2025.com.br/cobeq-2025/page/5184-home",
          title: "COBEQ 2025 Website",
        },
        authors: [
          "Araújo, Silas",
          "Nicole, Souza",
          "Souza, Leonardo S.",
          "Fontes, Raony M.",
          "Martins, Márcio A. F.",
        ],
      },
      {
        title: {
          text: "Embedding of a Physics-Informed Recurrent Neural Network for Level Control in Spherical Tanks",
          href: "https://drive.silas.eng.br/SBAI2025-apresentacao2.pdf",
          title: "Oral presentation certificate at SBAI 2025",
        },
        type: "Oral Presentation",
        venue: "XVII Simpósio Brasileiro de Automação Inteligente (SBAI 2025)",
        authors: [
          "Araújo, Silas",
          "Santos, Wildson",
          "Souza, Leonardo S.",
          "Fontes, Raony M.",
          "Martins, Márcio A. F.",
        ],
      },
      {
        title: {
          text: "Implementation of an Embedded PINN in a Software-in-the-Loop Environment as a Virtual Analyzer for a Spherical Tank System",
          href: "https://drive.silas.eng.br/pse-ne-2024-apresentacao.pdf",
          title: "Oral presentation certificate at PSE NE 2024",
        },
        type: "Oral Presentation",
        venue: "1° Seminário em Engenharia de Sistemas em Processos do Nordeste (PSE NE 2024)",
        authors: [
          "Araújo, Silas",
          "Souza, Leonardo S.",
          "Fontes, Raony M.",
          "Martins, Márcio A. F.",
        ],
      },
    ],
  },
  {
    title: "Languages",
    topics: [
      "Portuguese – Native",
      {
        text: "English – Intermediate",
        href: "https://drive.silas.eng.br/profici-ingles.pdf",
        title: "English language course certificate",
      },
    ],
  },
  {
    title: "Awards",
    topics: [
      {
        text: "Best Oral Presentation",
        href: "https://drive.silas.eng.br/pse-ne-melhor-apresentacao.pdf",
        title: "Best oral presentation certificate at PSE NE 2024",
        outsideText: "- PSE NE 2024",
      },
    ],
  },
  {
    title: "Additional Information",
    topics: ["Valid Brazilian driver’s license for passenger cars"],
  },
];

/*
[
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
          "Development of the company’s new website",
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
*/

export default resume;
