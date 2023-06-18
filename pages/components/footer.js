import {BsInstagram, BsTiktok, BsTelegram, BsWhatsApp} from "react-icons/bs";
import { useRouter } from 'next/router'
export default function footer() {
    const router = useRouter()
  return (
    <>
      <footer>
        <p>Follow me on Social Medias: </p>
        <div className="icons">
        <BsInstagram className="button" onClick={() => router.push('https://www.instagram.com/genzai66')}/>
        <BsTiktok className="button" onClick={() => router.push('https://vt.tiktok.com/Available6664')}/>
        <BsTelegram className="button" onClick={() => router.push('https://t.me/genzai666')}/>
        <BsWhatsApp className="button" onClick={() => router.push('https://wa.me/message/MILF7ER53RI2A1')}/>
        </div>
      </footer>
    </>
  )
}
