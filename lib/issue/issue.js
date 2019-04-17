
async function opened(context){
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
};

module.exports = {
    opened
};