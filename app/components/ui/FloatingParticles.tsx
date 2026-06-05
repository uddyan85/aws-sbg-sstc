"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  label: string;
  color: string;
};

type Pulse = {
  from: Node;
  to: Node;
  progress: number;
  speed: number;
};

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, radius: 160 };

    const labels = ["AWS", "EC2", "S3", "Lambda", "IAM", "Bedrock"];
    const colors = ["#FF9900", "#4DA3FF", "#A855F7", "#22C55E", "#FF4D4D", "#6B7280"];

    const nodes: Node[] = [];
    const pulses: Pulse[] = [];

    const nodeCount = 24;

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 10 + 8, // smaller, cleaner
        opacity: Math.random() * 0.4 + 0.25,
        label: labels[Math.floor(Math.random() * labels.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function drawNode(n: Node) {
      ctx.save();

      // NODE CORE (clean dot)
      ctx.globalAlpha = n.opacity;
      ctx.fillStyle = n.color;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size / 2, 0, Math.PI * 2);
      ctx.fill();

      // outer ring (subtle interaction feel)
      ctx.globalAlpha = n.opacity * 0.3;
      ctx.strokeStyle = n.color;
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
      ctx.stroke();

      // LABEL (small + tech style)
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = "#E5E7EB";
      ctx.font = `600 9px ui-monospace, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(n.label, n.x, n.y - 14);

      ctx.restore();
    }

    function drawPulse(p: Pulse) {
      const x = p.from.x + (p.to.x - p.from.x) * p.progress;
      const y = p.from.y + (p.to.y - p.from.y) * p.progress;

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.globalAlpha = 0.9;
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // CONNECTIONS (thin + clean)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(148,163,184,0.12)";
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            // occasional pulse creation
            if (Math.random() < 0.002) {
              pulses.push({
                from: a,
                to: b,
                progress: 0,
                speed: 0.012,
              });
            }
          }
        }
      }

      // UPDATE NODES (smooth interaction)
      nodes.forEach((n) => {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          n.x -= dx * force * 0.04;
          n.y -= dy * force * 0.04;
        } else {
          n.x += n.vx * 0.6;
          n.y += n.vy * 0.6;
        }

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        drawNode(n);
      });

      // UPDATE PULSES
      pulses.forEach((p, i) => {
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(i, 1);
        } else {
          drawPulse(p);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}