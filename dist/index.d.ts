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
declare module 'linkedin-post-share/index.types' {
  export type Profile = {
      firstName: {
          localized: {
              en_US: string;
          };
          preferredLocale: {
              country: string;
              language: string;
          };
      };
      localizedFirstName: string;
      headline: {
          localized: {
              en_US: string;
          };
          preferredLocale: {
              country: string;
              language: string;
          };
      };
      localizedHeadline: string;
      vanityName: string;
      id: string;
      lastName: {
          localized: {
              en_US: string;
          };
          preferredLocale: {
              country: string;
              language: string;
          };
      };
      localizedLastName: string;
      profilePicture: {
          displayImage: string;
      };
  };
  export type ImageUpload = {
      value: {
          uploadUrlExpiresAt: number;
          uploadUrl: string;
          image: string;
      };
  };

}
declare module 'linkedin-post-share' {
  import main = require('linkedin-post-share/src/index');
  export = main;
}