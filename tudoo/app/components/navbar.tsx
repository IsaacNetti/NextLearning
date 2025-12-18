import Link from "next/link"
import img1 from "@/public/Check.png"
import img2 from "@/public/user.png"

const Navbar = () => {
  return (
    <div className="md:absolute rounded-full flex items-center justify-center w-screen border-b-2 bg-white h-10">
       <Link href={"/"} className="absolute left-4.5 hover:border-transparent"><img src={img1.src} alt="" /></Link>
      <ul className=" ">
        <Link className="mx-10" href={"/"}>Home</Link>
        <Link className="mx-10" href={"/completed"}>Completed</Link>
      </ul>

      <Link href={"/"} className="absolute right-4.5"><img src={img2.src} className="h-5"/></Link>
    </div>
  )
}

export default Navbar
