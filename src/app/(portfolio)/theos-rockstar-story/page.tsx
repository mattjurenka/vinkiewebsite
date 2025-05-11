import { Metadata } from "next";
import Video from "../../../../lib/components/Video";
import Title from "../../../../lib/components/Title";
import Description from "../../../../lib/components/Description";

export const metadata: Metadata = {
    title: "Theo's rockSTAR Story",
};

export default function Page() {
    return <>
        <Video video_id_first="1083326326" video_id_second="a606ed0be7" />
        <Title>Theo&apos;s rockSTAR Story</Title>
        <Description>
            A documentary I edited, highlighting the inspiring journey of Theo, a “rockSTAR”
            with the Melodic Caring Project. While enduring major medical challenges and spending his
            first year of college in a hospital, Theo faced isolation, pain, and depression. Through his
            connection with Melodic, he found community, hope, and music that carried him through.
            This powerful story is a testament to resilience and the healing power of human connection.
        </Description>
    </>
}