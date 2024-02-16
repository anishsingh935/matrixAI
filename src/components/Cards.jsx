import React from "react";
import Image from "next/image";
import { More } from "@/assets/svg";
import Card from "./common/Card";
// import Image from "next/image";
import { Facebook, Insta, Twitter, Intranet, Read } from "@/assets/svg";
const Cards = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: "1rem",
        margin: "1rem",
        marginInline: "2rem",
        borderRadius: "3rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        columnGap: "1rem",
        rowGap: "1rem",
      }}
    >
      {data.map((item) => {
        return (
          <div>
            <span
              style={{
                background: "#FAFAFA",
                padding: "10px",
                borderRadius: "20px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  Economics 2nd Year
                </p>
                <Image src={More} alt="More Image"></Image>
              </span>
              <p
                style={{
                  color: "#757575",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                A short Description should be written here in the space
                allocated here
              </p>
              <span
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Card></Card>
                <Card></Card>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                <Image src={Facebook}></Image>
                <Image src={Intranet}></Image>
                <Image src={Read}></Image>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
