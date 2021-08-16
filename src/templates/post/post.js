import React from "react"
import BlogLayout from "../../layouts/BlogLayout"
import Seo from "../../components/seo"
import "./post.scss"
import ReactMarkdown from "react-markdown";
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"


export default function Post(props) {
  const { pageContext } = props
  const { data: post } = pageContext



  return (
    <BlogLayout className="post" >
      <Seo
        title={post.seo_title}
        description={post.seo_description}
        // image={post.miniature.publicURL}
      />
      <h1>{post.title}</h1>
      <div className="markdown-body" >
      <ReactMarkdown 
      source = {post.content} 
      />
      
      <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(post.content),
          }}
        />
      </div>
    </BlogLayout>
  )
}