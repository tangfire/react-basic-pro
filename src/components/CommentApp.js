import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentApp = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "张三",
            content: "这个设计真的很棒，界面简洁大方，用户体验很好！",
            date: "2023-05-15 14:30",
            likes: 5,
            liked: false,
            timestamp: new Date("2023-05-15T14:30:00").getTime()
        },
        {
            id: 2,
            author: "李四",
            content: "功能很实用，希望能增加更多自定义选项。",
            date: "2023-05-16 09:15",
            likes: 3,
            liked: true,
            timestamp: new Date("2023-05-16T09:15:00").getTime()
        },
        {
            id: 3,
            author: "王五",
            content: "响应式设计做得不错，在手机上使用体验也很好。",
            date: "2023-05-17 16:45",
            likes: 8,
            liked: false,
            timestamp: new Date("2023-05-17T16:45:00").getTime()
        }
    ]);

    const [activeTab, setActiveTab] = useState('latest');

    const addComment = (author, content) => {
        const now = new Date();
        const newComment = {
            id: Date.now(), // 使用时间戳作为ID更可靠
            author,
            content,
            date: now.toLocaleString('zh-CN'),
            timestamp: now.getTime(),
            likes: 0,
            liked: false
        };
        setComments([newComment, ...comments]); // 新评论添加到前面
    };

    const handleLike = (id) => {
        setComments(comments.map(comment => {
            if (comment.id === id) {
                return {
                    ...comment,
                    likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
                    liked: !comment.liked
                };
            }
            return comment;
        }));
    };

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    // 排序函数
    const getSortedComments = () => {
        const commentsCopy = [...comments];

        if (activeTab === 'latest') {
            // 按时间倒序排列（最新的在前面）
            return commentsCopy.sort((a, b) => b.timestamp - a.timestamp);
        } else if (activeTab === 'hot') {
            // 按点赞数倒序排列（点赞多的在前面）
            return commentsCopy.sort((a, b) => b.likes - a.likes);
        }

        return commentsCopy;
    };

    const sortedComments = getSortedComments();

    return (
        <div className="container">
            <h1>评论组件</h1>
            <p className="subtitle">这是一个React评论组件练习，可以添加评论和点赞</p>

            <CommentForm onAddComment={addComment} />

            {/* Tab切换 */}
            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'latest' ? 'active' : ''}`}
                    onClick={() => setActiveTab('latest')}
                >
                    最新评论
                </button>
                <button
                    className={`tab ${activeTab === 'hot' ? 'active' : ''}`}
                    onClick={() => setActiveTab('hot')}
                >
                    最热评论
                </button>
            </div>

            <div className="comment-list">
                {sortedComments.length > 0 ? (
                    sortedComments.map(comment => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            onLike={handleLike}
                            onDelete={deleteComment}
                        />
                    ))
                ) : (
                    <div className="empty-state">
                        <h3>暂无评论</h3>
                        <p>成为第一个发表评论的人吧！</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentApp;