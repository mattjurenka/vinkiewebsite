import { Metadata } from "next";
import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";

export const metadata: Metadata = {
    title: "2025 Gala Recap",
};

export default function Page() {
    return <>
        <Video video_id_first="1083325003" video_id_second="74c13e97c9" />
        <Description>
            A highlight video capturing the energy and heart of the Melodic Caring
            Project’s annual gala. I filmed the event, directed camera ops, created on-screen content,
            and edited the final piece to showcase the night’s most powerful moments.
        </Description>
    </>
}