import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F3EC",
          borderRadius: 6,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#DED3C2"
            strokeWidth="5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#55493F"
            strokeWidth="5"
          />
          <circle cx="50" cy="50" r="14" fill="#9C5934" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
