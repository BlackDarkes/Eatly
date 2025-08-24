import { memo } from "react";
import { FEATURES_ITEMS } from "../constants/features";
import { FeatureItem } from "../ui/FeatureItem/FeatureItem";

export const GenerateFeatures = memo(() => {
  return (
    <>
      {FEATURES_ITEMS.map((item) => {
        return <FeatureItem key={item.id} item={item} />;
      })}
    </>
  );
});
