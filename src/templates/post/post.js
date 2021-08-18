import React from "react"
import BlogLayout from "../../layouts/BlogLayout"
import Seo from "../../components/seo"
import "./post.scss"
import ReactMarkdown from "react-markdown";
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import MDReactComponent from 'markdown-react-js';
import MarkdownIt from "markdown-it";
//import Img from "gatsby-image"



export default function Post(props) {
  const { pageContext } = props
  const { data: post } = pageContext
///
const parser = new MarkdownIt({
  html: false, // desactivamos el uso de HTML dentro del markdown
  breaks: true, // transforma los saltos de línea a un <br />
  linkify: true, // detecta enlaces y los vuelve enlaces
  xhtmlOut: true, // devuelve XHTML válido (por ejemplo <br /> en vez de <br>)
  typographer: true, // reemplaza ciertas palabras para mejorar el texto
  langPrefix: "language-" // agrega una clase `language-[lang]` a los bloques de código
});



  return (
    <BlogLayout className="post">
      <Seo
        title={post.seo_title}
        description={post.seo_description}
        // image={post.miniature.publicURL}
      />
      <h1>{post.title}</h1>
      <div className="markdown-body">
      <MDReactComponent 
      text = {post.content} 
      />
      
      {/*
       <Img fixed={data.file.childImageSharp.fixed} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <div
          dangerouslySetInnerHTML={{
            __html: parser.render(post.content),
          }}
        />
        */}
      </div>
    </BlogLayout>
  )
}