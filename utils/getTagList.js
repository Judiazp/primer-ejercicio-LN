
export const getTags = (articles) => {
    return articles.map(article => article.taxonomy.tags ).flat()
}

export const groupTags = (tags) => {
    return tags.reduce((acc, tag) => {
        const { text } = tag
        acc[text] ? acc[text] += 1 : acc[text] = 1
        return acc
    }, {})
}

export const orderTags = (groupTags) => {
    return Object.keys(groupTags).sort((firtsTag, secondTag) => groupTags[secondTag] - groupTags[firtsTag])
}