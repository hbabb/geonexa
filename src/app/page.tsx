import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex w-auto flex-col">
      <Header />
      <div className="flex flex-row items-center justify-center">
        <h1>Welcome to GeoNexa</h1>
      </div>
    </div>
  );
}
