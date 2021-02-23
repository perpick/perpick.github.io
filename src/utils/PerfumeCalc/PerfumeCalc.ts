import mbtis from "@src/constants/mbtis.json";
import tags from "@src/constants/mbti_tags.json";
import titles from "@src/constants/titles.json";
import genders from "@src/constants/gender_tags.json";

export const getDescription = (mbti: string | undefined) =>
  mbti ? mbtis.find((m) => m.mbti === mbti) : undefined;

export const getTagsWithAttr = (mbti: string | undefined) => {
  if (!mbti) return undefined;

  const attrs = mbti.split("");
  const tag = attrs.map((attr) => {
    const tag = tags.find((t) => t.type === attr);

    if (!tag) return [];

    return tag.tags;
  });

  if (tag.length !== 4) return undefined;

  return tag.flat();
};

export const getTitle = (title: string | undefined) =>
  title ? titles.find((t) => t.type === title) : undefined;

export const getGender = (gender: string | undefined) =>
  gender ? genders.find((g) => g.type === gender) : undefined;
