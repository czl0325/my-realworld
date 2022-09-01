# my-realworld
基于realworld的api接口，练手开发vue3+nuxt的服务端渲染项目


#### api接口文档
[https://github.com/gothinkster/realworld/tree/main/api](https://github.com/gothinkster/realworld/tree/main/api)

Register
POST https://api.realworld.io/api/users [200 OK, 1.16kB, 1559ms]
✓  Response contains "user" property
✓  User has "email" property
✓  User has "username" property
✓  User has "bio" property
✓  User has "image" property
✓  User has "token" property

↳ Login
POST https://api.realworld.io/api/users/login [200 OK, 1.15kB, 441ms]
✓  Response contains "user" property
✓  User has "email" property
✓  User has "username" property
✓  User has "bio" property
✓  User has "image" property
✓  User has "token" property

↳ Login and Remember Token
POST https://api.realworld.io/api/users/login [200 OK, 1.14kB, 440ms]
✓  Response contains "user" property
✓  User has "email" property
✓  User has "username" property
✓  User has "bio" property
✓  User has "image" property
✓  User has "token" property
✓  Global variable "token" has been set

↳ Current User
GET https://api.realworld.io/api/user [200 OK, 1.15kB, 339ms]
✓  Response contains "user" property
✓  User has "email" property
✓  User has "username" property
✓  User has "bio" property
✓  User has "image" property
✓  User has "token" property

↳ Update User
PUT https://api.realworld.io/api/user [200 OK, 1.15kB, 384ms]
✓  Response contains "user" property
✓  User has "email" property
✓  User has "username" property
✓  User has "bio" property
✓  User has "image" property
✓  User has "token" property

❏ Articles
↳ All Articles
GET https://api.realworld.io/api/articles [200 OK, 2.6kB, 598ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Articles by Author
GET https://api.realworld.io/api/articles?author=johnjacob [200 OK, 846B, 343ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  articlesCount is 0 when feed is empty

↳ Articles Favorited by Username
GET https://api.realworld.io/api/articles?favorited=u1661915515 [200 OK, 850B, 342ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  articlesCount is 0 when feed is empty

↳ Articles by Tag
GET https://api.realworld.io/api/articles?tag=dragons [200 OK, 842B, 428ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  articlesCount is 0 when feed is empty

❏ Articles, Favorite, Comments
↳ Create Article
POST https://api.realworld.io/api/articles [200 OK, 1.27kB, 376ms]
✓  Response contains "article" property
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Feed
GET https://api.realworld.io/api/articles/feed [200 OK, 846B, 369ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  articlesCount is 0 when feed is empty

↳ All Articles
GET https://api.realworld.io/api/articles [200 OK, 3.02kB, 697ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ All Articles with auth
GET https://api.realworld.io/api/articles [200 OK, 3.01kB, 688ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Articles by Author
GET https://api.realworld.io/api/articles?author=u1661915515 [200 OK, 1.28kB, 440ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Articles by Author with auth
GET https://api.realworld.io/api/articles?author=u1661915515 [200 OK, 1.29kB, 451ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Single Article by slug
GET https://api.realworld.io/api/articles/How-to-train-your-dragon-94754 [200 OK, 1.26kB, 410ms]
✓  Response contains "article" property
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Articles by Tag
GET https://api.realworld.io/api/articles?tag=dragons [200 OK, 1.29kB, 465ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  An article was returned
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  The first tag is dragons
✓  The second tag is training
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Update Article
PUT https://api.realworld.io/api/articles/How-to-train-your-dragon-94754 [200 OK, 1.24kB, 372ms]
✓  Response contains "article" property
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer

↳ Favorite Article
POST https://api.realworld.io/api/articles/How-to-train-your-dragon-94754/favorite [200 OK, 1.24kB, 383ms]
✓  Response contains "article" property
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article's 'favorited' property is true
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer
✓  Article's 'favoritesCount' property is greater than 0

↳ Articles Favorited by Username
GET https://api.realworld.io/api/articles?favorited=u1661915515 [200 OK, 1.26kB, 423ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is 1

↳ Articles Favorited by Username with auth
GET https://api.realworld.io/api/articles?favorited=u1661915515 [200 OK, 1.26kB, 414ms]
✓  Response code is 200 OK
✓  Response contains "articles" property
✓  Response contains "articlesCount" property
✓  articlesCount is an integer
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is 1

↳ Unfavorite Article
DELETE https://api.realworld.io/api/articles/How-to-train-your-dragon-94754/favorite [200 OK, 1.25kB, 366ms]
✓  Response contains "article" property
✓  Article has "title" property
✓  Article has "slug" property
✓  Article has "body" property
✓  Article has "createdAt" property
✓  Article's "createdAt" property is an ISO 8601 timestamp
✓  Article has "updatedAt" property
✓  Article's "updatedAt" property is an ISO 8601 timestamp
✓  Article has "description" property
✓  Article has "tagList" property
✓  Article's "tagList" property is an Array
✓  Article has "author" property
✓  Article has "favorited" property
✓  Article has "favoritesCount" property
✓  favoritesCount is an integer
✓  Article's "favorited" property is false

↳ Create Comment for Article
POST https://api.realworld.io/api/articles/How-to-train-your-dragon-94754/comments [200 OK, 1.09kB, 359ms]
✓  Response contains "comment" property
✓  Comment has "id" property
✓  Comment has "body" property
✓  Comment has "createdAt" property
✓  "createdAt" property is an ISO 8601 timestamp
✓  Comment has "updatedAt" property
✓  "updatedAt" property is an ISO 8601 timestamp
✓  Comment has "author" property

↳ All Comments for Article
GET https://api.realworld.io/api/articles/How-to-train-your-dragon-94754/comments [200 OK, 1.1kB, 399ms]
✓  Response code is 200 OK
✓  Response contains "comments" property
✓  Comment has "id" property
✓  Comment has "body" property
✓  Comment has "createdAt" property
✓  "createdAt" property is an ISO 8601 timestamp
✓  Comment has "updatedAt" property
✓  "updatedAt" property is an ISO 8601 timestamp
✓  Comment has "author" property

↳ All Comments for Article without login
GET https://api.realworld.io/api/articles/How-to-train-your-dragon-94754/comments [200 OK, 825B, 354ms]
✓  Response code is 200 OK
✓  Response contains "comments" property

↳ Delete Comment for Article
DELETE https://api.realworld.io/api/articles/How-to-train-your-dragon-94754/comments/21658 [200 OK, 815B, 366ms]

↳ Delete Article
DELETE https://api.realworld.io/api/articles/How-to-train-your-dragon-94754 [200 OK, 813B, 342ms]

❏ Profiles
↳ Register Celeb
POST https://api.realworld.io/api/users [200 OK, 1.18kB, 444ms]
✓  Response contains "user" property
✓  User has "email" property
✓  User has "username" property
✓  User has "bio" property
✓  User has "image" property
✓  User has "token" property

↳ Profile
GET https://api.realworld.io/api/profiles/celeb_u1661915515 [200 OK, 976B, 341ms]
✓  Response code is 200 OK
✓  Response contains "profile" property
✓  Profile has "username" property
✓  Profile has "bio" property
✓  Profile has "image" property
✓  Profile has "following" property

↳ Follow Profile
POST https://api.realworld.io/api/profiles/celeb_u1661915515/follow [200 OK, 981B, 357ms]
✓  Response code is 200 OK
✓  Response contains "profile" property
✓  Profile has "username" property
✓  Profile has "bio" property
✓  Profile has "image" property
✓  Profile has "following" property
✓  Profile's "following" property is true

↳ Unfollow Profile
DELETE https://api.realworld.io/api/profiles/celeb_u1661915515/follow [200 OK, 970B, 354ms]
✓  Response code is 200 OK
✓  Response contains "profile" property
✓  Profile has "username" property
✓  Profile has "bio" property
✓  Profile has "image" property
✓  Profile has "following" property
✓  Profile's "following" property is false

❏ Tags
↳ All Tags
GET https://api.realworld.io/api/tags [200 OK, 911B, 432ms]
✓  Response code is 200 OK
✓  Response contains "tags" property
✓  "tags" property returned as array


#### 官网demo示例地址
[https://demo.realworld.io/#/](https://demo.realworld.io/#/)
