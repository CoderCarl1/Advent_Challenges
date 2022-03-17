import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PrimaryNavLink from "../primaryNavLink/PrimaryNavLink";
import SkipLink from "../skipLink/SkipLink";

const idRef = "challengeNode";
const challenge_List_Nodes = [
  {
    link: "/pomodoro",
    text: "Pomodoro Timer",
    id: idRef + "-0",
  },
  {
    link: "/example-1",
    text: "example-1",
    id: idRef + "-1",
  },
  {
    link: "/example-2",
    text: "example-2",
    id: idRef + "-2",
  },
  {
    link: "/example-3",
    text: "example-3",
    id: idRef + "-3",
  },
  {
    link: "/example-4",
    text: "example-4",
    id: idRef + "-4",
  },
  {
    link: "/example-5",
    text: "example-5",
    id: idRef + "-5",
  },
  {
    link: "/example-6",
    text: "example-6",
    id: idRef + "-6",
  },
  {
    link: "/example-7",
    text: "example-7",
    id: idRef + "-7",
  },
  {
    link: "/example-8",
    text: "example-8",
    id: idRef + "-8",
  },
];

export function Header() {
  const listRef = useRef(null);
  const [ulFocused, setUlFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [data] = useState(challenge_List_Nodes);
  const [liNodes, setLiNodes] = useState(null);

  useEffect(() => {
    if (listRef.current) {
      const nodeList = listRef.current.querySelectorAll("li > a");

      setLiNodes({
        prev: nodeList[data.length - 1],
        current: nodeList[0],
        next: nodeList[1],
      });
    }
    setCurrentPage(document.location.pathname);
  }, [liNodes === null]);

  function handleKeyLI(event) {
    if (liNodes !== null) {
      const nodeList = listRef.current.querySelectorAll("li > a");

      const idNum = Number(liNodes.current.id.split("-")[1]);
      const maxLength = data.length - 1;
      const prevId = idNum === 0 ? maxLength : idNum - 1;
      const nextId = idNum === maxLength ? 0 : idNum + 1;

      if (event.code === "ArrowDown" || event.code === "Tab") {
        const newNextId = nextId === maxLength ? 0 : idNum + 1;
        setLiNodes({
          prev: nodeList[idNum],
          current: nodeList[nextId],
          next: nodeList[newNextId],
        });
      }
      if (
        event.code === "ArrowUp" ||
        (event.shiftKey && event.code === "Tab")
      ) {
        const newPrevId = prevId === 0 ? data.length - 1 : idNum - 1;

        setLiNodes({
          prev: nodeList[newPrevId],
          current: nodeList[prevId],
          next: nodeList[idNum],
        });
      }
    }
  }

  useEffect(() => {
    if (liNodes !== null) {
      const { current } = liNodes;
      current.focus();
    }
  }, [liNodes]);

  function handleKeyPress(event) {
    console.log("handleKeyPress - KEY CODE  IS => ", event.code);

    if (listRef.current !== null) {
      // have they entered in?
      if (ulFocused) {
        if (event.code === "ArrowDown" || event.code === "ArrowUp") {
          handleKeyLI(event);
        }

        if (event.code === "Escape") {
          setUlFocused(false);
          listRef.current.focus();
        }
      }
      // ELSE
      if (!ulFocused && liNodes) {
        if (event.code === "Enter") {
          setUlFocused(true);

          liNodes.current.focus();
        }
      }
    }
  }
  function resetTabIndex() {
    document.querySelector("body")?.focus();
  }

  return (
    <header className="header">
      <SkipLink />
      <h1>
        <Link href="/">
          <a className="header-title">Challenge Apps</a>
        </Link>
      </h1>
      <nav className="header__nav" aria-label="Primary navigation">
        <div
          id="challenge_list__explanation"
          className="challenge_list__explanation"
          tabIndex={-1}
        >
          <h2 className="explanation__title">
            Keyboard controls for navigation:
          </h2>
          <p className="explanation__text">
            <kbd>ENTER</kbd>: enter the list | <kbd>Esc</kbd> exit the list |
            &darr; <kbd className="sr-only">Down key</kbd> next item | &uarr;{" "}
            <kbd className="sr-only">Up key</kbd>previous item
          </p>
        </div>
        <ul
          ref={listRef}
          tabIndex={0}
          className="challenge_list"
          onKeyDown={handleKeyPress}
          aria-labelledby="challenge_list__explanation"
        >
          {liNodes && console.log("LINODES RENDER ", liNodes)}
          {data.map(({ id, link, text }) => (
            <PrimaryNavLink
              currentPage={currentPage && currentPage.includes(link)}
              key={id}
              handleKeyLI={handleKeyLI}
              resetTabIndex={resetTabIndex}
              id={id}
              link={link}
              text={text}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
