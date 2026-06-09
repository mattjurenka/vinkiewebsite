import { Metadata } from "next";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";
import Description from "../../../../lib/components/Description";

export const metadata: Metadata = {
    title: "Zach - A rockSTAR Story",
};

export default function Page() {
    return <>
        <Video video_id_first="1199645545" video_id_second="e72b13c720" />
        <Title>Zach - A rockSTAR Story</Title>
        <Description>
        
        </Description>
    </>
}