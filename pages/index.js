import Forstaarikke from "../components/molecyles/reactions/forstaarikke";
import Slowdown from "../components/molecyles/reactions/slowdown";
import Givermening from "../components/molecyles/reactions/givermening";
import Vildmeddet from "../components/molecyles/reactions/vildmeddet";


export default function Home() {
  return (
    <div>
      <Slowdown />
      <Forstaarikke />
      <Givermening />
      <Vildmeddet />
    </div>
  )
}
