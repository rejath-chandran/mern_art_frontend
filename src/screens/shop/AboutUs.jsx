import { GetSystemDetails } from "../../services/AdminQry";
import { WavyBackground } from "../../ui/wavy-background";
function AboutUs() {
  const { data, isLoading } = GetSystemDetails();
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          {isLoading ? "" : `${data.name}`.toUpperCase()}
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          {isLoading ? "" : `${data.about}`.toUpperCase()}
        </p>
      </WavyBackground>
    </>
  );
}

export default AboutUs;
