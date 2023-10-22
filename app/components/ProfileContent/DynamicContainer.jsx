import HomeContent from "./Contents/HomeContent";
import "./DynamicContainer.scss";

const DynamicContainer = () => {
  return (
    <div className="DynamicContainerContainer">
      <HomeContent />
      <div></div>
    </div>
  );
};

export default DynamicContainer;
