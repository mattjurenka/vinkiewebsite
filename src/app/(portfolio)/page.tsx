"use client"

import Thumbnail from "../../../lib/components/Thumbnail";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Thumbnail
        img_url="https://fdpu740ek4.ufs.sh/f/aJLfTNgnRfQIY7lzHKjBXgijfnmzTvdrxQ53FqkEc8NWCIDM"
        title="From Death To Life"
        page_url="from-death-to-life"
      />
      <Thumbnail
        img_url="https://fdpu740ek4.ufs.sh/f/aJLfTNgnRfQIk3JE5bSsZ2nWv7EVfzerK6CIbNSFXo1at9R3"
        title="Regret To Inform"
        page_url="regret-to-inform"
      />
    </div>
  );
}
