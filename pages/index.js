import AnmodningBar from "../components/organisms/anmodning-bar";
import CamGrid from "../components/organisms/camgrid";
import ReactionBar from "../components/organisms/reaction-bar";
import PageTemplate from "../components/templates/PageTemplate";


export default function Home() {
  const deltagere = [
    {
      name: "André",
      image: "/images/profiles/1.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/2.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/3.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/4.png",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/5.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/19.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/20.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/21.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/6.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/7.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/8.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/9.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/10.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/11.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/12.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/13.png",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/16.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/14.png",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/15.jpg",
      role: "deltager"
    },
    {
      name: "André",
      image: "/images/profiles/17.jpg",
      role: "deltager"
    },
    {
      name: "André",
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
