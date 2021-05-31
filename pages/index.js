import AnmodningBar from "../components/organisms/anmodning-bar";
import CamGrid from "../components/organisms/camgrid";
import ReactionBar from "../components/organisms/reaction-bar";
import PageTemplate from "../components/templates/PageTemplate";


export default function Home() {
  const deltagere = [
    {
      name: "André",
      image: "/images/profiles/1.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/2.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/3.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/4.png"
    },
    {
      name: "André",
      image: "/images/profiles/5.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/19.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/20.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/21.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/6.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/7.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/8.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/9.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/10.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/11.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/12.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/13.png"
    },
    {
      name: "André",
      image: "/images/profiles/1.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/1.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/16.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/14.png"
    },
    {
      name: "André",
      image: "/images/profiles/15.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/17.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/1.jpg"
    },
    {
      name: "André",
      image: "/images/profiles/1.jpg"
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
