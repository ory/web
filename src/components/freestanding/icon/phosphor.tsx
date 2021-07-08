import ArrowRightBold from '../../../images/phosphor/arrow-right-bold.svg'
import ArrowRight from '../../../images/phosphor/arrow-right.svg'
import BookOpenDuotone from '../../../images/phosphor/book-open-duotone.svg'
import BookOpen from '../../../images/phosphor/book-open.svg'
import CaretDown from '../../../images/phosphor/caret-down.svg'
import CaretRight from '../../../images/phosphor/caret-right.svg'
import CaretUp from '../../../images/phosphor/caret-up.svg'
import ChatsCircleDuotone from '../../../images/phosphor/chats-circle-duotone.svg'
import ChatsCircle from '../../../images/phosphor/chats-circle.svg'
import CheckCircleBold from '../../../images/phosphor/check-circle-bold.svg'
import CheckCircleDuotone from '../../../images/phosphor/check-circle-duotone.svg'
import CheckCircle from '../../../images/phosphor/check-circle.svg'
import Circle from '../../../images/phosphor/circle.svg'
import CirclesThreePlusDuotone from '../../../images/phosphor/circles-three-plus-duotone.svg'
import CirclesThreePlus from '../../../images/phosphor/circles-three-plus.svg'
import CodeDuotone from '../../../images/phosphor/code-duotone.svg'
import Code from '../../../images/phosphor/code.svg'
import FingerprintDuotone from '../../../images/phosphor/fingerprint-duotone.svg'
import Fingerprint from '../../../images/phosphor/fingerprint.svg'
import FlagBold from '../../../images/phosphor/flag-bold.svg'
import FlagDuotone from '../../../images/phosphor/flag-duotone.svg'
import Flag from '../../../images/phosphor/flag.svg'
import GitMergeDuotone from '../../../images/phosphor/git-merge-duotone.svg'
import GitMerge from '../../../images/phosphor/git-merge.svg'
import GithubLogoDuotone from '../../../images/phosphor/github-logo-duotone.svg'
import GithubLogo from '../../../images/phosphor/github-logo.svg'
import KeyDuotone from '../../../images/phosphor/key-duotone.svg'
import Key from '../../../images/phosphor/key.svg'
import LinkedinLogoDuotone from '../../../images/phosphor/linkedin-logo-duotone.svg'
import LinkedinLogo from '../../../images/phosphor/linkedin-logo.svg'
import List from '../../../images/phosphor/list.svg'
import LockOpenDuotone from '../../../images/phosphor/lock-open-duotone.svg'
import LockOpen from '../../../images/phosphor/lock-open.svg'
import MapTrifold from '../../../images/phosphor/map-trifold.svg'
import Minus from '../../../images/phosphor/minus.svg'
import PlusCircleBold from '../../../images/phosphor/plus-circle-bold.svg'
import PlusCircle from '../../../images/phosphor/plus-circle.svg'
import Plus from '../../../images/phosphor/plus.svg'
import RocketLaunch from '../../../images/phosphor/rocket-launch.svg'
import ShieldWarningDuotone from '../../../images/phosphor/shield-warning-duotone.svg'
import ShieldWarning from '../../../images/phosphor/shield-warning.svg'
import SignIn from '../../../images/phosphor/sign-in.svg'
import SlackLogoDuotone from '../../../images/phosphor/slack-logo-duotone.svg'
import SlackLogo from '../../../images/phosphor/slack-logo.svg'
import TerminalDuotone from '../../../images/phosphor/terminal-duotone.svg'
import Terminal from '../../../images/phosphor/terminal.svg'
import Triangle from '../../../images/phosphor/triangle.svg'
import TwitterLogoDuotone from '../../../images/phosphor/twitter-logo-duotone.svg'
import TwitterLogo from '../../../images/phosphor/twitter-logo.svg'
import UserGearDuotone from '../../../images/phosphor/user-gear-duotone.svg'
import UserGear from '../../../images/phosphor/user-gear.svg'
import UserPlusDuotone from '../../../images/phosphor/user-plus-duotone.svg'
import UserPlus from '../../../images/phosphor/user-plus.svg'
import UsersDuotone from '../../../images/phosphor/users-duotone.svg'
import Users from '../../../images/phosphor/users.svg'
import YoutubeLogoDuotone from '../../../images/phosphor/youtube-logo-duotone.svg'
import YoutubeLogo from '../../../images/phosphor/youtube-logo.svg'

export {
  GithubLogo,
  GithubLogoDuotone,
  LinkedinLogo,
  LinkedinLogoDuotone,
  SlackLogo,
  SlackLogoDuotone,
  YoutubeLogo,
  YoutubeLogoDuotone,
  TwitterLogo,
  TwitterLogoDuotone,
  ArrowRight,
  ArrowRightBold,
  CaretRight,
  CaretUp,
  CaretDown,
  Circle,
  Triangle,
  CirclesThreePlus,
  CirclesThreePlusDuotone,
  CheckCircle,
  CheckCircleBold,
  CheckCircleDuotone,
  SignIn,
  UserPlus,
  UserPlusDuotone,
  MapTrifold,
  Plus,
  PlusCircle,
  PlusCircleBold,
  Minus,
  Terminal,
  TerminalDuotone,
  RocketLaunch,
  Users,
  UsersDuotone,
  ChatsCircle,
  ChatsCircleDuotone,
  BookOpen,
  BookOpenDuotone,
  Fingerprint,
  FingerprintDuotone,
  GitMerge,
  GitMergeDuotone,
  Flag,
  FlagBold,
  FlagDuotone,
  List,
  Code,
  CodeDuotone,
  LockOpen,
  LockOpenDuotone,
  UserGear,
  UserGearDuotone,
  ShieldWarning,
  ShieldWarningDuotone,
  KeyDuotone,
  Key
}
type IconName =
  | 'GithubLogo'
  | 'LinkedinLogo'
  | 'SlackLogo'
  | 'YoutubeLogo'
  | 'TwitterLogo'
  | 'ArrowRight'
  | 'CaretRight'
  | 'CaretDown'
  | 'CaretUp'
  | 'Circle'
  | 'Triangle'
  | 'CirclesThreePlus'
  | 'CheckCircle'
  | 'SignIn'
  | 'UserPlus'
  | 'MapTrifold'
  | 'Plus'
  | 'PlusCircle'
  | 'Minus'
  | 'Terminal'
  | 'RocketLaunch'
  | 'Users'
  | 'ChatsCircle'
  | 'BookOpen'
  | 'Fingerprint'
  | 'GitMerge'
  | 'Flag'
  | 'List'
  | 'Code'
  | 'LockOpen'
  | 'UserGear'
  | 'ShieldWarning'
  | 'Key'

type IconType = 'Duotone' | 'Bold'

export type PhosphorIconTypes = IconName | `${IconName}${IconType}`
