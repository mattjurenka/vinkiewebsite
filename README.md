# Vinkies Portfolio

## To Add Video:

### Environment Setup
1. Ensure you have [visual studio code](https://code.visualstudio.com/) installed 
2. Clone the code into your local computer by running this command in the vscode terminal: `git clone https://github.com/mattjurenka/vinkiewebsite.git`
3. Ensure you have [node](https://nodejs.org/en/download) installed. Use the `.msi` windows installer.

### Steps
0. Ensure that your local folder is up to date: `git reset --hard && git pull` NOTE: This will discard all local
1. Create a thumbnail image and upload it to UploadThing. The image should be 1024x428 in WebP format.
2. Upload the video to Vimeo and note the resulting URL. For example `https://vimeo.com/1083322503/f4c5e9856e?ts=0&share=copy`. In this example, `1083322503` is `video_id_first`, and `f4c5e9856e` is `video_id_second`.
3. Duplicate the folder `src/app/(portfolio)/2025-gala-recap` and rename the duplicated folder into an appropriate title, e.g. `src/app/(portfolio)/my-new-video-title`. Now under `my-new-video-title/page.tsx`, update `video_id_first` and `video_id_second` as appropriate, as well as editing the description inside the `<Description></Description>` tag and the `title` field in the `export const metadata...` section
4. In `src/app/page.tsx` duplicate one of the `Thumbnail` tags and edit the attributes. `img_url` should be the file url that was uploaded to UploadThing. `title` should be whatever title you want, and `page_url` should be the name of the new folder that you made in the last step. 
5. Check your work with `npm run dev` and visit [http://localhost:3000/](http://localhost:3000/) in your web browser.
6. Run `npm run build` to check that the site will be built correctly. There should be no errors.
7. Add the unchanged files to git: `git add .`
8. Commit `git add . -m "your change message"`
9. Push: `git push`. This will trigger a build and the changes will soon be available at [https://vinkiewebsite.pages.dev/](https://vinkiewebsite.pages.dev/)
