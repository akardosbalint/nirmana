import { ImageResponse } from "next/og";
import { siteName, siteTagline } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#F7F3EC",
          padding: "90px",
          position: "relative",
        }}
      >
        <svg
          width="360"
          height="360"
          viewBox="0 0 100 100"
          style={{ position: "absolute", right: 60, top: "50%", marginTop: -180 }}
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#DED3C2"
            strokeWidth="2.2"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#55493F"
            strokeWidth="2.2"
          />
          <circle cx="50" cy="50" r="14" fill="#9C5934" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#9C5934",
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 54,
            fontWeight: 600,
            color: "#2B2622",
            maxWidth: 760,
            lineHeight: 1.2,
          }}
        >
          {siteTagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
