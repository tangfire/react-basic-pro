import React from 'react';

const Comment = ({ comment, onLike, onDelete }) => {
    return (
        <div className="comment">
            <div className="comment-header">
                <div className="comment-author">{comment.author}</div>
                <div className="comment-date">{comment.date}</div>
            </div>
            <div className="comment-content">{comment.content}</div>
            <div className="comment-footer">
                <button
                    className={`like-btn ${comment.liked ? 'liked' : ''}`}
                    onClick={() => onLike(comment.id)}
                >
                    <span>{comment.liked ? '❤️' : '🤍'}</span>
                    <span className="like-count">{comment.likes}</span>
                </button>
                <button
                    className="delete-btn"
                    onClick={() => onDelete(comment.id)}
                >
                    删除
                </button>
            </div>
        </div>
    );
};

export default Comment;