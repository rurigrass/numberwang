"use client";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function Home() {
  const shapes = [
    "m 2 2.5 v 11 c 0 1.5 1.269531 1.492188 1.269531 1.492188 h 0.128907 c 0.246093 0.003906 0.488281 -0.050782 0.699218 -0.171876 l 9.796875 -5.597656 c 0.433594 -0.242187 0.65625 -0.734375 0.65625 -1.226562 c 0 -0.492188 -0.222656 -0.984375 -0.65625 -1.222656 l -9.796875 -5.597657 c -0.210937 -0.121093 -0.453125 -0.175781 -0.699218 -0.175781 h -0.128907 s -1.269531 0 -1.269531 1.5 z m 0 0",
    "M19,4V20a2,2,0,0,1-2,2H15a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h2A2,2,0,0,1,19,4ZM9,2H7A2,2,0,0,0,5,4V20a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V4A2,2,0,0,0,9,2Z",
  ];

  // correct play "M64 96L328 256 64 416 64 96Z"

  const paths = useRef<any[]>([]);
  const circles = useRef<any[]>([]);
  const numberOfCircles = 100;
  const radius = 30;

  useEffect(() => {
    const length = paths.current[0].getTotalLength();
    const step = length / numberOfCircles;

    circles.current.forEach((circle, i) => {
      const { x, y } = paths.current[0].getPointAtLength(i * step);
      animate(circle, { cx: x, cy: y }, { delay: 0.025 * i, ease: "easeOut" });
    });
  }, []);

  return (
    <main className="flex justify-center  items-center h-[100vh]">
      <svg className="w-[500px] " viewBox="-64 0 512 512">
        <path
          ref={(ref) => (paths.current[0] = ref)}
          className="hidden "
          id="primary"
          // d="M19,4V20a2,2,0,0,1-2,2H15a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h2A2,2,0,0,1,19,4ZM9,2H7A2,2,0,0,0,5,4V20a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V4A2,2,0,0,0,9,2Z"
          // d="M188,223.98828a12,12,0,0,1-12,12H80.53906c-.17969.0083-.36035.0127-.541.0127a12.00426,12.00426,0,0,1-9.4336-19.41993L158.01074,99.89258A36.00778,36.00778,0,1,0,94.82422,65.99023,11.99951,11.99951,0,1,1,72.7207,56.64209,60.00755,60.00755,0,1,1,177.74707,113.5542c-.11035.1626-.22363.32275-.3418.47949l-73.4082,97.95459H176A12.0006,12.0006,0,0,1,188,223.98828Z"
          d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z"
          // d="M64 96L328 256 64 416 64 96Z"
          style={{
            fill: "rgb(0, 0, 0)",
          }}
        />
        <g className="">
          {[...Array(numberOfCircles)].map((_, i) => {
            return (
              <circle
                className="fill-black"
                key={`c_${i}`}
                ref={(ref) => (circles.current[i] = ref)}
                r={radius}
                cx={256}
                cy={256}
              />
            );
          })}
        </g>
      </svg>
    </main>
  );
}
