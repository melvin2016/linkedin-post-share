# LinkedIn Post Share

A Node.js package for sharing a post on LinkedIn with an image.

Please note that this package only supports creating a post with an image as of now. More LinkedIn posting formats will be added soon.

## Installation

To install the package, use NPM:

```bash
npm install linkedin-post-share
```

## Usage

To use the package, you will need to obtain an access token for the LinkedIn API. You can do this by following the instructions in the [LinkedIn API documentation](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow).

Once you have obtained an access token, you can create a LinkedinPostShare instance and call the createPostWithImage method to share a post on LinkedIn:

```javascript
import LinkedinPostShare from "linkedin-post-share";

const accessToken = "<your access token>";

const post = "This is my post content";
// Buffer representing the image
const image = await fetch("https://example.com/some-image.jpeg").then((response) => response.buffer()); ;
const imageAlt = "Alternative text for the image";

const linkedinPostShare = new LinkedinPostShare(accessToken);
const result = await linkedinPostShare.createPostWithImage(post, image, imageAlt);

if (result) {
  console.log("Post shared successfully!");
} else {
  console.log("Failed to share post.");
}
```

### 🚨 NOTE

__This package will automatically remove any reserved characters that are mentioned in the [Linkedin Docs](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/little-text-format?view=li-lms-2023-03#text) like `[|{}@\[\]()<>\\*_~+]` from the post string.__

### API

#### LinkedinPostShare

The main class of the package. Takes an access token for the LinkedIn API as an argument.

- `createPostWithImage(post: string, image: Buffer, imageAlt?: string): Promise<boolean>`
Creates a post on LinkedIn with an image. Returns a Promise that resolves to true if the post was shared successfully, or false otherwise.

  - post - The text of the post.
  - image - A Buffer.
  - imageAlt - Optional alternative text for the image. If not provided, a default value will be used.

### Contributing

Contributions to this package are welcome! If you find a bug or would like to request a new feature, please open an issue on the GitHub repository. If you would like to contribute code, please open a pull request.
