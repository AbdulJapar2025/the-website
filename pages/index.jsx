import Link from "next/link";
import { useState } from "react";
import AnimatedMessage from "../components/AnimatedMessage";
import DelayCursor from "../components/DelayCursor";
import AnimeCTAButton from "@components/ayuAtama/button";
import FakeFemboyPopup from "@components/ayuAtama/fakePopup";
import MovingPuzzleButton from "../components/MovingPuzzleButton";
import AICopilot from "@components/AICopilot/AICopilot";

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

      <AnimatedMessage />
      <DelayCursor />
      <Visitor />
      {/* <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style> */}
      <AICopilot />
    </div>
  );
}
