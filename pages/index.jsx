import Link from "next/link";
import AnimatedMessage from "../components/AnimatedMessage";
import DelayCursor from "../components/DelayCursor";

export default function Index() {
  return (
    <div>
      <h2>Selamat datang!</h2>
      <p>
        <Link href="/home">
          <button>MULAI</button>
        </Link>
        <Link href="/nbrthx">
          <button style={{ marginLeft: '5px' }}>SVGSTEGO</button>
        </Link>
        <Link href="/doom">
          <button style={{ marginLeft: '5px', backgroundColor: 'red', color: 'white' }}>
            DOOM
          </button>
        </Link>
        <Link href="/gabut">
          <button>gabut</button>
        </Link>
      </p>
      <AnimatedMessage />
      <DelayCursor delay={0.05} />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}
