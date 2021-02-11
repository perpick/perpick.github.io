import type { MBTI } from "./MBTI";
import type { Title } from "./Titles";

export type Users = {
    mbti?: MBTI;
    title?: Title;
    selects: []
}