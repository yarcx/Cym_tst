import {
  RiGovernmentFill,
  RiBookletLine,
  RiDoorOpenLine,
} from "react-icons/ri";
import { CgCircleci } from "react-icons/cg";
import { GrDocumentTime } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { BsExclamationCircleFill } from "react-icons/bs";
import {GiFlowerPot} from "react-icons/gi"
 
export const AllModulesContents = [
  {
    text: "Governance Portal",
    icon: RiGovernmentFill,
    exclamation: BsExclamationCircleFill,
  },
  {
    text: "Corporate Universe",
    icon: RiDoorOpenLine,
  },
  { text: "Contract Domain", icon: RiBookletLine },
  { text: "Investor Relations", icon: CgCircleci },
  { text: "Dispute Portfolio", icon: GiFlowerPot },
  { text: "Minute Book", icon: GrDocumentTime },
  { text: "Reporting Tool", icon: ImStatsBars },
  { text: "Attendance Register", icon: HiUserGroup },
];
