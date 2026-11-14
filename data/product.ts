import type { LucideIcon } from "lucide-react"
import {
  ChartLine,
  CircleCheck,
  ClipboardPen,
  Database,
  FileQuestionMark,
  HandHeart,
  HandPlatter,
  KeyRound,
  Lock,
  Megaphone,
  MonitorSmartphone,
  NotepadText,
  QrCode,
  ShieldLock,
  Signature,
  Store,
  Timer,
  UserCog,
  WifiOff,
} from "lucide-react"

export type IconItem = { Icon: LucideIcon; title: string; body: string }

export const AUDIENCES: IconItem[] = [
  {
    Icon: Store,
    title: "Non-profits",
    body: "Neighborhood sites offering rescued food resources and dignity to members in our community.",
  },
  {
    Icon: HandHeart,
    title: "Volunteers",
    body: "Community members who give their time and energy to ensure their community is served.",
  },
  {
    Icon: HandPlatter,
    title: "Neighbors",
    body: "Your clients, the next door neighbor. People who fights to make ends meet and feed their family.",
  },
]

export const TOOLS: IconItem[] = [
  { Icon: Megaphone, title: "Send Announcements", body: "Send SMS, Email, and or app notifications to your participants for any alerts." },
  { Icon: QrCode, title: "QR Code Scanning", body: "Assign and scan QR Code badges for your neighbors and volunteers to use as their own ID every visit." },
  { Icon: UserCog, title: "Volunteer Roles", body: "Assign roles to your volunteers to set expectations ahead of the volunteer shift" },
  { Icon: CircleCheck, title: "Custom Intake", body: "Define events that are appointment or walk-in based and be alerted if someone was already checked-in." },
  { Icon: Signature, title: "Electronic Signatures", body: "Upload documents and request signatures or reviews - after which all parties can access them." },
  { Icon: ChartLine, title: "Dynamic Reports", body: "Generate ready-to-export anonymized reports to visualize your community demographics." },
  { Icon: MonitorSmartphone, title: "Virtual Distributions", body: "Set instructions and schedules so volunteers and neighbors know what to expect." },
  { Icon: WifiOff, title: "Offline Support", body: "Operate your distributions and shifts without the need of a stable internet connection." },
  { Icon: Lock, title: "Secure by Design", body: "From encrypted data to secure sign-ins, your community’s data is protected at every step." },
  { Icon: ClipboardPen, title: "Neighbor Tasks", body: "Hold your neighbors accountable and assign tasks to follow up on their goals." },
  { Icon: FileQuestionMark, title: "Participant Surveys", body: "Curious about your community? Target or randomly issue surveys & visualize the data upon completion." },
  { Icon: Timer, title: "Time Tracker", body: "Log every volunteer hour and recognize your most dedicated helpers." },
]

export const SECURITY: IconItem[] = [
  { Icon: ShieldLock, title: "Access Control", body: "Customize your staff privileges to prevent everyone from accessing all sensitive data." },
  { Icon: Database, title: "Individual Database", body: "We partition our cloud application to ensure that all data you collect belongs only to your organization." },
  { Icon: NotepadText, title: "Audit Logs", body: "Analyze how your staff utilize the software with detailed logs describing staff activity." },
  { Icon: KeyRound, title: "Multi-factor Authentication", body: "A stolen password isn’t enough to get in. Every account must confirm sign-ins with a second method." },
]
