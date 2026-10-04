import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsliked] = useState(false);

  let toggleLike = () => {
    console.log("We are going to toggle");

    setIsliked(!isLiked);

    let newValue = !isLiked;
    console.log("NewValue:", newValue);
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}