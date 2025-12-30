
// import ScrollSmoother from "@/src/components/ScrollSmoother";
// import Loader from "../../components/Loader";

import SmoothScroller from "../../components/ScrollSmoother";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`main-layout`}>
      {/* <Loader /> */}
      <SmoothScroller>{children}</SmoothScroller>
    </main>
  );
}
