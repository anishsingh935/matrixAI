// background: #18077F;
"use client";
import React, { useState } from "react";
import styles from "./nav.module.css";
import global from "@/global.module.css";
import Image from "next/image";
import { ArrowDown, Avtar, Info, Logo, Setting } from "@/assets/svg/index";
import Input from "./common/Input";
import Textarea from "./common/TextArea";
import Button from "./common/Button";
const FormLeft = () => {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <div
      style={{
        background: "#FFFFFF",
        marginTop: "1rem",
        width: "30%",
        padding: "2rem",
        borderRadius: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Image
          src={Avtar}
          alt="user"
          style={{ height: "45px", objectFit: "cover" }}
        />
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            cursor: "pointer",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: 600 }}>
            Philosophy 2nd Years
          </p>
          <p
            style={{
              color: "#9E9E9E",
            }}
          >
            #1236
          </p>
        </span>
      </span>
      {pageNumber == 0 ? (
        <>
          <Input
            id={1}
            label="Forum Name"
            placeholder="e.g. Philosophy 2nd Year"
          ></Input>
          <Textarea id={1} label="Description" placeholder="e.g."></Textarea>
          <Button label="Save"></Button>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Here you can import students’ assignments so that they can use AI to
            intelligently query their work in the 1UP mobile app. Students can
            provide access to their AI interactivity history allowing you to
            understand the issues they are trying to understand more deeply.
            Interactive participation with your students and their AI forums can
            be enabled in this tab. You should encourage your students to use AI
            to query their work, and support them in developing the complexity
            of their questioning, all of which you can do from here.
          </p>
        </>
      ) : pageNumber == 1 ? (
        <>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            A short Description should be written here in the space allocated
            here
          </p>
          <p
            style={{
              color: " #757575",
            }}
          >
            Last Updated: 14/ 01/ 24
          </p>
        </>
      ) : (
        <>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            A short Description should be written here in the space allocated
            here
          </p>
          <p
            style={{
              color: " #757575",
            }}
          >
            Last Updated: 14/ 01/ 24
          </p>
        </>
      )}
    </div>
  );
};

export default FormLeft;
