import React from "react";
import GithubLogo from './github-logo.svg'
import LinkedinLogo from './linkedin-logo.svg'
import SlackLogo from './slack-logo.svg'
import YoutubeLogo from './youtube-logo.svg'
import TwitterLogo from './twitter-logo.svg'
import ArrowRight from './arrow-right.svg'
import CaretRight from './caret-right.svg'
import CaretDown from './caret-down.svg'
import CaretUp from './caret-up.svg'
import Circle from './circle.svg'
import Triangle from './triangle.svg'
import CirclesThreePlus from './circles-three-plus.svg'
import CheckCircle from './check-circle.svg'
import SignIn from './sign-in.svg'
import UserPlus from './user-plus.svg'
import MapTrifold from './map-trifold.svg'
import Plus from './plus.svg'
import Minus from './minus.svg'
import Terminal from './terminal.svg'
import RocketLaunch from './rocket-launch.svg'
import Users from './users.svg'
import ChatsCircle from './chats-circle.svg'
import BookOpen from './book-open.svg'
import Fingerprint from './fingerprint.svg'
import GitMerge from './git-merge.svg'
import Flag from './flag.svg'
import List from './list.svg'
import Code from './code.svg'
import LockOpen from './lock-open.svg'
import UserGear from './user-gear.svg'
import ShieldWarning from './shield-warning.svg'
import Key from './key.svg'

export {
  GithubLogo,
  LinkedinLogo,
  SlackLogo,
  YoutubeLogo,
  TwitterLogo,
  ArrowRight,
  CaretRight,
  CaretUp,
  CaretDown,
  Circle,
  Triangle,
  CirclesThreePlus,
  CheckCircle,
  SignIn,
  UserPlus,
  MapTrifold,
  Plus,
  Minus,
  Terminal,
  RocketLaunch,
  Users,
  ChatsCircle,
  BookOpen,
  Fingerprint,
  GitMerge,
  Flag,
  List,
  Code,
  LockOpen,
  UserGear,
  ShieldWarning,
  Key
}

const icons = [
  'GithubLogo',
  'LinkedinLogo',
  'SlackLogo',
  'YoutubeLogo',
  'TwitterLogo',
  'ArrowRight',
  'CaretRight',
  'CaretDown',
  'CaretUp',
  'Circle',
  'Triangle',
  'CirclesThreePlus',
  'CheckCircle',
  'SignIn',
  'UserPlus',
  'MapTrifold',
  'Plus',
  'Minus',
  'Terminal',
  'RocketLaunch',
  'Users',
  'ChatsCircle',
  'BookOpen',
  'Fingerprint',
  'GitMerge',
  'Flag',
  'List',
  'Code',
  'LockOpen',
  'UserGear',
  'ShieldWarning',
  'Key'
] as const

export type PhosphorIconTypes = typeof icons[number]

export * as PhosphorIcon from './'

