import {CgMoreO} from "react-icons/cg";
import Link from "next/link";
export default function Projects() {
  return (
    <>
      <div className="projectscontainer">
        <div className="projectborder">
          <img src="https://telegra.ph/file/db373f7cf52513c97fe76.jpg" alt="Social Media" />
        <Link href="https://teer.id/genzai" target="_blank">
        <CgMoreO className="visiticon"/>
        </Link>
        </div>
        <div className="projectborder">
        <img src="https://telegra.ph/file/6105567ccd68513eb8ce5.jpg" alt="" />
        <h1>Error-page</h1>
        <Link href="https://404-not-found" target="_blank">
        <CgMoreO className="visiticon"/>
        </Link>
        </div>
        <div className="projectborder">
        <img src="https://telegra.ph/file/6105567ccd68513eb8ce5.jpg"  />
        <h1>Error-page</h1>
        <Link href="https://404-not-found" target="_blank">
        <CgMoreO className="visiticon"/>
        </Link>
        </div>
      </div>
    </>
  )
}
