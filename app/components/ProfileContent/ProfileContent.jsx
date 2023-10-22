import Image from "next/image";

import "./ProfileContent.scss";
import DynamicContainer from "./DynamicContainer";
// import AvatarBackround from "../../assets/387556190_341988828203849_1151008598085885728_n.jpg";
// import profImage from "../../assets/prof-img.jpg";

const ProfileContent = () => {
  return (
    <div className="ProfileContentContainer">
      <section className="AvatarInfoSection">
        {/* <img src={AvatarBackround} width={"700px"} /> */}
        {/* <Image src="/387556190_341988828203849_1151008598085885728_n.jpg" alt="bg-lunar" width={600} height={600} /> */}
        <div className="backgroundContainer">
          <div className="octagonWrap">
            <div className="octagon">
              {/* <img src={profImage} width={"340px"} />
               */}
              <Image
                src="/prof-img.jpg" // Path to your image in the public directory
                alt="Lunar"
                width={320} // Set the desired width
                height={340} // Set the desired height
                id="profImage"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="DynamicContent">
        <DynamicContainer />
      </section>
    </div>
  );
};

export default ProfileContent;
