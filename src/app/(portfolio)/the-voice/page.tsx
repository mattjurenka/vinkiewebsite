import { Metadata } from "next";
import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";

export const metadata: Metadata = {
    title: "The Voice",
};

export default function Page() {
    return <>
        <Video video_id_first="1124398840" video_id_second="c354eadd77" />
        <Title>The Voice</Title>
        <Description>
          
        </Description>
    </>
}