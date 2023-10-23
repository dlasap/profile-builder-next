import Link from "next/link";
import "./UnderConstruction.scss";

export default function UnderConstruction() {
  return (
    <div className="UnderConstruction">
      <div className="header">Sorry... Mahina ang Kalaban</div>
      <div className="description">Under Construction... Please come back at a later time.</div>
      <div className="buttonContainer">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
