import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import "./Header.scss";

export default function Header({ firstName, lastName, age, location, occupation }) {
  return (
    <div className="ProfileBannerContainer">
      <div className="ProfileNameAndInfo">
        <b>
          {" "}
          {firstName} {lastName}
        </b>
        <div className="addtlInfo">
          <div>{age}</div> <div>{occupation}</div>
        </div>
      </div>
      <div className="LogoLinks">
        <a href="https://www.linkedin.com/in/lunarkaye/?originalSubdomain=ph" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/lunarkaye/?originalSubdomain=ph" target="_blank">
          <AiFillFacebook />
        </a>
        <a href="https://www.linkedin.com/in/lunarkaye/?originalSubdomain=ph" target="_blank">
          <AiFillInstagram />
        </a>
      </div>
      <div className="Any">{/* any content on right side */}</div>
    </div>
  );
}
