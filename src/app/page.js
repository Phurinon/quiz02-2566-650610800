"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            {/* <img
              src="/profileImages/รูปทำเนียบ.png"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            /> */}
            {/* <span className="fw-semibold fs-5 text-white">
              Phurinon Foeythika 650610800
            </span> */}
            <PostOwner
              name="Phurinon Foeythika"
              studentId="6506100800"
              imgUrl={"/profileImages/รูปทำเนียบ.png"}
            />
          </div>

          <span className="text-white">
            Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207
          </span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>100 คน</span>
          </div>
          <hr className="m-0 border" />
        </div>

        {/* Comment Example */}
        {/* <div className="d-flex gap-2 my-2"> */}
        {/* <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              Lisa
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>999 คน</span>
            </div>
          </div> */}
        {/* <Comment
          userImagePath={"/profileImages/lisa.jpg"}
          username={"Lisa"}
          commentText={"จริงค่า"}
          likeNum={"999 คน"}
        /> */}
        {/* </div> */}

        {/* Reply Example */}
        {/* <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              หมาน้อย
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>2 คน</span>
            </div>
          </div>
        </div> */}
        {/* <Reply
          userImagePath={"/profileImages/puppy.jpg"}
          username={"หมาน้อย"}
          replyText={"จริงค้าบบบบบบบบ"}
          likeNum={"2 คน"}
        /> */}

        {/* map-loop render Comment component here */}
        {comments.map((comments) => (
          <Comment
            userImagePath={comments.userImagePath}
            username={comments.username}
            commentText={comments.commentText}
            likeNum={comments.likeNum}
            replies={comments.replies}
          />
        ))}
      </div>
    </div>
  );
}
