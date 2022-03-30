import Link from "next/link";

import en from "./locale/en.json";
import pt from "./locale/pt.json";

interface Props {
  locale?: string;
  className?: string;
}

const ResumeBody = ({ locale, className }: Props) => {
  const l = locale === "pt" ? pt : en;

  const defaultProps = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <section className={className}>
      <article>
        <h2>{l.summary}</h2>
        <div>
          <p>{l.summaryText1}</p>
          <p>{l.summaryText2}</p>
        </div>
      </article>

      <article>
        <h2>{l.academicBackground}</h2>
        <ul>
          <li>{l.electromechanicalTechnician}</li>
        </ul>
      </article>

      <article>
        <h2>{l.work}</h2>
        <h3>{l.internMakilabTitle}</h3>
        <small>{l.internMakilabDate}</small>
        <ul>
          <li>{l.internMakilabActivity1}</li>
          <li>{l.internMakilabActivity2}</li>
          <li>{l.internMakilabActivity3}</li>
        </ul>
      </article>

      <article>
        <h2>{l.skills}</h2>
        <ul>
          <li>{l.videoEditing}</li>
          <li>{l.cPlusPlus}</li>
          <li>
            <Link href="/portfolio">
              <a title={l.frontEndLink}>{l.frontEnd}</a>
            </Link>
          </li>
          <li>Inkscape</li>
          <li>Gimp</li>
          <li>{l.libreOffice}</li>
          <li>
            <a
              href="http://brorlandi.github.io/GitTrainingWall/"
              title="Git Training Wall"
              {...defaultProps}
            >
              {l.gitGithub}
            </a>
          </li>
          <li>Linux</li>
          <li>{l.soldering}</li>
        </ul>
      </article>

      <article>
        <h2>{l.coursework}</h2>
        <ul>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/cursoRobotica1.pdf"
              title={`${l.certificate} ${l.robotics}`}
              {...defaultProps}
            >
              {l.robotics}
            </a>{" "}
            - 32 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/senaiTIC.pdf"
              title={`${l.certificate} ${l.tic}`}
              {...defaultProps}
            >
              {l.tic}
            </a>{" "}
            - 14 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/senaiEmpreendedorismo.pdf"
              title={`${l.certificate} ${l.entrepreneurship}`}
              {...defaultProps}
            >
              {l.entrepreneurship}
            </a>{" "}
            - 14 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/senaiLogicaDaProgramacao.pdf"
              title={`${l.certificate} ${l.programmingLogic}`}
              {...defaultProps}
            >
              {l.programmingLogic}
            </a>{" "}
            - 14 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/megaCursos5.pdf"
              title={`${l.certificate} ${l.microcomputerMaintenance}`}
              {...defaultProps}
            >
              {l.microcomputerMaintenance}
            </a>{" "}
            - 48 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/megaCursos4.pdf"
              title={`${l.certificate} ${l.administrationAssistant}`}
              {...defaultProps}
            >
              {l.administrationAssistant}
            </a>{" "}
            - 48 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/megaCursos3.pdf"
              title={`${l.certificate} ${l.webDesign}`}
              {...defaultProps}
            >
              {l.webDesign}
            </a>{" "}
            - 48 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/megaCursos2.pdf"
              title={`${l.certificate} ${l.microsoftOffice}`}
              {...defaultProps}
            >
              {l.microsoftOffice}
            </a>{" "}
            - 32 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/megaCursos1.pdf"
              title={`${l.certificate} ${l.microsoftWindows}`}
              {...defaultProps}
            >
              {l.microsoftWindows}
            </a>{" "}
            - 56 {l.hours}
          </li>
        </ul>
      </article>

      <article>
        <h2>{l.languages}</h2>
        <ul>
          <li>{l.portuguese}</li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/ALLingles4.pdf"
              title={`${l.certificate} ${l.english}`}
              {...defaultProps}
            >
              {l.english}
            </a>
          </li>
        </ul>
      </article>

      <article>
        <h2>{l.extracurricular}</h2>
        <h3>{l.ecoifbaTitle}</h3>
        <small>{l.ecoifbaDate}</small>
        <ul>
          <li>{l.ecoifbaActivity1}</li>
          <li>{l.ecoifbaActivity2}</li>
        </ul>

        <h3>
          <a
            href="https://silash35.gitlab.io/large-files/certificates/roboticaVoluntario.pdf"
            title={`${l.certificate} ${l.roboticsTitle}`}
            {...defaultProps}
          >
            {l.roboticsTitle}
          </a>
        </h3>
        <small>{l.roboticsDate}</small>
        <ul>
          <li>{l.roboticsActivity1}</li>
          <li>{l.roboticsActivity2}</li>
          <li>{l.roboticsActivity3}</li>
        </ul>
      </article>

      <article>
        <h2>{l.other}</h2>
        <ul>
          <li>
            {l.qtCon} - 12 {l.hours} - {l.listener}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/oportuniza2019.pdf"
              title={`${l.certificate} ${l.listener} Oportuniza 2019`}
              {...defaultProps}
            >
              Oportuniza 2019
            </a>{" "}
            - 2 {l.hours} - {l.listener}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/CNCTIFBA2019.pdf"
              title={`${l.certificate} ${l.listener} ${l.snct}`}
              {...defaultProps}
            >
              {l.snct}
            </a>{" "}
            - 16 {l.hours} - {l.listener}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/large-files/certificates/enconecta2018.pdf"
              title={`${l.certificate} ${l.listener} Enconecta 2018`}
              {...defaultProps}
            >
              Enconecta 2018
            </a>{" "}
            - 8 {l.hours} - {l.listener}
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ResumeBody;
