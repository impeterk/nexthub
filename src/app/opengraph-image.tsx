import { ImageResponse } from "next/og";

import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/favicon-dark.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 32,
              height: 32,
              background: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
            }}
          >
            <img src={logoSrc} height={20} />
          </span>
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
              lineHeight: 1,
              marginBlock: 0,
            }}
          >
            peterk.dev
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px 150px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            textAlign: "center",
            backgroundColor: "black",
            borderRadius: "0.25rem",
            color: "white",
            lineHeight: 1.4,
          }}
        >
          <span>Design</span>
          <span>Develop</span>
          <span>Deliver</span>
        </div>
      </div>
    ),
  );
}
