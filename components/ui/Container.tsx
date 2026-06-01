import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[640px] border border-accent bg-surface p-6 flex flex-col gap-4 ${className}`}
    >
      {children}
    </div>
  );
}
