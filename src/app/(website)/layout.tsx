
import ScrollSmoother from "@/src/components/ScrollSmoother";
// import Loader from "../../components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`main-layout`}>
      {/* <Loader /> */}
      <ScrollSmoother>{children}</ScrollSmoother>
    </main>
  );
}
