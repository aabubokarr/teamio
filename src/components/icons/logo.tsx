type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="./logo.png"
      alt="Teamio Logo"
      className={className}
    />
  );
}
