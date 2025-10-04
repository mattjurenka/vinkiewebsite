import { Metadata } from "next";
import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";

export const metadata: Metadata = {
    title: "Carry My Soul",
};

export default function Page() {
    return <>
        <Video video_id_first="1124397216" video_id_second="11080074a9" />
        <Title>Carry My Soul</Title>
        <Description>
           
        </Description>
    </>
}