# Vinkies Portfolio

## To Add Video:

### Environment Setup
1. Ensure you have [visual studio code](https://code.visualstudio.com/) installed 
2. Clone the code into your local computer by running this command in the vscode terminal: `git clone https://github.com/mattjurenka/vinkiewebsite.git`
3. Ensure you have [node](https://nodejs.org/en/download) installed. Use the `.msi` windows installer.

### Steps
1. Create a thumbnail image and upload it to UploadThing. The image should be 1024x428 in WebP format.
2. Upload the video to Vimeo and note the resulting URL. For example `https://vimeo.com/1083322503/f4c5e9856e?ts=0&share=copy`. In this example, `1083322503` is `video_id_first`, and `f4c5e9856e` is `video_id_second`.
3. Duplicate the folder `src/app/(portfolio)/2025-gala-recap` and rename the duplicated folder into an appropriate title, e.g. `src/app/(portfolio)/my-new-video-title`. Now under `my-new-video-title/page.tsx`, update `video_id_first` and `video_id_second` as appropriate, as well as editing the description inside the `<Description></Description>` tag.
