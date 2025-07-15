import { CiStar } from "react-icons/ci";
import { FaToolbox } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GiHighPunch } from "react-icons/gi";
import { LuSwords } from "react-icons/lu";
import { FaChess } from "react-icons/fa";
import { GiSawedOffShotgun } from "react-icons/gi";
import { GiMountainCave } from "react-icons/gi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { GiRaceCar } from "react-icons/gi";
import { FaFootballBall } from "react-icons/fa";
const filterNames = [
    {name:"Wishlist",icon:<CiStar />},
    {name:"Ratings",icon:<FaToolbox />},
    {name:"Reviews",icon:<MdOutlineRateReview />},
    {name:"Action",icon:<GiHighPunch />},
    {name:"Strategy",icon: <FaChess />},
    {name:"RPG",icon:<LuSwords />},
    {name:"Shooter",icon:<GiSawedOffShotgun />},
    {name:"Adventure",icon:<GiMountainCave />},
    {name:"Puzzle",icon:<IoExtensionPuzzleOutline />},
    {name:"Racing",icon:<GiRaceCar />},
    {name:"Sports",icon:<FaFootballBall />}
];

export default filterNames;