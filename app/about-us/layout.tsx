import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about-us",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      Next JS is great!
    </div>
  );
}
