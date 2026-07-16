"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const target = new Date(targetDate).getTime();
  const now = Date.now();

  const difference = Math.max(0, target - now);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({
  targetDate,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
  <div className="flex justify-center w-full px-2">
    <div
      className="
        flex
        items-center
        justify-center
        flex-nowrap
        gap-2
        sm:gap-3
        md:gap-4

        w-full
        overflow-hidden
      "
    >
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2 sm:gap-3">
          
          {/* Card */}
          <div
            className="
              group
              relative
              overflow-hidden

              rounded-xl
              border border-purple-500/30
              bg-white/[0.03]
              backdrop-blur-xl

              flex flex-col items-center justify-center

              w-[70px]
              sm:w-[85px]
              md:w-[110px]

              py-2
              sm:py-3
              md:py-4

              transition-all duration-300

              hover:-translate-y-1
              hover:border-[#A45AFA]/40
              hover:shadow-[0_0_25px_rgba(164,90,250,0.2)]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-b from-[#A45AFA]/10 to-transparent
              "
            />

            {/* Number */}
            <div
              className="
                relative z-10

                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl

                font-black
                text-white
                tracking-tight
              "
            >
              {String(item.value).padStart(2, "0")}
            </div>

            {/* Label */}
            <div
              className="
                relative z-10

                mt-1

                text-[8px]
                sm:text-[9px]
                md:text-[10px]

                font-semibold
                uppercase

                tracking-[0.18em]

                text-white/60
                group-hover:text-[#C084FC]

                transition-colors duration-300

                whitespace-nowrap
              "
            >
              {item.label}
            </div>
          </div>

          {/* Separator (only desktop) */}
          {index < items.length - 1 && (
            <div
              className="
                hidden lg:flex
                text-[#A45AFA]
                text-xl
                font-light
              "
            >
              :
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
}