import React from "react";
import CommentItem from "./commentItem";

const SearchContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-flow-row gap-4">
        <CommentItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam laboriosam ducimus, beatae dolorem incidunt distinctio necessitatibus reiciendis nihil commodi totam quisquam, maxime repellat saepe sed nostrum ea doloremque architecto."
          }
          socialMedia={"instagram"}
          imgUrl={"https://github.com/shadcn.png"}
          polarity={"neutral"}
        />
        <CommentItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam laboriosam ducimus, beatae dolorem incidunt distinctio necessitatibus reiciendis nihil commodi totam quisquam, maxime repellat saepe sed nostrum ea doloremque architecto."
          }
          socialMedia={"x"}
          imgUrl={"https://github.com/shadcn.png"}
          polarity={"negative"}
        />
        <CommentItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam laboriosam ducimus, beatae dolorem incidunt distinctio necessitatibus reiciendis nihil commodi totam quisquam, maxime repellat saepe sed nostrum ea doloremque architecto."
          }
          socialMedia={"x"}
          imgUrl={"https://github.com/shadcn.png"}
          polarity={"positive"}
        />
        <CommentItem
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam laboriosam ducimus, beatae dolorem incidunt distinctio necessitatibus reiciendis nihil commodi totam quisquam, maxime repellat saepe sed nostrum ea doloremque architecto."
          }
          socialMedia={"instagram"}
          imgUrl={"https://github.com/shadcn.png"}
          polarity={"positive"}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
