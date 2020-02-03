import React from "react"
  // Need add check for undefiened fields.
const Article = ({
  content: {
    title,
    publishedAt,
    text: {
      text
    },
    banner: {
      file: {
        url
      }
    },
    author: {
      fullName,
      avatar: {
        file: {
          avatarUrl
        }
      },
    },
  }
}) => (
  <div>
    <h2>{fullName}</h2>
    <img src={avatarUrl} alt={fullName}/>
    {console.log("Avatar URL:")}
    {console.log(avatarUrl)}
    <h2>{title}</h2>
    <img src={url} alt={title}/>
    <p>
      {text}
    </p>
    <h5>{publishedAt}</h5>
  </div>
)

export default Article
