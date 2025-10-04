import { Metadata } from "next";
import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";

export const metadata: Metadata = {
    title: "Tadpole",
};

export default function Page() {
    return <>
        <Video video_id_first="1124397111" video_id_second="bc980a4f45" />
        <Title>Tadpole</Title>
        <Description>
          
        </Description>
    </>
}