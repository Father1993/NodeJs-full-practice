const getCommentsHandler = (req, res) => {
    res.send('Get comments route');
};
const postCommentsHandler = (req, res) => {
    res.send('Post comments route');
};
const getSingleCommentHandler = (req, res) => {
    res.send(`Get comment route. CommentId: ${req.params.commentId}`);
};
const deleteSingleCommentHandler = (req, res) => {
    res.send(`Delete comments route. CommentId: ${req.params.commentId}`);
};

module.exports = {
    getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHandler,
};
