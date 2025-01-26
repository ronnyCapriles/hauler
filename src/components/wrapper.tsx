
import Footer from "./footer";
import Navbar from "./navbar";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}