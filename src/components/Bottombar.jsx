import { FaHome } from "react-icons/fa";
import { MdWork, MdLocalPostOffice} from "react-icons/md";

const Bottombar = () => {
  return (
    <div className="flex flex-col justify-end w-full h-screen fixed z-10">
        <nav className="border-2 border-slate-700 flex flex-row items-center justify-between bg-slate-950 backdrop:blur-md bg-opacity-30 rounded-lg px-5 mx-5 mb-3 py-2">
            <div>
              <FaHome></FaHome>
            </div>
            <div>
              <MdWork></MdWork>
            </div>
            <div>
            <MdLocalPostOffice></MdLocalPostOffice>
            </div>
        </nav>
    </div>
  )
}

export default Bottombar