import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-blue-500">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-20 p-4">
        {projects.map((item) => (
          <div key={item.id}>
            <CardContainer className="inter-var">
              <CardBody className="group/card relative h-auto  w-auto rounded-xl border  border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-blue-600/[0.1] sm:w-[30rem]  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm text-neutral-300"
                >
                  {item.des}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="mt-12 flex items-center justify-between">
                  <CardItem
                    translateZ={20}
                    as="div"
                    className="rounded-xl bg-black px-1 text-xs font-bold text-black"
                  >
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-12 lg:w-12"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-1" />
                        </div>
                      ))}
                    </div>
                  </CardItem>{" "}
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={item.link}
                    target="__blank"
                    className="font-normal text-blue-300 rounded-xl px-6 text-xs"
                  >
                    Live demo →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
