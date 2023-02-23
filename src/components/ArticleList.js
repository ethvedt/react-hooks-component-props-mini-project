import React from 'react';
import Article from "../components/Article.js"

function ArticleList({posts}) {
    const postList = posts.map(({ date, title, preview, id }) => {
        return <Article title={title} date={date} preview={preview} key={id}/>
    })
    return (
        <main>
            {postList}
        </main>
    );
}

export default ArticleList;