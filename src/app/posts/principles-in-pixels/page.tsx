"use client";

import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import {
  BLOGPOST_CLASSNAMES,
  BORDER_POSTS_CLASSNAMES,
} from "constants/classnames";
import Image from "next/image";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

export default function InventingOnPrinciplePage() {
  return (
    <div
      className={mergeClasses(...BLOGPOST_CLASSNAMES, BORDER_POSTS_CLASSNAMES)}
    >
      <div className="grid grid-flow-row gap-8 h-full w-full place-content-between mx-auto pl-[30px] pr-[40px]">
        <Link href={"/"}>
          <img
            src="/assets/arrow.svg"
            className="scale-x-[-100%] align-start self-start mt-[-20px] cursor-pointer"
            draggable="false"
          ></img>
        </Link>
        <div>
          <Image
            className="w-[550px] rounded  object-fill h-[360px] mx-auto mt-[-4px] brightness-[80%] transition-all duration-500 ease-in-out hover:brightness-105"
            src={"/assets/posts/principles-in-pixels.png"}
            alt="asd"
            width={1920}
            height={1080}
            quality={100}
          ></Image>
        </div>
        <PostTitle>Principles in Pixels</PostTitle>
        <div className=" grid grid-flow-row gap-5 items-start mx-[25px] place-content-start">
          <Text>
            We often find ourselves lost in the labyrinth of code, interfaces,
            and digital constructs, forgetting the very essence of why we
            create. Bret Victor's "Inventing on Principle" serves as a beacon,
            reminding us of the soul behind the software. The allure of Victor's
            "immediate connection" is not just in revolutionizing software
            design; it's a clarion call for every creator, in every field, to
            witness the real-time fruition of their ideas. This immediacy, this
            tangible dance between idea and outcome, transcends code—it has the
            potential to redefine any craft, from architecture to zoology.
          </Text>

          <Text>
            Yet, at the heart of Victor's ethos is not just the how but the why.
            The guiding principle. It's not a mere compass but the very wind
            that propels our sails. Such a principle doesn't just dictate the
            trajectory of one's career; it's the very foundation of their
            legacy. In an educational landscape that often dwells in
            abstraction, the immediacy Victor champions could be the antidote.
            Picture a world where students, rather than grappling with nebulous
            theories, see the immediate impact of their ideas. A physics student
            witnesses the ballet of particles as they tweak an equation, or a
            literature student sees the emotions of virtual readers as they
            craft a narrative. This is not just learning; it's living the
            impact.
          </Text>
          <Text>
            The tools Victor showcases aren't mere instruments; they challenge
            the very fabric of our understanding. Traditional coding and design
            paradigms find themselves on the anvil, ready to be reshaped. But
            beyond tools and principles, there's a deeper call to action: for
            industries and educators to kindle this principle-driven ethos in
            budding creators. Why do I engineer? Not because of market demand or
            societal expectations. I engineer because I must. Because there's a
            principle, a core belief, that drives me. And in that unwavering
            principle lies the future of authentic, impactful invention.
          </Text>
          <Text>
            The talk serves as both an inspiration and a challenge to designers,
            programmers, and creators in various fields. Victor encourages the
            audience to find their guiding principle and to pursue work that
            resonates with that principle. He challenges conventional thinking
            and promotes a more responsive and humane approach to technology and
            design.
          </Text>
        </div>
      </div>
    </div>
  );
}
