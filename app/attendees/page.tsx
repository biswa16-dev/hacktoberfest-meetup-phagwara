import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

interface Attendee {
  fullName: string;
  githubUsername: string;
  pfpUrl?: string;
}

async function getAttendees(): Promise<Attendee[]> {
  const attendeesDirectory = path.join(process.cwd(), "app", "attendees");

  try {
    const files = await fs.readdir(attendeesDirectory);

    const attendees = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          try {
            const content = await fs.readFile(
              path.join(attendeesDirectory, file),
              "utf-8",
            );
            const attendee = JSON.parse(content) as Attendee;

            if (!attendee.fullName || !attendee.githubUsername) {
              return null;
            }

            return attendee;
          } catch {
            return null;
          }
        }),
    );

    return attendees
      .filter((attendee): attendee is Attendee => attendee !== null)
      .sort((a, b) => a.fullName.localeCompare(b.fullName));
  } catch {
    return [];
  }
}

export default async function AttendeesPage() {
  const attendees = await getAttendees();

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f6] px-5 text-[#171717] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black py-4">
          <Link
            href="/"
            aria-label="Back to Hacktoberfest home"
            className="text-lg font-black uppercase tracking-[-0.07em] sm:text-2xl"
          >
            HACKT<span className="text-[#ef3028]">Ø</span>BERFEST
            <span className="ml-1 bg-black px-1.5 py-0.5 align-middle text-xs text-white">
              26
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="bg-[#ffc329] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider sm:text-xs">
              Community directory
            </span>
            <span className="hidden font-mono text-xs font-bold text-black/40 sm:block">
              PHAGWARA, INDIA
            </span>
          </div>

          <a
            href="https://linkedin.com/company/awsbuilderslpu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Image
              src="/aws_sbg.png"
              alt="AWS Student Builder Group"
              width={44}
              height={44}
              className="h-9 w-9 object-contain sm:h-11 sm:w-11"
            />
            <span className="hidden text-xs font-bold leading-snug sm:block sm:text-sm">
              AWS Student Builder Group
              <br />
              Lovely Professional University
            </span>
          </a>
        </header>

        <section className="grid gap-8 border-b-2 border-black py-10 sm:py-14 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-12 lg:py-16">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="bg-[#ffc329] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
                The people behind the code
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black/45 sm:text-xs">
                October 23, 2026
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.09em]">
              Meet the
              <span className="block text-[#ef3028]">Builders.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
              Behind every contribution is a person learning something new,
              solving a problem, or helping someone else build. Meet the
              developers and open-source contributors who make this community
              what it is.
            </p>
          </div>

          <aside className="flex flex-col justify-between bg-[#2055a5] p-6 text-white sm:p-8 lg:min-h-[260px]">
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
                One community
              </span>
              <span className="bg-[#ffc329] px-2 py-1 text-xs font-black text-black">
                2026
              </span>
            </div>

            <div className="py-8 lg:py-5">
              <p className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em] sm:text-6xl">
                Learn.
                <span className="block text-[#ffc329]">Build.</span>
                <span className="block">Contribute.</span>
              </p>
            </div>

            <a
              href="https://github.com/shashankpandey04/hacktoberfest-meetup-phagwara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-t border-white/30 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:text-[#ffc329] sm:text-xs"
            >
              Contribute on GitHub
              <span aria-hidden="true" className="text-xl">↗</span>
            </a>
          </aside>
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/20 py-6">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#ef3028]">
                THE COMMUNITY
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-[-0.05em] sm:text-3xl">
                Attendee Directory<span className="text-[#ef3028]">.</span>
              </h2>
            </div>

            <p className="font-mono text-xs font-bold uppercase tracking-wider text-black/50 sm:text-sm">
              <span className="text-[#ef3028]">
                {String(attendees.length).padStart(2, "0")}
              </span>{" "}
              {attendees.length === 1 ? "Builder" : "Builders"}
            </p>
          </div>

          {attendees.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {attendees.map((attendee, index) => {
                const avatar =
                  attendee.pfpUrl ||
                  `https://github.com/${encodeURIComponent(attendee.githubUsername)}.png`;

                return (
                  <a
                    key={attendee.githubUsername}
                    href={`https://github.com/${encodeURIComponent(attendee.githubUsername)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-0 flex-col border border-black/15 bg-white p-5 transition-colors hover:border-[#ef3028] sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[10px] font-bold tracking-widest text-black/35">
                        BUILDER / {String(index + 1).padStart(3, "0")}
                      </span>
                      <span className="text-lg text-black/35 transition-colors group-hover:text-[#ef3028]">
                        ↗
                      </span>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-black/10 bg-[#faf9f6]">
                        <Image
                          src={avatar}
                          alt={`${attendee.fullName}'s GitHub avatar`}
                          fill
                          sizes="64px"
                          unoptimized
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="break-words text-base font-black leading-tight tracking-tight transition-colors group-hover:text-[#ef3028] sm:text-lg">
                          {attendee.fullName}
                        </h3>

                        <p className="mt-1 break-all font-mono text-xs text-black/50">
                          @{attendee.githubUsername}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-black/10 pt-4">
                      <span className="h-2 w-2 bg-[#ffc329]" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black/50">
                        Open Source Contributor
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="my-5 border-2 border-dashed border-black/20 px-5 py-16 text-center sm:py-24">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#ef3028]">
                Your story starts here
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
                Be part of the community.
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/60">
                Add your attendee profile to the repository and submit a pull
                request. Once your contribution is merged and deployed, your
                profile can appear in this directory.
              </p>

              <a
                href="https://github.com/shashankpandey04/hacktoberfest-meetup-phagwara"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-4 bg-black px-5 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#ef3028]"
              >
                Add Your Profile
                <span aria-hidden="true" className="text-lg">↗</span>
              </a>
            </div>
          )}
        </section>

        <footer className="mt-8 flex flex-col gap-3 border-t-2 border-black py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="transition-colors hover:text-[#ef3028]">
            ← Back to Hacktoberfest
          </Link>
          <span>Hosted by AWS Student Builder Group at LPU</span>
          <a
            href="https://hacktoberfest.awslpu.in"
            className="transition-colors hover:text-[#ef3028]"
          >
            hacktoberfest.awslpu.in ↗
          </a>
        </footer>
      </div>
    </main>
  );
}