"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import styles from "./HowItsMade.module.css";

export function HowItsMade() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current!;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () => {
      if (visible && !document.hidden && !motion.matches && !manuallyPaused.current) {
        void video.play().catch(() => {});
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.4;
      sync();
    }, { threshold: [0, 0.4], rootMargin: "-73px 0px 0px 0px" });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
      video.pause();
    };
  }, []);

  function toggleVideo() {
    const video = videoRef.current!;
    manuallyPaused.current = !video.paused;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  }

  return (
    <section id="how-its-made" className={styles.section} aria-labelledby="how-its-made-heading">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Inside the Brim kitchen</p>
          <h2 id="how-its-made-heading">Freshly smashed.<br /><em>Fully Brim.</em></h2>
          <p className={styles.description}>
            Fresh beef. A hot griddle. Those crisp, golden edges.
            See the care that goes into every big, juicy bite.
          </p>
          <Link href="/menu" className={styles.link}>
            Find your Brim <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <figure className={styles.card}>
          <video
            ref={videoRef}
            className={styles.video}
            playsInline
            muted
            loop
            preload="metadata"
            poster={asset("/sequence/frame-0220.jpg")}
            width="1280"
            height="720"
            aria-label="How we make a Brim burger"
            aria-describedby="burger-film-description"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          >
            <source src={asset("/how-its-made.mp4")} type="video/mp4" />
          </video>
          <figcaption className={styles.caption}>
            <span>Made fresh.<br /><strong>Worth every bite.</strong></span>
            {failed ? <a className={styles.playback} href={asset("/how-its-made.mp4")}>Open film ↗</a> : (
              <button type="button" className={styles.playback} onClick={toggleVideo} aria-label={playing ? "Pause kitchen film" : "Play kitchen film"}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {playing ? <path d="M7 5h3v14H7zm7 0h3v14h-3z" /> : <path d="m8 5 11 7-11 7z" />}
                </svg>
                <span>{playing ? "Pause" : "Play film"}</span>
              </button>
            )}
          </figcaption>
          <p id="burger-film-description" className="sr-only">
            A silent look at beef being smashed on the griddle, topped with cheese,
            then stacked and finished in a bun.
          </p>
        </figure>
      </div>
    </section>
  );
}
