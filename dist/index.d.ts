/// <reference types="node" />
export default class LinkedinPostShare {
    private accessToken;
    private LINKEDIN_BASE_URL;
    private LINKEDIN_VERSION;
    constructor(accessToken: string);
    private getProfileData;
    getPersonURN(): Promise<string | null>;
    private createImageUploadRequest;
    private uploadImage;
    private removeLinkedinReservedCharacters;
    createPostWithImage(post: string, image: Buffer, imageAlt?: string): Promise<boolean | undefined>;
}
