import Script from "next/script"

export interface VideoProps {
    video_id_first: string
    video_id_second: string

}

export default function Video({ video_id_first, video_id_second }: VideoProps) {
    return <div style={{padding: "30%", position:"relative"}}>
        <iframe
            src={`https://player.vimeo.com/video/${video_id_first}?h=${video_id_second}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}
            title="From Death to Life"
        />
        <Script src="https://nextjs.org/docs/messages/no-sync-scripts" />
    </div>
}