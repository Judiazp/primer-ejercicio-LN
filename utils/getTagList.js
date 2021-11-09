
export const getTags = (articles) => {
    return articles.map(article => article.taxonomy.tags ).flat()
}

export const groupTags = (tags) => {
    return tags.reduce((acc, tag) => {
        const { text, slug } = tag
 
        acc[text] = acc[text] || {slug, text, count: 0}
        acc[text].count ? acc[text].count += 1 : acc[text].count = 1

        return acc
    }, {})
}

export const orderTags = (groupTags) => {
    return Object.values(groupTags).sort((a,b) => (b.count - a.count ) )
}