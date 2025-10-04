import { Metadata } from "next";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";
import Description from "../../../../lib/components/Description";

export const metadata: Metadata = {
    title: "Theo's rockSTAR Story",
};

export default function Page() {
    return <>
        <Video video_id_first="1083326326" video_id_second="a606ed0be7" />
        <Title>Theo&apos;s rockSTAR Story</Title>
        <Description>
         
        </Description>
    </>
}