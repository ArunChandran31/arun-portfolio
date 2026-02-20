import localFont from "next/font/local";
import "./globals.css";

const neueHaas = localFont({
  src: [
    {
      path: "../fonts/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${neueHaas.className} bg-black text-white`}>
        
        {/* Page Content */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md">
            <div className="px-6 md:px-12 lg:px-24 py-10 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">

              {/* Left */}
              <div>
                © {new Date().getFullYear()} Studio Creviro.io | Design by Arun Chandran.
              </div>

              {/* Right */}
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </div>

            </div>
          </footer>

        </div>

      </body>
    </html>
  );
}
