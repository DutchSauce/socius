import AnmodningBar from "../components/organisms/anmodning-bar";
import CamGrid from "../components/organisms/camgrid";
import ChatSidebar from "../components/organisms/chat-sidebar";
import ReactionBar from "../components/organisms/reaction-bar";
import PageTemplate from "../components/templates/PageTemplate";


export default function Home() {
  const deltagere = [
    {
      name: "André Hørslev Dijkuizen",
      image: "/images/profiles/1.jpg",
      role: "deltager"
    },
    {
      name: "Martin Tu Lan Nguyen",
      image: "/images/profiles/2.jpg",
      role: "deltager"
    },
    {
      name: "Frederik Harms Christensen",
      image: "/images/profiles/3.jpg",
      role: "deltager"
    },
    {
      name: "Tanja Knudsen",
      image: "/images/profiles/4.png",
      role: "deltager"
    },
    {
      name: "Mark Landvedt Reberholt",
      image: "/images/profiles/5.jpg",
      role: "deltager"
    },
    {
      name: "Lise Jørgensen",
      image: "/images/profiles/19.jpg",
      role: "deltager"
    },
    {
      name: "Britney Holse",
      image: "/images/profiles/20.jpg",
      role: "deltager"
    },
    {
      name: "Aura Mohammed",
      image: "/images/profiles/21.jpg",
      role: "deltager"
    },
    {
      name: "Nadine Li",
      image: "/images/profiles/6.jpg",
      role: "deltager"
    },
    {
      name: "Jens Phili",
      image: "/images/profiles/7.jpg",
      role: "deltager"
    },
    {
      name: "Christian Nielsen",
      image: "/images/profiles/8.jpg",
      role: "deltager"
    },
    {
      name: "Camilla Jensen",
      image: "/images/profiles/9.jpg",
      role: "deltager"
    },
    {
      name: "Omar Al-Badri",
      image: "/images/profiles/10.jpg",
      role: "deltager"
    },
    {
      name: "Ida Olsen",
      image: "/images/profiles/11.jpg",
      role: "deltager"
    },
    {
      name: "Gitte Frandsen",
      image: "/images/profiles/12.jpg",
      role: "deltager"
    },
    {
      name: "Jack Andreasen",
      image: "/images/profiles/13.png",
      role: "deltager"
    },
    {
      name: "Jens Hansen",
      image: "/images/profiles/16.jpg",
      role: "deltager"
    },
    {
      name: "Anne-Mone Brix",
      image: "/images/profiles/14.png",
      role: "deltager"
    },
    {
      name: "Magnus Pedersen",
      image: "/images/profiles/15.jpg",
      role: "deltager"
    },
    {
      name: "Betina Jackson",
      image: "/images/profiles/17.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/1.jpg",
      role: "deltager"
    },
    {
      name: "Kim Rex Nielsen",
      image: "/images/profiles/1.jpg",
      role: "deltager"
    },
    {
      name: "Anton Andersen",
      image: "/images/profiles/1.jpg",
      role: "deltager"
    },
    {
      name: "VÆRT",
      image: "/images/profiles/25.jpg",
      role: "vært"
    },
  ]
  return (
    <PageTemplate>
      <AnmodningBar />
      <CamGrid deltagere={deltagere}/>
      <ReactionBar />
    </PageTemplate>
  )
}
