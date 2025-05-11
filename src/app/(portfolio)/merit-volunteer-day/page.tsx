import { Metadata } from "next";
import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";

export const metadata: Metadata = {
    title: "Merit Volunteer Day",
};

export default function Page() {
    return <>
        <Video video_id_first="1083325596" video_id_second="a73088e806" />
        <Title>Merit Volunteer Day</Title>
        <Description>
            A feel-good recap I filmed and edited, documenting a collaboration between Melodic Caring Project and Merit Financial Advisors. 
            The video follows volunteers as they assemble care paackages and deliver them to Mary Bridge Children&apos;s Hospital, 
            capturing joyful moments and heartfelt gratitude.
        </Description>
    </>
}