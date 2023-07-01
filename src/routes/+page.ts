import type { PageLoad } from "./$types";

export const load = (async () => {
    const response = await fetch("https://meme-api.com/gimme");
    const responseData = await response.json();
    const postLink = responseData.postLink;
    const subreddit = responseData.subreddit;
    const title = responseData.title;
    const ImageUrl = responseData.url;
    const author = responseData.author;

    return {
        postLink: postLink,
        subreddit: subreddit,
        title: title,
        imageUrl: ImageUrl,
        author: author,
    };
}) satisfies PageLoad;
