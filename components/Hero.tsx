
import Link from "next/link";

const registrationUrl =
  "https://events.mlh.com/events/15402-hacktoberfest-meetup-phagwara-x-aws-student-builder-group-at-lpu";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#faf9f6] px-5 text-[#171717] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black py-4">
          <a
            href="https://hacktoberfest.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hacktoberfest official website"
            className="text-lg font-black uppercase tracking-[-0.07em] sm:text-2xl"
          >
            HACKT<span className="text-[#ef3028]">Ø</span>BERFEST
            <span className="ml-1 bg-black px-1.5 py-0.5 align-middle text-xs text-white">
              26
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            <img
              src="/mlh.png"
              alt="Major League Hacking"
              className="h-7 w-auto max-w-[75px] object-contain sm:h-9"
            />
            <span className="font-bold text-black/40">×</span>
            <img
              src="/devto.png"
              alt="DEV"
              className="h-6 w-auto max-w-[55px] object-contain sm:h-8"
            />
          </div>

          <a
            href="https://linkedin.com/company/awsbuilderslpu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src="/aws_sbg.png"
              alt="AWS Student Builder Group"
              className="h-9 w-9 object-contain sm:h-11 sm:w-11"
            />
            <span className="hidden text-xs font-bold leading-snug sm:block sm:text-sm">
              AWS Student Builder Group
              <br />
              Lovely Professional University
            </span>
          </a>
        </header>

        <div className="grid gap-0 lg:grid-cols-[1fr_340px]">
          <div className="py-10 sm:py-14 lg:py-16 lg:pr-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="bg-[#ffc329] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
                Open Source · Community · Builders
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black/45 sm:text-xs">
                Phagwara, India
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,10vw,9.5rem)] font-black uppercase leading-[0.77] tracking-[-0.09em]">
              Hacktober
              <span className="block">fest</span>
            </h1>

            <div className="mt-5 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-stretch">
              <div className="flex flex-1 items-center bg-[#ef3028] px-5 py-5 text-white sm:px-7 sm:py-6">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                    The community meetup
                  </p>
                  <p className="mt-1 text-3xl font-black uppercase leading-none tracking-[-0.06em] sm:text-4xl lg:text-5xl">
                    Phagwara.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#ffc329] px-5 py-4 sm:min-w-[190px] sm:flex-col sm:items-start sm:justify-center sm:gap-1 sm:px-6">
                <span className="text-5xl font-black leading-none tracking-[-0.08em] sm:text-6xl">
                  23
                </span>
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.12em]">
                    October
                  </p>
                  <p className="mt-1 text-sm font-bold">2026</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
                Build in public. Contribute to open source. Meet developers
                exploring AI, cloud technology, and the future of building.
              </p>

              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit shrink-0 items-center gap-5 bg-black px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#2055a5] sm:text-xs"
              >
                Register Now
                <span aria-hidden="true" className="text-lg">↗</span>
              </a>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/attendees"
                  className="inline-flex w-fit shrink-0 items-center gap-5 bg-black px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#2055a5] sm:text-xs"
                >
                  Go to Attendees Page
                  <span aria-hidden="true" className="text-lg">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <aside className="relative flex flex-col justify-between overflow-hidden bg-[#2055a5] p-6 text-white sm:p-8 lg:my-8 lg:ml-3">
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
                Save the date
              </span>
              <span className="bg-[#ffc329] px-2 py-1 text-xs font-black text-black">
                2026
              </span>
            </div>

            <div className="py-10 lg:py-0">
              <p className="text-6xl font-black uppercase leading-[0.8] tracking-[-0.08em] sm:text-7xl">
                Code
                <span className="block text-[#ffc329] text-5xl">Together.</span>
              </p>

              <div className="mt-8 border-t border-white/30 pt-5">
                <p className="text-sm font-bold">
                  Lovely Professional University
                </p>
                <p className="mt-1 text-sm text-white/65">
                  Phagwara, Punjab, India
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/30 pt-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
                Learn · Build · Contribute
              </span>
              <span aria-hidden="true" className="text-2xl text-[#ffc329]">
                ✳
              </span>
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-2 border-t-2 border-black py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Hosted by AWS Student Builder Group at LPU</span>
          <a
            href="https://hacktoberfest.awslpu.in"
            className="transition-colors hover:text-[#ef3028]"
          >
            hacktoberfest.awslpu.in ↗
          </a>
        </div>
      </div>
    </section>
  );
}