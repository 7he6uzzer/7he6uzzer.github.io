import { RefObject } from "react";

export type CursorTrail = {
  ref: RefObject<HTMLCanvasElement>;
  color?: string;
};

const CYBER_CHARS = "01";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  char: string;
  size: number;
  opacity: number;
  hue: number;
}

export function cursorTrail(props: CursorTrail) {
  const { ref, color } = props;
  const ctx = ref.current?.getContext("2d")!;

  const cursorPosition = { x: 0, y: 0 };
  const prevPosition = { x: 0, y: 0 };
  let running = true;
  let particles: Particle[] = [];
  let frameCount = 0;

  function getRandomChar() {
    return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
  }

  function spawnParticles(x: number, y: number, count: number) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.2 + Math.random() * 0.8;
      const maxLife = 60 + Math.random() * 80;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: maxLife,
        maxLife,
        char: getRandomChar(),
        size: 8 + Math.random() * 6,
        opacity: 0.6 + Math.random() * 0.4,
        hue: 195 + Math.random() * 25, // sky/azure to match theme primary
      });
    }
  }

  function renderAnimation() {
    if (!running) return;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    frameCount++;

    const dx = cursorPosition.x - prevPosition.x;
    const dy = cursorPosition.y - prevPosition.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    if (speed > 3) {
      spawnParticles(cursorPosition.x, cursorPosition.y, Math.min(Math.floor(speed / 5), 3));
    }

    if (frameCount % 15 === 0 && speed > 0.5) {
      spawnParticles(cursorPosition.x, cursorPosition.y, 1);
    }

    prevPosition.x = cursorPosition.x;
    prevPosition.y = cursorPosition.y;

    const ringPulse = Math.sin(frameCount * 0.02) * 0.3 + 0.5;
    ctx.globalCompositeOperation = "lighter";

    // Outer scan ring
    ctx.beginPath();
    ctx.arc(cursorPosition.x, cursorPosition.y, 25 + Math.sin(frameCount * 0.03) * 5, 0, Math.PI * 2);
    ctx.strokeStyle = color || `hsla(199, 95%, 55%, ${ringPulse * 0.15})`;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Rotating dashed arc
    ctx.save();
    ctx.translate(cursorPosition.x, cursorPosition.y);
    ctx.rotate(frameCount * 0.008);
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, Math.PI * 0.7);
    ctx.strokeStyle = color || `hsla(210, 95%, 62%, ${ringPulse * 0.3})`;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 6]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Second rotating arc
    ctx.save();
    ctx.translate(cursorPosition.x, cursorPosition.y);
    ctx.rotate(-frameCount * 0.006 + Math.PI);
    ctx.beginPath();
    ctx.arc(0, 0, 22, 0, Math.PI * 0.5);
    ctx.strokeStyle = color || `hsla(220, 95%, 60%, ${ringPulse * 0.25})`;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 8]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Crosshair lines
    const crossSize = 6;
    const crossGap = 10;
    ctx.strokeStyle = color || `hsla(205, 95%, 60%, ${ringPulse * 0.4})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cursorPosition.x, cursorPosition.y - crossGap);
    ctx.lineTo(cursorPosition.x, cursorPosition.y - crossGap - crossSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cursorPosition.x, cursorPosition.y + crossGap);
    ctx.lineTo(cursorPosition.x, cursorPosition.y + crossGap + crossSize);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cursorPosition.x - crossGap, cursorPosition.y);
    ctx.lineTo(cursorPosition.x - crossGap - crossSize, cursorPosition.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cursorPosition.x + crossGap, cursorPosition.y);
    ctx.lineTo(cursorPosition.x + crossGap + crossSize, cursorPosition.y);
    ctx.stroke();

    // Particles
    ctx.globalCompositeOperation = "lighter";
    particles = particles.filter((p) => {
      p.life -= 1;
      if (p.life <= 0) return false;

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.985;
      p.vy *= 0.985;

      const lifeRatio = p.life / p.maxLife;
      const alpha = lifeRatio * p.opacity;

      if (Math.random() < 0.08) {
        p.char = getRandomChar();
      }

      ctx.font = `${p.size}px 'Courier New', monospace`;
      ctx.fillStyle = color || `hsla(${p.hue}, 100%, 60%, ${alpha})`;
      ctx.shadowColor = color || `hsla(${p.hue}, 100%, 55%, ${alpha * 0.8})`;
      ctx.shadowBlur = 8;
      ctx.fillText(p.char, p.x, p.y);
      ctx.shadowBlur = 0;

      return true;
    });

    // Connection lines between close particles
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const ddx = particles[i].x - particles[j].x;
        const ddy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dist < 50) {
          const alpha = (1 - dist / 50) * 0.15;
          ctx.strokeStyle = color || `hsla(205, 95%, 60%, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    window.requestAnimationFrame(renderAnimation);
  }

  function move(event: MouseEvent | TouchEvent) {
    if (!(event instanceof MouseEvent)) {
      cursorPosition.x = (event as TouchEvent).touches[0].pageX;
      cursorPosition.y = (event as TouchEvent).touches[0].pageY;
    } else {
      cursorPosition.x = event.clientX;
      cursorPosition.y = event.clientY;
    }
  }

  function createLine(event: TouchEvent) {
    if (event.touches.length === 1) {
      cursorPosition.x = event.touches[0].pageX;
      cursorPosition.y = event.touches[0].pageY;
    }
  }

  function onMouseMove(e: MouseEvent | TouchEvent) {
    document.removeEventListener("mousemove", onMouseMove as EventListener);
    document.removeEventListener("touchstart", onMouseMove as EventListener);
    document.addEventListener("mousemove", move as EventListener);
    document.addEventListener("touchmove", createLine as EventListener);
    document.addEventListener("touchstart", createLine as EventListener);
    move(e);
    renderAnimation();
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  function stopAnimation() {
    running = false;
  }

  function startAnimation() {
    if (!running) {
      running = true;
      renderAnimation();
    }
  }

  function renderTrailCursor() {
    document.addEventListener("mousemove", onMouseMove as EventListener);
    document.addEventListener("touchstart", onMouseMove as EventListener);
    window.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", startAnimation);
    window.addEventListener("blur", stopAnimation);
    resizeCanvas();
  }

  function cleanUp() {
    running = false;
    document.removeEventListener("mousemove", move as EventListener);
    document.removeEventListener("touchmove", createLine as EventListener);
    document.removeEventListener("touchstart", createLine as EventListener);
    document.removeEventListener("mousemove", onMouseMove as EventListener);
    document.removeEventListener("touchstart", onMouseMove as EventListener);
    window.removeEventListener("orientationchange", resizeCanvas);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("focus", startAnimation);
    window.removeEventListener("blur", stopAnimation);
  }

  return { cleanUp, renderTrailCursor, stopAnimation, startAnimation };
}
