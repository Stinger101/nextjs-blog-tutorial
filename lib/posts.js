import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(),'posts');

export function getSortedPostsData(){
    //get file names from /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // remove .md from filename to get id
        const id = fileName.replace(/\.md$/,'');

        // read markdown file as String
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath,'utf8');

        // use gray-matter to parse the posts metadata section
        const matterResult = matter(fileContents);

        // combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // sort posts by date
    return allPostsData.sort((a,b) =>{
        if (a.date < b.date){
            return 1;
        } else {
            return -1;
        }
    });

    // instead of the file system,
    // fetch post data from an external API endpoint
    // const res = await fetch('..');
    // return res.json();

    // You can also query a database directly
    // import someDatabaseSDK from 'someDatabaseSDK'
    // ---outside the function
    //const databaseClient = someDatabaseSDK.createClient(...)
    // ---inside the function
    // return databaseClient.query('Select posts...')
}

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory);

    // Returns an array that looka like this:
    // [
    //     {
    //         params: {
    //             id: 'ssg-ssr'
    //         }
    //     },
    //     {
    //         params: {
    //             id: 'pre-rendering'
    //         }
    //     }
    // ]
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/,''),
            }
        }
    });
}

export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath,'utf8');

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // use remark to convert markdowm into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}