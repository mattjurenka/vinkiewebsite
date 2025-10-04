import { Metadata } from "next";
import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";

export const metadata: Metadata = {
    title: "The Cremation of Sam McGee",
};

export default function Page() {
    return <>
        <Video video_id_first="1124399032" video_id_second="11332feaea" />
        <Title>The Cremation of Sam McGee</Title>
        <Description>
       
        </Description>
    </>
}