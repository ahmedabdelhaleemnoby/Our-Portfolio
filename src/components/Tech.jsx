import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  const numServicesToDisplay = window.innerWidth < 1024 ? 6: technologies.length;
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.slice(0, numServicesToDisplay).map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
