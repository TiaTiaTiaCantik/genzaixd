import {BsInstagram} from "react-icons/bs";
import { useRouter } from 'next/router'
export default function footer() {
    const router = useRouter()
  return (
    <>
      <footer>
        <p>Follow me on Social Medias: </p>
        <div className="icons">
        <BsInstagram className="button" onClick={() => router.push('https://www.instagram.com/genzai666')}/>
        </div>
      </footer>
    </>
  )
}
