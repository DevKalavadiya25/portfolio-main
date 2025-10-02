import HeroImg from "@/assets/images/hero2.jpeg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Learner, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="profile illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi! I'm <span className="font-bold">Devang Kalavadiya</span>, a
                passionate JavaScript enthusiast exploring modern web
                development. I enjoy building interactive, user-friendly
                interfaces and experimenting with creative web ideas that make a
                difference.
              </p>
              <p className="text-white">
                Currently, I’m learning the MERN stack and expanding my skills
                toward becoming a full-stack developer. My goal is to create
                seamless applications that combine solid backend logic with
                engaging frontend experiences.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a curious learner who believes in growing step by step.
                    Every project is an opportunity to improve, innovate, and
                    push myself further as a developer. I aim to contribute to
                    the community by sharing knowledge and creating projects
                    that inspire others.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Devang Kalavadiya
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Web Development Journey</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
