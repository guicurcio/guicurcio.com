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

export default function PodsfyPage() {
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
            src={"/assets/posts/ai-design.png"}
            alt="asd"
            width={1920}
            height={1080}
            quality={100}
          ></Image>
        </div>
        <PostTitle>The Epistemic Trinity</PostTitle>
        <div className=" grid grid-flow-row gap-5 items-start mx-[25px] place-content-start">
          <Text>
            Some knowledge-getting can be akin to hiking the Everest. You cannot
            reach to the top unless you do the work of hiking the trail that
            leads to the top. Now, we could get to the top by flying on a
            helicopter, but we could not say that we hiked the Everest, not in
            any meaningful way. It's in this sense that knowing mathematics,
            playing chess or knowing how to code -from one day to another- it's
            equivalent to appearing in Mount Everest without having hiked the
            trail (i.e. it's impossible.)
          </Text>
          <Text>
            There's a binary aspect in a lot of knowledge: you either know
            mathematics or you don't. You either know how to code or you don't.
            But as you learn mathematics you don't get to _know_ mathematics. If
            anything, you get to know how _little_ you know mathematics. You
            increasingly get the opportunity to laugh at what you previously
            thought mathematics was back when. As you learn to code, you don't
            just broadly learn to code, but you learn how to code a particular
            program which does X, and then maybe, fortunately, you can expand on
            X. Instead of saying that you know how to program, you can say, I
            know how to make program X. Or I know this particular real of
            mathematics.
          </Text>
          <Text>
            In my experience, there's three types of epistemic types of
            knowledge that I encounter everyday: verbal, technical, and
            mathematical.
          </Text>
          <Text>
            Let's pick as an example chess to explain: for me, mathematical
            knowledge \_1 about chess would be knowing that there are 64 squares
            (8 by 8), that there are 4 by 8 squares that are taken by pieces
            (notice that if you grab someone on the street who knows how to play
            chess, and ask them how many squares there are on the board, and how
            many squares are occupied at the outset they may not know on cue)
            then comes the rules, what are the allowed movements by any single
            piece: the knight goes in L... the bishop moves in a diagonal,
            etc... After that comes openings, strategies, etc. You can liken
            each of these as atoms of knowledge--the primitives of playing
            chess.
          </Text>
          <Text>
            A technical knowledge of chess is actually knowing how to implement
            those higher construct such as strategies, openings, etc. Someone
            may know the elements of chess but may not necessarily be able to
            implement them. Conversely, someone may not know exactly the
            mathematical underpinnings of chess, but it may be very technical,
            knowing how to implement them, just because it makes sense to them
            (something left to be explained to someone else.) And both,
            crucially, do not necessarily have to be able to verbalize what they
            know.
          </Text>
          <Text>
            Let's talk about verbal knowledge and then come back with another
            example of technical knowledge in the game of Basketball.
          </Text>
          <Text>
            Verbal knowledge is something I've heard someone say or something
            I've read. For example, I might know that to get the center in chess
            is vital and that you need to let the bishop have the diagonal to
            move freely. Those two strings require very little to create and
            transfer. I have just done it with you.
          </Text>
          <Text>
            But, how does this work in practice? You now know that you must take
            the center in chess, and you need to "free the diagonal." These
            things may even make sense to you. You may even think that you have
            just gotten better by knowing those two strings, but what happens
            when you go out there, try to play chess and go for the center? You
            fail. Your knowledge was not technical, you don't know how to
            implement it. This is because technical knowledge is very different
            from verbal knowledge. Verbal knowledge is easily replicable.
          </Text>
          <Text>
            In other words, you still need to traverse the graph in order to go
            from node 1 to node 2. And it's on the nodes [5...10] where you
            actually get the technical knowledge, where you are able to
            implement it (you have played that move before; you have played
            other moves before; and you've seen for YOURSELF the differences. In
            other words, you are in the middle of the hike to the top of Mount
            Everest. You are in the middle of the center in the chess board. You
            are in the middle of the graph of knowledge, and you know that you
            cannot get from node 1 to node 10 unless you traverse node 5.) Going
            from node 1 to node 10 as I tried to do with you when you read about
            chess tactics is the same as transporting yourself to the top of
            mount Everest without having hiked the trail (again, it's
            impossible.)
          </Text>
          <Text>
            Now, it's crucial to understand that someone who has technical
            knowledge may not have the verbal knowledge of that particular
            subject. She may not be able to explain what she did when she took
            the center in chess. She just took it, because it makes sense, and
            she won because of it. But if you ask her to explain, she does not.
            Not because she doesn't want to transfer that knowledge to you, or
            because she does not actually know, but because that knowledge may
            not be verbalized: you need to play a whole lot of games to get to
            that knowledge.
          </Text>
          <Text>
            Conversations can be also technical. For people that have only
            verbal knowledge in some subjects they try to coerce the
            conversation to something they have discussed before, something they
            have seen a debate about and have some cached thoughts at the ready
            (they seem very GPT in a sense, something that's easily replicable.)
            Instead of playing with the primitive elements of a given
            conversation.
          </Text>
          <Text>
            Now, for that basketball example: In 1992, the Chicago Bulls were
            playing the Game 1 of NBA finals, in this game Michael Jordan scored
            six three-pointer in the first half. In scoring the last one, he
            just shrugged seeming to say, "I don't know what's happening." And
            he obviously did not know what was happening, because he probably
            could not verbalize it. If you were to ask him, “How did you make
            those six three-pointers?” He would not know how to answer, because
            the knowledge cannot fit into a short string. And this is crucial.
            There's no Michael Jordan podcast that is going to allow you to get
            better and to make six three-pointers in a row.
          </Text>
          <Text>
            Let's nail this with another example: Rineke Dijkstra is a
            photographer who uses atomic elements such as the idea of a pose, of
            gesture, and of gaze in her photographs. This is a professional who
            has a mathematical understanding. It may not be that she has tapped
            into the **True Nature of Photography** but she has indeed created a
            coherent, consistent system that she can technically use in her
            profession; she may have tapped onto _her True Nature of
            Photography_. Now, obviously, taking a picture like she does is very
            different thing altogether, even though you know that she uses those
            things as atomic elements in her system that does not necessarily
            mean that you may be able to take a photo like she does; knowing
            that she has constructed this system, just might.
          </Text>
          <Text>
            Most mathematics teachers tell you to do exercises to get a sense of
            the axiomatic system and what works and what does not. Programmers
            tell you to build stuff. These things are encoded in a very
            different way. It's done by examples, by recreation, by mistakes.
            You cannot appear tomorrow on top of mount Everest. You need to
            climb it. Knowing the difference between these tree types of
            knowledge may dispel dreams of appearing on top of mount Everest in
            fifteen minutes and allow for a construction of a better system.
          </Text>
        </div>
      </div>
    </div>
  );
}
