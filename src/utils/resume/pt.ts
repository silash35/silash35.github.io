import type { ResumeSection } from "./types";

const resume: ResumeSection[] = [
  {
    title: "Resumo",
    paragraphs: [
      "Graduando em Engenharia de Controle e Automação pela UFBA e técnico em eletromecânica pelo IFBA, com atuação em pesquisa aplicada em controle, redes neurais e sistemas embarcados. Possui experiência em robótica educacional, desenvolvimento web e liderança em empresa júnior.",
    ],
  },
  {
    title: "Formação Acadêmica",
    formations: [
      {
        name: "Engenharia de Controle e Automação de Processos (2022 - atualmente)",
        place: "Universidade Federal da Bahia (UFBA)",
        activities: [
          {
            name: "Iniciação Científica - Programa de Recursos Humanos da ANP em Descarbonização e Transformação Digital para a Indústria de Petróleo e Gás (PRH 41/UFBA)",
            period: "Julho de 2024 a Junho de 2026",
          },
        ],
      },
      {
        name: {
          text: "Técnico em Eletromecânica (2022)",
          href: "https://drive.silas.eng.br/eletromecanica.pdf",
          title: "Certificado de Técnico em Eletromecânica",
        },
        place: "Instituto Federal da Bahia (IFBA)",
        activities: [
          /*
          {
            name: "Monitoria - Projeto ECOIFBA",
            period: "Outubro de 2019 a Setembro de 2020",
          },
          */
          {
            name: {
              text: "Monitoria - Projeto Robótica Educacional",
              href: "https://drive.silas.eng.br/robotica-voluntario.pdf",
              title: "Certificado de monitoria do projeto de robótica educacional",
            },
            period: "Maio de 2018 a Abril de 2019",
          },
        ],
      },
    ],
  },
  {
    title: "Experiência Profissional",
    jobs: [
      {
        company: {
          text: "OPTIMUS Jr. Controle e Automação",
          title: "Website da OPTIMUS Jr.",
          href: "https://optimusjr.com.br/",
        },
        positions: [
          "Diretor de Marketing - Fevereiro de 2023 a Dezembro de 2023",
          "Gerente de Performance - Novembro de 2022 a Fevereiro de 2023",
          "Trainee - Setembro de 2022 a Novembro de 2022",
        ],
        activities: [
          "Liderança e gestão da Diretoria de Marketing",
          "Desenvolvimento do novo website da empresa",
          "Design de materiais corporativos e promocionais, incluindo artes para redes sociais",
        ],
      },
      {
        company: "Makilab Serviços",
        positions: ["Estagiário - Agosto de 2021 a Fevereiro de 2022"],
        activities: [
          "Reparo e manutenção de equipamentos e ferramentas eletromecânicas",
          "Desenvolvimento de projetos com Arduino",
          "Atendimento ao cliente",
        ],
      },
    ],
  },
  {
    title: "Habilidades técnicas",
    topics: [
      {
        text: "Programação e Desenvolvimento de Aplicações: C++ e Web (HTML, CSS, JS)",
        href: "/portfolio",
        title: "Portfólio com projetos em C++/Qt e aplicações Web",
      },
      "Edição de Imagem e Vídeo",
      /*
      "Inkscape",
      "Gimp",
      "Pacote Libre Office",
      {
        text: "Git e GitHub",
        href: "http://brorlandi.github.io/GitTrainingWall/",
        title: "Git Training Wall",
      },
      */
      "Linux",
    ],
  },
  {
    title: "Formação Complementar",
    topics: [
      {
        text: "Robótica Básica",
        href: "https://drive.silas.eng.br/robotica-curso.pdf",
        title: "Certificado em robótica básica",
        outsideText: "- 32 Horas",
      },
      /*
      {
        text: "Tecnologia da Informação e Comunicação",
        href: "https://drive.silas.eng.br/senai-TIC.pdf",
        title: "Certificado em Tecnologia da Informação e Comunicação",
        outsideText: "- 14 Horas",
      },
      {
        text: "Empreendedorismo",
        href: "https://drive.silas.eng.br/senai-empreendedorismo.pdf",
        title: "Certificado em empreendedorismo",
        outsideText: "- 14 Horas",
      },
      {
        text: "Logica da programação",
        href: "https://drive.silas.eng.br/senai-logica-da-programacao.pdf",
        title: "Certificado em Lógica da programação",
        outsideText: "- 14 Horas",
      },
      */
      {
        text: "Manutenção de Microcomputador",
        href: "https://drive.silas.eng.br/mega-cursos-5.pdf",
        title: "Certificado em Manutenção de Microcomputador",
        outsideText: "- 48 Horas",
      },
      /*
      {
        text: "Auxiliar de administração",
        href: "https://drive.silas.eng.br/mega-cursos-4.pdf",
        title: "Certificado em Auxiliar de administração",
        outsideText: "- 48 Horas",
      },
      {
        text: "Web Design Básico",
        href: "https://drive.silas.eng.br/mega-cursos-3.pdf",
        title: "Certificado em Web Design Básico",
        outsideText: "- 48 Horas",
      },
      */
      {
        text: "Microsoft Office avançado",
        href: "https://drive.silas.eng.br/mega-cursos-2.pdf",
        title: "Certificado em Microsoft Office avançado",
        outsideText: "- 32 Horas",
      },
      /*
      {
        text: "Microsoft Windows, Digitação, Multimídia, Corel Draw, Técnicas de Impressão, Treinamento para escritório e Internet",
        href: "https://drive.silas.eng.br/mega-cursos-1.pdf",
        title:
          "Certificado em Microsoft Windows, Digitação, Multimídia, Corel Draw, Técnicas de Impressão, Treinamento para escritório e Internet",
        outsideText: "- 56 Horas",
      },
      */
    ],
  },
  {
    title: "Pesquisa e Produção Acadêmica",
    publications: [
      {
        title: {
          text: "Embarque de Rede Neural Recorrente Fenomenologicamente Informada para o Controle da Pressão de um Sistema de Gas Lift",
          href: "https://drive.silas.eng.br/cobeq-2025-apresentacao.pdf",
          title:
            "Certificado de apresentação no Congresso Brasileiro de Engenharia Química (COBEQ)",
        },
        type: "Apresentação Oral",
        venue: {
          text: "25° Congresso Brasileiro de Engenharia Química (COBEQ 2025)",
          href: "https://www.cobeq2025.com.br/cobeq-2025/page/5184-home",
          title: "Website do COBEQ 2025",
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
          text: "Embarque de Rede Neural Recorrente Fenomenologicamente Informada para Controle de Nível em Tanques Esféricos",
          href: "https://drive.silas.eng.br/SBAI2025-apresentacao2.pdf",
          title: "Certificado de apresentação no SBAI 2025",
        },
        type: "Apresentação Oral",
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
          text: "Implementação de PINN Embarcada em Ambiente Software-in-the-Loop como Analisador Virtual para um Sistema de Tanques Esféricos",
          href: "https://drive.silas.eng.br/pse-ne-2024-apresentacao.pdf",
          title: "Certificado de apresentação no PSE NE 2024",
        },
        type: "Apresentação Oral",
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
    title: "Idiomas",
    topics: [
      "Português - Nativo",
      {
        text: "Inglês - Intermediário",
        href: "https://drive.silas.eng.br/profici-ingles.pdf",
        title: "Certificado de Inglês",
      },
    ],
  },
  {
    title: "Prêmios",
    topics: [
      {
        text: "Melhor Apresentação Oral",
        href: "https://drive.silas.eng.br/pse-ne-melhor-apresentacao.pdf",
        title: "Certificado de melhor apresentação oral no PSE NE 2024",
        outsideText: "- PSE NE 2024",
      },
    ],
  },
  {
    title: "Informações Adicionais",
    topics: [
      "CNH categoria B",
      /*
      {
        text: "UFBA: Mostra a Sua Cara 2023",
        href: "https://drive.silas.eng.br/UFBA-mostra-sua-cara.pdf",
        title: "Certificado monitoria no evento UFBA: Mostra a Sua Cara 2023",
        outsideText: "- 10 Horas - monitor",
      },
      "QtCon Brasil 2020 - 12 Horas - ouvinte",
      {
        text: "Oportuniza 2019",
        href: "https://drive.silas.eng.br/oportuniza-2019.pdf",
        title: "Certificado ouvinte no Oportuniza 2019",
        outsideText: "- 2 Horas - ouvinte",
      },
      {
        text: "SNCT (Semana Nacional de Ciência e Tecnologia) 2019",
        href: "https://drive.silas.eng.br/SCTIFBA-2019.pdf",
        title: "Certificado ouvinte na Semana Nacional de Ciência e Tecnologia 2019",
        outsideText: "- 16 Horas - ouvinte",
      },
      {
        text: "Enconecta 2018",
        href: "https://drive.silas.eng.br/enconecta-2018.pdf",
        title: "Certificado de ouvinte no Enconecta 2018",
        outsideText: "- 8 Horas - ouvinte",
      },
    */
    ],
  },
];

export default resume;
