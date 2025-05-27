import gsap from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

gsap.registerPlugin(MorphSVGPlugin)

// morph on start
const morph = gsap.to("#circle", {
  duration: 1,
  // morph circle into this other svg (=> using the two d paths of the shapes)
  morphSVG: "#hippo",
  repeat: 1,
  yoyo: true,
  repeatDelay: 0.3,
  paused: true
});

document.getElementById("play").onclick = function () {
  morph.restart(true);
};
