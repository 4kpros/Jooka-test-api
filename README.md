# Jooka-test-api

express js API 


Links

   Posts

      Get all posts
      https://jooka-test-api.herokuapp.com/posts/all

      Save new post 
      https://jooka-test-api.herokuapp.com/posts

      Delete post
      https://jooka-test-api.herokuapp.com/posts/all

   Comments

      Get all comments
      https://jooka-test-api.herokuapp.com/comments/all

      Save new comment 
      https://jooka-test-api.herokuapp.com/comments


 Post SCHEMA:

     title: {
       type: String,
       required: true
     },
     description: {
       type: String,
     },
     date: {
       type: Date,
       default: Date.now
     },
     sender: {
       type: String,
       required: true
     },
     thumbnail: {
       type: String
     }


 Comment SCHEMA:

     post_id: {
       type: Number,
       required: true
     },
     sender_mail: {
       type: String,
       required: true
     },
     content: {
       type: String,
       required: true
     },
     date: {
       type: Date,
       default: Date.now
     }
        
