import Button from "@/components/UI/Button";
import Hexagon from "@/components/UI/hexagon/Hexagon";
import Image from "next/image";
import React from "react";
import avatar from "@/app/assets/avt2.png";
import HexagonIcon from "@/components/UI/hexagonIcon/HexagonIcon";
import { Github, Linkedin, Mail } from "lucide-react";

function About() {
  return (
    <section className="flex mt-14">
      <div className="w-6/12">
        <div>
          <span className="text-2xl font-medium">Hello, </span>{" "}
          <span className="text-2xl font-medium text-emerald-400">I'm</span>
          <h3 className="text-emerald-400">Trịnh Đức Mạnh</h3>
          <h4>Software engineer</h4>
          <p className="my-10">
            Gratuated from Ho Chi Minh City University of Technology, Major is
            computer science, I can code frontend like React and Vue or Next.
            Backend, I have experience in Nodejs and Java SpringBoot
          </p>
          <Button>
            <p className="text-xl font-semibold">Let's Talk</p>
          </Button>
        </div>
        <div className="flex items-center gap-x-16 mt-4">
          <p>Check Out My</p>
          <nav className="flex items-center gap-x-12">
            <HexagonIcon>
              <Linkedin />
            </HexagonIcon>
            <HexagonIcon>
              <Github />
            </HexagonIcon>
            <HexagonIcon>
              <Mail />
            </HexagonIcon>
          </nav>
        </div>
      </div>
      <div className="w-6/12 relative">
        <Hexagon />
        <Image
          src={avatar}
          alt="avatar"
          className="absolute right-0 left-0 mx-auto bottom-[120px] z-10 h-60 w-52"
        />
      </div>
    </section>
  );
}

export default About;
