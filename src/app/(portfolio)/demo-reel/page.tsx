import { Metadata } from "next";

import Description from "../../../../lib/components/Description";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";

export const metadata: Metadata = {
    title: "Demo Reel",
};

export default function Page() {
    return <>
        <Video video_id_first="1124110031" video_id_second="4d6e1a3f52" />
        <Title>Demo Reel</Title>
        <Description>
           
        </Description>
        
    </>
}