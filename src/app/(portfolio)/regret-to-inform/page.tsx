import { Metadata } from "next";
import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";

export const metadata: Metadata = {
    title: "Regret to Inform",
};

export default function Page() {
    return <>
        <Video video_id_first="1083322503" video_id_second="f4c5e9856e" />
        <Title>Regret to Inform</Title>
        <Description>
            A short film I wrote, directed, produced, edited, and scored as a school project.
            Set in the aftermath of personal tragedy, the story centers on a grieving man weighed down
            by loss and unresolved emotions. When a friend visits and encourages him to confront a
            letter that holds painful memories, the film gently reveals the quiet strength of friendship
            in the face of hardship. A reminder that even in our darkest moments, we don’t have to
            face life alone.
        </Description>
    </>
}