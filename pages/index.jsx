import Link from "next/link";
import AnimatedMessage from "../components/AnimatedMessage";
import DelayCursor from "../components/DelayCursor";
import AnimeCTAButton from "@components/ayuAtama/button";
import FakeFemboyPopup from "@components/ayuAtama/fakePopup";
import MovingPuzzleButton from "../components/MovingPuzzleButton";

export default function Index() {
  function Visitor() {
    return (
      <div>
        <a href="https://flagcounter.me/details/gt8">
          <img src="https://flagcounter.me/gt8/" alt="Flag Counter" />
        </a>
      </div>
    );
  }
  return (
    <div>
      <FakeFemboyPopup />
      <AnimeCTAButton />
      <MovingPuzzleButton />
      <h2>Selamat datang!</h2>
      <p>
        <Link href="/home">
          <button className="bg-blue-500 rounded-lg p-1 mr-1 hover:scale-105">
            MULAI
          </button>
        </Link>
        <Link href="/nbrthx">
          <button className="bg-blue-500 rounded-lg p-1 mr-1 hover:scale-105">
            SVGSTEGO
          </button>
        </Link>
        <Link href="/doom">
          <button className="bg-red-500 rounded-lg p-1 mr-1 text-white hover:scale-105">
            DOOM
          </button>
        </Link>
        <Link href="/vinrex/index.html">
          <button
            className="bg-blue-500 rounded-lg p-1 mr-1 mt-1 hover:scale-105"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <img
              src="/vinrex/assets/default_100_percent/100-error-offline.png"
              alt="Vinrex Icon"
              style={{ width: "24px", height: "24px" }}
            />
            VINREX GAME
          </button>
        </Link>
        <Link href="/snekabsurd">
          <button className="bg-blue-500 rounded-lg p-1 mr-1 mt-1 hover:scale-105">
            Absurd Snek Gem
          </button>
        </Link>
        <Link href="/bola-ajaib">
          <button className="bg-blue-500 rounded-lg p-1 mr-1 mt-1 hover:scale-105">
            Bola ajaib
          </button>
        </Link>
        <Link href="/gabut">
          <button className="bg-blue-500 rounded-lg p-1 mr-1 mt-1 hover:scale-105">
            gabut
          </button>
        </Link>
        <Link href="/guestbook">
          <button className="bg-blue-500 rounded-lg p-1 mr-1 mt-1 hover:scale-105">
            guestbook
          </button>
        </Link>
        <Link href="/guestbook">
          <button>guestbook</button>
        </Link>
      </p>
      <AnimatedMessage />
      <DelayCursor delay={0.01} />
      <Visitor />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}
