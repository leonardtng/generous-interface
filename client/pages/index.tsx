import LandingView from "@/components/templates/LandingView";

export default function Home() {
  return (
    <main
      className="flex h-screen w-screen min-h-screen flex-col items-center justify-between p-24 bg-[url('/bg.jpg')] bg-cover overflow-y-scroll"
    >
      <LandingView />
    </main>
  );
}
