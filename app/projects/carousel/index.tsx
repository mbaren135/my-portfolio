"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/assets/icons";
import { ProjectCardType } from "../../../types";
import s from "./carousel.module.css";

/**
 * Styling inspired by Lun Dev Code on Youtube: https://www.youtube.com/watch?v=Xh-wIMqohD0
 */

export default function CardCarousel({
  projects,
}: {
  projects: ProjectCardType[];
}) {
  const [current, setCurrent] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll("." + s.card);
    if (cards.length === 0) return;

    /** resets the styles of all cards once any time the user navigates between projects */
    function setStyle(
      card: HTMLElement,
      transform: string,
      zIndex: string,
      filter: string,
      opacity: string,
      overflow: string
    ) {
      card.style.transform = transform;
      card.style.zIndex = zIndex;
      card.style.filter = filter;
      card.style.opacity = opacity;

      /** Body of the card, containing the text description of each project */
      const cardBody = card.children[card.childElementCount - 1] as HTMLElement;
      cardBody.style.overflowY = overflow;
    }

    /** Set style of the current card */
    setStyle(cards[current] as HTMLElement, "none", "1", "none", "1", "auto");

    let offset = 0;
    for (let i = current + 1; i < cards.length; i++) {
      /** Set style of all project cards to the right of the current card */
      offset++;
      setStyle(
        cards[i] as HTMLElement,
        `translateX(${120 * offset}px) scale(${
          1 - 0.2 * offset
        }) perspective(16px) rotateY(-1deg)`,
        `${-offset}`,
        "blur(5px)",
        `${offset > 1 ? "0" : "0.6"}`,
        "hidden"
      );
    }

    offset = 0;
    for (let i = current - 1; i >= 0; i--) {
      /** Set style of all project cards to the left of the current card */
      offset++;
      setStyle(
        cards[i] as HTMLElement,
        `translateX(${-120 * offset}px) scale(${
          1 - 0.2 * offset
        }) perspective(16px) rotateY(1deg)`,
        `${-offset}`,
        "blur(5px)",
        `${offset > 1 ? "0" : "0.6"}`,
        "hidden"
      );
    }
  }, [current]);

  return (
    <div className={s.carousel}>
      {projects.map((p, index) => {
        return (
          <div key={`card-${index}`} className={s.card}>
            <Card
              title={p.title}
              image={p.image || null}
              state={{ isEnlarged, setIsEnlarged }}
              isActive={current === index}
            >
              {p.content}
            </Card>
          </div>
        );
      })}
      {projects.length > 1 && (
        <>
          <button
            className={`${s.button}`}
            onClick={() => {
              setIsEnlarged(false);
              setCurrent((prev) => prev - 1);
            }}
            disabled={current === 0}
          >
            <ChevronLeftIcon size="30px" />
          </button>
          <button
            className={`${s.button} ${s.next}`}
            onClick={() => {
              setIsEnlarged(false);
              setCurrent((prev) => prev + 1);
            }}
            disabled={current === projects.length - 1}
          >
            <ChevronRightIcon size="30px" />
          </button>
          <div className={s.indicatorContainer}>
            {projects.map((_, index) => {
              return (
                <div
                  key={`indicator-${index}`}
                  className={`${s.indicator} ${
                    index === current ? s.active : ""
                  }`}
                  onClick={() => {
                    setIsEnlarged(false);
                    setCurrent(index);
                  }}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function Card({
  title,
  image,
  state,
  isActive,
  children,
}: {
  title: string;
  image: ReactNode | null;
  state: { isEnlarged: boolean; setIsEnlarged: (arg: any) => void };
  isActive: boolean;
  children: ReactNode;
}) {
  const { isEnlarged, setIsEnlarged } = state;

  // if (isEnlarged) {
  //   return (
  //     <div className={s.imageEnlarged}>
  //       <button className={s.closeButton} onClick={() => setIsEnlarged(false)}>
  //         <CloseIcon />
  //       </button>
  //       {/* <Image
  //         src="/images/ATS-job-example.png"
  //         alt="Michael Baren headshot"
  //         width={249}
  //         height={110}
  //         className={s.image}
  //         // onClick={() => console.log("Clicked")}
  //       /> */}
  //       {image}
  //     </div>
  //   );
  // }

  console.log({ isEnlarged });
  return (
    <>
      {image ? (
        <div
          className={`${isEnlarged ? s.imageEnlarged : s.thumbnail}`}
          onClick={() => setIsEnlarged(true)}
        >
          {isEnlarged && (
            <button
              className={s.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                console.log("click");
                setIsEnlarged(false);
              }}
            >
              <CloseIcon size="22px"/>
            </button>
          )}
          {image}
        </div>
      ) : null}
      {(!isActive || (isActive && !isEnlarged)) && (
        <>
          <div className={s.title}>{title}</div>
          <div className={s.cardBody}>{children}</div>
        </>
      )}
    </>
  );
}
