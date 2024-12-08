import { ModeToggle } from "@/components/layout/ModeToggle";

export function Header() {
  return (
    <div className="gradient-bottom flex items-center justify-between bg-primary-grayGradient px-8 py-4 dark:bg-secondary-blueGradient">
      <div className="mr-auto flex items-center gap-2 text-white">
        {/* <Logo /> */}
        <h1>GeoNexa</h1>
        <p>Mapping the Past, Planning the Future</p>
      </div>
      <div>{/* Navbar */}</div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>
  );
}
