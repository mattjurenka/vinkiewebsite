import { Metadata } from "next";

import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";

export const metadata: Metadata = {
    title: "From Death To Life",
};

export default function Page() {
    return <>
        <Video video_id_first="1083321010" video_id_second="01bf88d6f2" />
        <Description>
            A deeply personal short film I wrote, produced, and edited as a solo school project.
            Featuring original music by my band The Future Is, this emotional narrative follows
            a man haunted by grief and regret as he revisits memories of a lost relationship.
            As the story unfolds between past and present, it explores the weight of unspoken words
            and the importance of cherishing the people we love before it’s too late.
        </Description>
    </>
}