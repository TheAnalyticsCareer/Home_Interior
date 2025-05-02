"use client"

import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import "./StaticBlogPage.css"

export default function StaticBlogPage() {
  const params = useParams()
  const slug = params.slug

 
  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <Link href="/blog" className="blog-post-back-link">
          ← Back to Blog
        </Link>
        <h1 className="blog-post-title">Blog Post: {slug}</h1>
        <p className="blog-post-description">
          This is a placeholder for the full blog post content. In a real application, you would fetch the content based
          on the slug:
        </p>
      </div>
    </div>
  )
}
