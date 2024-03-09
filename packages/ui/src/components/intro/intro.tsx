import { FC } from "react";
import { Wrapper } from "../wrapper";
import { Container } from "../container";

export type IntroProps = {};

export const Intro: FC<IntroProps> = () => {
  return (
    <Wrapper as="section">
      <Container className="my-16 flex flex-col items-center gap-x-16 md:mb-12 md:flex-row md:justify-between">
        <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
          Blog.
        </h1>
        <p className="text-center text-lg md:text-left">
          Content Management System
        </p>
      </Container>
    </Wrapper>
  );
};
