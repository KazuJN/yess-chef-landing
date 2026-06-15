import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`relative z-10 mx-auto flex w-full max-w-[342px] flex-col gap-4 overflow-hidden border border-accent bg-surface p-4 md:max-w-[480px] xl:max-w-[578px] ${className}`}
    >
      {children}
    </div>
  );
}
