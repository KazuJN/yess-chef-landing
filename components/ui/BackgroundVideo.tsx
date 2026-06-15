type BackgroundVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  scrimClassName?: string;
  children?: React.ReactNode;
};

export function BackgroundVideo({
  src,
  poster,
  className = "",
  scrimClassName = "bg-page/60",
  children,
}: BackgroundVideoProps) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${scrimClassName}`} aria-hidden />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}
