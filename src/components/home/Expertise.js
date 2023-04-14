// ! Imports
// Import icons
import {
  ComputerDesktopIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon, CodeBracketIcon
} from "@heroicons/react/24/outline";
// Import data
import { proficiencies } from "../../data/resumeData";
// Import image
import codeScreenshot from "../../assets/images/code-screenshot.png";



// ! Function
export default function Expertise() {
  // * Frontend
  // Not currently being used, as hard coding the data within these elements has made for easier styling
  const frontendList = proficiencies.frontend.length ? (
    proficiencies.frontend.map((frontend, index) => (
      <li key={index}>{frontend}</li>
    ))
  ) : (
    <p>No data to show.</p>
  );

  // * Backend
  // Not currently being used, as hard coding the data within these elements has made for easier styling
  const backendList = proficiencies.backend.length ? (
    proficiencies.backend.map((backend, index) => (
      <li key={index}>{backend}</li>
    ))
  ) : (
    <p>No data to show.</p>
  );

  // * Tools
  // Not currently being used, as hard coding the data within these elements has made for easier styling

  const toolsList = proficiencies.tools.length ? (
    proficiencies.tools.map((tools, index) => <li key={index}>{tools}</li>)
  ) : (
    <p>No data to show.</p>
  );

  // ** RETURN **
  return (
    <>
      <div id="expertise" className="mt-9 px-8">
        <h1 className="flex justify-center xl:mt-16 text-5xl font-bold tracking-tight text-secondary sm:text-7xl">
          <span className="backgroundUnderline">My Expertise </span>
        </h1>
        {/* Front to Tools div w/ dividers */}
<div className="mt-4">
        {/* Inner Div */}
        <div className="h-full pt-10 pb-5 flex flex-wrap lg:justify-between 2xs:justify-center">
          {/* Frontend */}
          {/* sm:mr-3 lg:mr-0 */}
          <div className="rounded-lg shadow-sm w-96 2xs:mb-4 xl:mb-0 p-5 bg-primary-light">
            <div className="px-5">
              {/* Heading with icon */}
              <div className="p-2 flex flex-row justify-center items-end">
                <ComputerDesktopIcon className="h-12 w-12 mr-5 " />
                <h2 className="text-secondary text-5xl font-medium frontendUnderline">
                  Frontend
                </h2>
              </div>
              {/* Data */}
              <div className="m-4 gap-4 flex flex-row justify-around text-silver leading-8 font-inconsolata font-medium text-xl">
                <div className="flex justify-center">
                  <ul className="">
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Handlebars</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ul>
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Material UI</li>
                    <li>Framer Motion</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*  Green divider */}
          <div className="sm:p-3 lg:p-0 visible lg:visible 2xs:hidden">
            <div className="w-0.5 h-64 mt-6 bg-green " />
          </div>

          {/* Backend */}
          <div className="rounded-lg shadow-sm w-96 2xs:mb-4 xl:mb-0 p-5  bg-primary-light">
            <div className="px-5">
              {/* Heading with icon */}
              <div className="p-2 flex flex-row justify-center items-end">
                <Cog8ToothIcon className="h-12 w-12 mr-5 " />
                <h2 className="text-secondary text-5xl font-medium backendUnderline">
                  Backend
                </h2>
              </div>
              {/* Data */}
              <div className="m-4 gap-4 flex flex-row justify-around text-silver leading-8 font-inconsolata font-medium text-xl">
                <div className="flex justify-center">
                  <ul className="">
                    <li>MySQL</li>
                    <li>Node.js</li>
                    <li>Mongoose</li>
                    <li>Postman</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ul>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>GraphQL</li>
                    <li>Inquirer.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="sm:p-3 lg:p-0 visible lg:visible 2xs:hidden">
            <div className="w-0.5 h-64 mt-6 bg-green" />
          </div>

          {/* Tools */}
          <div className="rounded-lg shadow-sm w-96 2xs:pt-4 xl:mr-0 xl:mt-0 p-5 bg-primary-light">
            <div className="px-5">
              {/* Heading with icon */}
              <div className="p-2 flex flex-row justify-center items-end">
                <WrenchScrewdriverIcon className="h-12 w-12 mr-5 " />
                <h2 className="text-secondary text-5xl font-medium toolsUnderline">
                  Tools
                </h2>
              </div>
              {/* Data */}
              <div className="m-4 gap-4 flex flex-row justify-around text-silver leading-8 font-inconsolata font-medium text-xl">
                <div className="flex justify-center">
                  <ul className="">
                    <li>Git (CLI)</li>
                    <li>GitHub Pages</li>
                    <li>Deta</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ul>
                    <li>GitHub (CI)</li>
                    <li>Heroku</li>
                    <li>Cyclic</li>
                    <li>Whimsical</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
        </div>
{/* BACKGROUND IMG EXPERIMENTS */}
          {/* Bracket Icon */}
          {/* <CodeBracketIcon className="bg-primary text-blue opacity-25 h-56 w-56" /> */}
        {/* <img src={codeScreenshot} className="opacity-25"/> */}

        {/* <div className="expertiseBgImage h-full w-full"> <p>test div</p></div> */}
        {/* Additional Background */}
        {/* <div>
          <div className="flex justify-center pt-8">
            <h2>Testing Div</h2>
            <img src={bgImg} />
          </div>
        </div> */}
      </div>
    </>
  );
}