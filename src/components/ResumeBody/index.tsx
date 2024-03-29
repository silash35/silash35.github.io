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
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/eletromecanica.pdf"
              title={`${l.certificate} ${l.electromechanicalTechnician}`}
              {...defaultProps}
            >
              {l.electromechanicalTechnician}
            </a>
          </li>
        </ul>
      </article>

      <article>
        <h2>{l.work}</h2>
        <section>
          <h3>
            <a href="https://optimusjr.com.br/" title="OPTIMUS Jr. Website" {...defaultProps}>
              OPTIMUS Jr. Controle e Automação
            </a>
          </h3>
          <small>
            {l.directorOPTIMUS} - {l.directorOPTIMUSDate}
          </small>
          <small>
            {l.performanceManagerOPTIMUS} - {l.performanceManagerOPTIMUSDate}
          </small>
          <small>
            {l.traineeOPTIMUS} - {l.traineeOPTIMUSDate}
          </small>

          <ul>
            <li>{l.OPTIMUSActivity1}</li>
            <li>{l.OPTIMUSActivity2}</li>
            <li>{l.OPTIMUSActivity3}</li>
          </ul>
        </section>

        <section>
          <h3>MakiLab Serviços</h3>
          <small>
            {l.internMakilab} - {l.internMakilabDate}
          </small>

          <ul>
            <li>{l.MakilabActivity1}</li>
            <li>{l.MakilabActivity2}</li>
            <li>{l.MakilabActivity3}</li>
          </ul>
        </section>
      </article>

      <article>
        <h2>{l.skills}</h2>
        <ul>
          <li>{l.videoEditing}</li>
          <li>{l.cPlusPlus}</li>
          <li>
            <Link href="/portfolio" title={l.frontEndLink}>
              {l.frontEnd}
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
              href="https://silash35.gitlab.io/certificates/cursoRobotica1.pdf"
              title={`${l.certificate} ${l.robotics}`}
              {...defaultProps}
            >
              {l.robotics}
            </a>{" "}
            - 32 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/senaiTIC.pdf"
              title={`${l.certificate} ${l.tic}`}
              {...defaultProps}
            >
              {l.tic}
            </a>{" "}
            - 14 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/senaiEmpreendedorismo.pdf"
              title={`${l.certificate} ${l.entrepreneurship}`}
              {...defaultProps}
            >
              {l.entrepreneurship}
            </a>{" "}
            - 14 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/senaiLogicaDaProgramacao.pdf"
              title={`${l.certificate} ${l.programmingLogic}`}
              {...defaultProps}
            >
              {l.programmingLogic}
            </a>{" "}
            - 14 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/megaCursos5.pdf"
              title={`${l.certificate} ${l.microcomputerMaintenance}`}
              {...defaultProps}
            >
              {l.microcomputerMaintenance}
            </a>{" "}
            - 48 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/megaCursos4.pdf"
              title={`${l.certificate} ${l.administrationAssistant}`}
              {...defaultProps}
            >
              {l.administrationAssistant}
            </a>{" "}
            - 48 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/megaCursos3.pdf"
              title={`${l.certificate} ${l.webDesign}`}
              {...defaultProps}
            >
              {l.webDesign}
            </a>{" "}
            - 48 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/megaCursos2.pdf"
              title={`${l.certificate} ${l.microsoftOffice}`}
              {...defaultProps}
            >
              {l.microsoftOffice}
            </a>{" "}
            - 32 {l.hours}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/megaCursos1.pdf"
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
              href="https://silash35.gitlab.io/certificates/ALLingles4.pdf"
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
            href="https://silash35.gitlab.io/certificates/roboticaVoluntario.pdf"
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
            <a
              href="https://silash35.gitlab.io/certificates/UFBAMostraSuaCara.pdf"
              title={`${l.certificate} ${l.monitor} UFBA: Mostra a Sua Cara 2023`}
              {...defaultProps}
            >
              UFBA: Mostra a Sua Cara 2023
            </a>{" "}
            - 10 {l.hours} - {l.monitor}
          </li>
          <li>
            {l.qtCon} - 12 {l.hours} - {l.listener}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/oportuniza2019.pdf"
              title={`${l.certificate} ${l.listener} Oportuniza 2019`}
              {...defaultProps}
            >
              Oportuniza 2019
            </a>{" "}
            - 2 {l.hours} - {l.listener}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/CNCTIFBA2019.pdf"
              title={`${l.certificate} ${l.listener} ${l.snct}`}
              {...defaultProps}
            >
              {l.snct}
            </a>{" "}
            - 16 {l.hours} - {l.listener}
          </li>
          <li>
            <a
              href="https://silash35.gitlab.io/certificates/enconecta2018.pdf"
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
