import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

export const Loading = ({ count, height, width }) => {
  const renderMultipleSkeleton = () => {
    {Array(count)
      .fill()
      .map((_, index) => (
        <Skeleton key={index} height={height} width={width} />
      ))}
  }

  return (
    {count} > 1 ? renderMultipleSkeleton() : (
      <Skeleton
        count={count}
        height={height}
        width={width}
        borderRadius={12}
      />
    )
  )
}
