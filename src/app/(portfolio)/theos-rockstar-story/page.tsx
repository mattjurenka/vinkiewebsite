import { Metadata } from "next";
import Video from "../../../../lib/components/Video";

export const metadata: Metadata = {
    title: "Theo's Rockstar Story",
};

export default function Page() {
    return <>
        <Video video_id_first="1083326326" video_id_second="a606ed0be7" />
    </>
}