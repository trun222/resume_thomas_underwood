import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import Card from "@/src/components/common/Card";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thomas Underwood - Resume</title>
        <meta
          name="description"
          content="My Resume website. The professional life of a frontend developer!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Links Bar */}
        {/* <div
          className={`flex flex-row justify-center ${styles.gradient} h-10 p-2`}
        >
          <p className="text-xl font-boldt text-white">Build something great</p>
        </div> */}

        {/* Profile Picture and Basic Job Description */}
        <div
          className={`sm:h-full lg:h-screen w-screen ${styles.geometricBackground}`}
        >
          <div className={`flex flex-col justify-start p-10`}>
            {/* Social Media */}
            <div className="flex flex-row justify-between">
              <div></div>
              <div className="flex flex-row">
                <a
                  className="hover:shadow-xl mx-2"
                  href="https://github.com/trun222"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithubSquare
                    className={`font-bold hover:text-teal-500`}
                    size={30}
                  />
                </a>

                <a
                  className="hover:shadow-xl mx-2"
                  href="https://www.linkedin.com/in/thomas-underwood-ii/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin
                    className={`font-bold hover:text-teal-500`}
                    size={30}
                  />
                </a>

                <a
                  className="hover:shadow-xl mx-2"
                  href="https://medium.com/@thomasunderwoodii"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaMedium
                    className={`font-bold hover:text-teal-500`}
                    size={30}
                  />
                </a>
              </div>
            </div>
            <h1 className="title-font hidden font-bold text-5xl text-center lg:block lg:text-7xl w-full my-6">
              Thomas Underwood
            </h1>
            <div className="flex flex-col items-center lg:flex-row mt-6">
              <h1 className="title-font font-bold text-5xl text-center lg:hidden lg:text-7xl w-full my-6">
                Thomas Underwood
              </h1>

              <img
                className="rounded-md h-[350px] w-[450px] sm:h-[450px] sm:w-[550px] lg:h-[550px] lg:w-[650px] xl:h-[550px] xl:w-[650px] "
                title="Thomas Underwood"
                src="/me.jpg"
              />
              <div
                className={`lg:relative h-[300px] w-[450px] sm:w-[550px] lg:w-[950px] xl:w-[650px] xl:h-[250px] lg:left-[-100px] lg:h-[425px] mt-4 bg-gradient-to-r ${styles.bgTertiary} hover:shadow-xl rounded-lg p-10`}
              >
                <h2
                  className={`title-font text-2xl lg:text-3xl font-black ${styles.colorPrimary}`}
                >
                  Lead Fullstack Developer at{" "}
                  <a
                    className="underline hover:text-white"
                    href="https://www.glossi.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Glossi
                  </a>
                </h2>
                <h2
                  className={`title-font text-xl lg:text-2xl font-medium  my-2`}
                >
                  <a
                    className="hover:text-white"
                    href="https://medium.com/@thomasunderwoodii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tech Blogger
                  </a>
                </h2>
                <h2 className="title-font text-xl lg:text-2xl font-medium  my-2">
                  <a
                    className="hover:text-white"
                    href="https://leetcode.com/trun222/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leet Coder
                  </a>
                </h2>
                <h3 className="title-font text-lg lg:text-xl font-thin mt-2">
                  Frontend, Backend, FullStack, DevOps, Project Management
                </h3>
              </div>
            </div>

            {/* Place Holder */}
            <h1></h1>
          </div>
        </div>

        {/* Work History */}
        <div className={`h-full w-full ${styles.animatedGradient} p-8`}>
          <h1 className={`title-font text-3xl lg:text-6xl font-bold `}>
            Work History
          </h1>

          <div className="flex flex-col items-center gap-8 mt-4">
            {/* Glossi */}
            <Card
              bg={styles.bgPrimary}
              color="text-white"
              title="Lead Developer - Glossi, Los Angeles, CA"
              description=" Technical lead of an engineering team that created the
                world's first photo-realistic video and product shots in a
                web browser with Unreal Engine 5. Planned company technical
                objectives on the executive leadership team and was responsible
                for coding, goal setting, project planning, and execution.
                Architected and implemented the product, supporting services,
                CI/CD, and Cloud infrastructure. Hired, trained, and led my
                engineering team. Worked across multiple supporting teams with
                QA, UI/UX, and the executive leadership team."
              skills={["Next.js", "React", "TypeScript", "Node.js", "AWS"]}
              float="right-20"
            />

            {/* Moonwalk */}
            <Card
              bg={styles.bgTertiary}
              color="text-black"
              title="Sr. UI Engineer - Moonwalk, New York City"
              description=" Lead frontend developer on a Next.js project that allowed us to
                sell NFTs. Wrote ~40% of the production code for an NFT release
                that netted the company over 1M dollars in revenue. Responsible
                for multiple web applications and backend services. Implemented
                production-ready code for multiple releases. Planned and
                executed large code migrations for Auth0, Web3 auth, and moving
                from React to Next.js. Actively troubleshot and fixed production
                performance issues and bugs."
              skills={[
                "Next.js",
                "Chakra",
                "GraphQL",
                "Typescript",
                "Auth0",
                "AWS",
              ]}
            />

            {/* Enosix */}
            <Card
              bg={styles.bgPrimary}
              color="text-white"
              title="Sr. Full Stack Developer - Enosix"
              description="Lead front-end developer for our SaaS application. Implemented
                OAuth 2.0 flow for our login process. Standardized and
                refactored our React routing and hooks. Taught other developer’s
                front-end best practices for consistent and performant front-end
                code. Pioneered E2E testing with docker, cypress, and xpra for
                automated testing. Created CI integrations for TestRail and our
                project planning platform ShortCut through a custom PHP plugin
                that I wrote. This resulted in saving our QA 30% of their time
                weekly on bug tracking and made ticket generation standardized
                across our development team."
              skills={["React", "SignalR", "Typescript", "Auth0", "AWS"]}
            />

            {/* Fischer */}
            <Card
              bg={styles.bgTertiary}
              color="text-black"
              title="Sr. Full Stack Developer - Fischer Homes"
              description="Architected and designed replacement web solutions for legacy
                software that was slated to be deprecated in 4 months. Lead and
                trained junior developers in front-end industry standards.
                Configured and deployed AWS services for supporting applications
                and services. Implemented modern OAuth 2.0 PKCE standards in
                front-end applications."
              skills={[
                "Vue.js",
                "Vuetify",
                "Fastify",
                "Typescript",
                "OAuth 2.0",
                "AWS",
              ]}
            />

            {/* ResolvIT */}
            <Card
              bg={styles.bgPrimary}
              color="text-white"
              title="Sr. Software Engineer - ResolvIT"
              description="Presided over a committee that focused on creating well-designed
                reusable components for GE Aviation. Lead the front-end
                development effort for a new notification service that is
                utilized throughout GE Aviation. Helped lead an effort to create
                a new design system for GE Aviation with the head of UI/UX.
                Redesigned a legacy front-end web application for a largely
                adopted service that is used to build, test and deploy code
                throughout GE Aviation. Primarily built high- performing, modern
                web applications for large groups of users. Participated in
                'big room' project planning for establishing features,
                tasks, and various priorities for Agile sprints. Worked
                frequently with back-end engineers and UI/UX teams in an Agile
                environment to deliver excellent software that satisfied the
                given requirements. Interviewed, hired, and trained several
                front-end developers."
              skills={[
                "Vue.js",
                "Vuetify",
                "Axios",
                "WebRTC",
                "Typescript",
                "Web Sockets",
                "AWS",
              ]}
            />
          </div>
        </div>

        <footer
          className={`flex flex-row justify-center ${styles.gradient} h-10 p-2`}
        >
          © Thomas Underwood {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
};

export default Home;
