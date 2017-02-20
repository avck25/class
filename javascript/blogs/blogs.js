/*global $*/
(function () {
    'use strict';

    const apiEndpoint = 'https://jsonplaceholder.typicode.com/',
        contentElem = $('#content'),
        titleElem = $('#title');

    function loadComments(post, commentsElem) {
        const commentList = $('<ul></ul>').appendTo(commentsElem);

        $.getJSON(apiEndpoint + 'comments', { postId: post.id }, function (comments) {
            comments.forEach(function (comment) {
                $('<li>' +
                    comment.body +
                    '<br><strong><small>' + comment.name + '</small></strong>' +
                    '</li>')
                    .appendTo(commentsElem);
            });
        });
    }

    function showPosts(posts, postList) {
        postList.empty();
        posts.forEach(function (post) {
            let commentsShowing = false;

            const postElem = $('<li>' +
                '<strong>' + post.title + '</strong><br>' +
                post.body +
                '<br><a href="#">view comments</a>' +
                '</li>')
                .appendTo(postList),
                commentsElem = $('<div class="comments"></div>').appendTo(postElem),
                commentsToggle = postElem.find('a')
                    .click(function () {
                        commentsShowing = !commentsShowing;
                        if (commentsShowing) {
                            if (!commentsElem.children().length) {
                                loadComments(post, commentsElem);
                            }
                            commentsElem.show();
                        } else {
                            commentsElem.hide();
                        }

                        commentsToggle.text((commentsShowing ? 'hide' : 'view') + ' comments');
                    });
        });
    }

    function loadBlog(blog) {
        titleElem.text(blog.name + "'s blog");
        contentElem.empty();
        const postList = $('<ul></ul>').appendTo(contentElem),
            NUM_POSTS = 3;
        let index = 0;

        $.getJSON(apiEndpoint + 'posts', { userId: blog.id }, function (posts) {
            const prevButton = $('<a href="#">prev</a>')
                .appendTo(contentElem)
                .click(function () {
                    index -= NUM_POSTS;
                    update();
                }),
                nextButton = $('<a class="right" href="#">next</a>')
                    .appendTo(contentElem)
                    .click(function () {
                        index += NUM_POSTS;
                        update();
                    });

            function update() {
                showPosts(posts.slice(index, NUM_POSTS + index), postList);

                if (index > 0) {
                    prevButton.show();
                } else {
                    prevButton.hide();
                }

                if (index < posts.length - NUM_POSTS) {
                    nextButton.show()
                } else {
                    nextButton.hide();
                }
            }
            update();
        });
    }

    function loadBlogs() {
        titleElem.text('Blog List');
        contentElem.empty();
        const blogList = $('<ul></ul>').appendTo(contentElem);

        $.getJSON(apiEndpoint + 'users', function (blogs) {
            blogs.forEach(function (blog) {
                $('<li><a href="#">' +
                    'Name: ' + blog.name + '<br>' +
                    'Website: ' + blog.website + '<br>' +
                    'Company: ' + blog.company.name + '<br>' +
                    '</a></li>')
                    .appendTo(blogList)
                    .click(function () {
                        loadBlog(blog);
                    });
            });
        });
    }

    $('#blogList').click(loadBlogs);

    loadBlogs();
} ());