"use client";
import { useState } from "react";

export const PostOwner = ({ name, studentId, imgUrl }) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <img
        src={imgUrl}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5 text-white">
        {name} {studentId}
      </span>
    </div>
  );
};
