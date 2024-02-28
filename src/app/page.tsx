"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const shapes = [
    "m 2 2.5 v 11 c 0 1.5 1.269531 1.492188 1.269531 1.492188 h 0.128907 c 0.246093 0.003906 0.488281 -0.050782 0.699218 -0.171876 l 9.796875 -5.597656 c 0.433594 -0.242187 0.65625 -0.734375 0.65625 -1.226562 c 0 -0.492188 -0.222656 -0.984375 -0.65625 -1.222656 l -9.796875 -5.597657 c -0.210937 -0.121093 -0.453125 -0.175781 -0.699218 -0.175781 h -0.128907 s -1.269531 0 -1.269531 1.5 z m 0 0",
    "M19,4V20a2,2,0,0,1-2,2H15a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h2A2,2,0,0,1,19,4ZM9,2H7A2,2,0,0,0,5,4V20a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V4A2,2,0,0,0,9,2Z",
  ];

  const paths = useRef<string[]>([]);
  const circles = useRef<string[]>([]);
  const numberOfCircles = 30;
  const radius = 20;

  useEffect(() => {
    const length = paths.current[0].getTotalLength();
  }, []);

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <svg className="w-[500px]" viewBox="0 0 256 256">
        <path
          ref={(ref) => (paths.current[0] = ref)}
          className="hidden"
          id="primary"
          d="M19,4V20a2,2,0,0,1-2,2H15a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h2A2,2,0,0,1,19,4ZM9,2H7A2,2,0,0,0,5,4V20a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V4A2,2,0,0,0,9,2Z"
          style={{
            fill: "rgb(0, 0, 0)",
          }}
        />
        <g>
          {[...Array(numberOfCircles)].map((_, i) => {
            return (
              <circle
                className="fill-black"
                key={`c_${i}`}
                ref={(ref) => (paths.current[i] = ref)}
                r={radius}
                cx={128}
                cy={128}
              />
            );
          })}
        </g>
      </svg>
    </main>
  );
}
