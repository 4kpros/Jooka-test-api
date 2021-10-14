# Jooka-test-api

express js API https://jooka-test-api.herokuapp.com


   Posts Links

      (GET) all posts
      https://jooka-test-api.herokuapp.com/posts/all

      (POST) new post 
      https://jooka-test-api.herokuapp.com/posts

      (DELETE) post : parameter "id"
      https://jooka-test-api.herokuapp.com/posts/all

   Comments Links

      (GET) all comments
      https://jooka-test-api.herokuapp.com/comments/all

      (POST) new comment 
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
        
