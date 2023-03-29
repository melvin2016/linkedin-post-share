declare module 'linkedin-post-share/index' {
  export default class LinkedinPostShare {
      private accessToken;
      private LINKEDIN_BASE_URL;
      private LINKEDIN_VERSION;
      constructor(accessToken: string);
      private getProfileData;
      getPersonURN(): Promise<string | null>;
      private createImageUploadRequest;
      private uploadImage;
      createPostWithImage(post: string, image: Blob, imageAlt?: string): Promise<boolean | undefined>;
  }

}
declare module 'linkedin-post-share' {
  import main = require('linkedin-post-share/src/index');
  export = main;
}