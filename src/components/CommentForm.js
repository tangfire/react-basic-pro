import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (author.trim() && content.trim()) {
            onAddComment(author, content);
            setAuthor("");
            setContent("");
        } else {
            alert("请填写完整信息！");
        }
    };

    return (
        <div className="comment-form">
            <h3>发表评论</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">姓名</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="请输入您的姓名"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">评论内容</label>
                    <textarea
                        id="content"
                        rows="4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="请输入您的评论"
                    ></textarea>
                </div>
                <button type="submit">提交评论</button>
            </form>
        </div>
    );
};

export default CommentForm;