import React from "react";
import "../../pages/Tags/Tags.css";
import Tag from "./Tag";
import { useSelector } from "react-redux";
import { selectAllTags } from "../../store/tag/selectors";

export default function Tags() {
  const allTags = useSelector(selectAllTags);

  return (
    <div className="tagsContainer">
      <Tag color="warning" text={"All"} tagId={"all"} />
      {allTags?.tags.map((tag) => {
        return (
          <Tag
            key={tag.id}
            color="warning"
            bgColor={tag.color}
            text={`${tag.name}`}
            tagId={tag.id}
          />
        );
      })}
    </div>
  );
}
