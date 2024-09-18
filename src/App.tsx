import './App.css'

import heroImg from './assets/hero.png'
import dumbbellImg from './assets/dumbbell.png'
import backgroundTextImg from './assets/background-text.png'

import machineImg from './assets/workout/machine.png'
import boxingImg from './assets/workout/boxing.png'
import tennisImg from './assets/workout/tennis.png'
import pilatesImg from './assets/workout/pilates.png'
import manualImg from './assets/workout/manual.png'
import ptImg from './assets/workout/pt.png'
import Workout from './components/workout/Workout'

const App: React.FC = () => {

  return (
    <div id="flux" className="min-h-screen max-w-[1440px] mx-auto font-inter">

      <header className="h-[157px] flex items-center gap-x-[75px] px-[65px]">
        <div className="flex flex-col">
          <div className="text-[64px] tracking-[4px] font-normal font-racing leading-[45px]">flux</div>
          <div className="text-[18px] font-normal text-right pr-0.5">fitness</div>
        </div>
        <nav className="flex flex-1 items-center gap-16">
          <ul className="flex flex-1 items-center gap-x-8 text-[20px] font-normal">
            <li>The Workout</li>
            <li>Studios</li>
            <li>Memberships</li>
          </ul>
          <ul className="flex items-center gap-x-6 text-xl">
            <li>Sign In</li>
            <li className="bg-[#F9F00C] rounded-[48px] px-5 py-4">Join Us</li>
          </ul>
        </nav>
      </header>

      <div className="main">

        <div className="hero w-full h-[570px] relative">
          <div className="hero-img">
            <img src={heroImg} className="w-full h-full opacity-50" />
          </div>
          <div className="hero-content absolute top-0 bottom-0 left-[72px] flex flex-col justify-center gap-y-4">
            <div className="hero-text text-[78px] font-bold leading-tight w-[705px]">
              Feel the Motion,
              Discover the Strength.
            </div>
            <div className="hero-button">
              <button className="bg-[#F9F00C] rounded-[48px] px-5 py-4 text-xl">Join the Flux</button>
            </div>
          </div>
        </div>

        <div className="mt-24 h-[1024px] flex justify-center items-center">
            <img src={backgroundTextImg} className='absolute -z-10' />

            <div className="grid grid-cols-3 grid-rows-2 gap-6 px-12 py-8">
              <Workout title="Machine Equipment" img={machineImg} />
              <Workout title="Boxing Classes" img={boxingImg} />
              <Workout title="Pilates Classes" img={pilatesImg} />
              <Workout title="Personal Training (PT)" img={ptImg} />
              <Workout title="Manual Equipment" img={manualImg} />
              <Workout title="Tennis Court" img={tennisImg} />
            </div>
        </div>


        <div className="mt-24">
          <img src={dumbbellImg} className="w-auto h-60 mx-auto"/>
        </div>

      </div>

    </div>
  )
}

export default App
