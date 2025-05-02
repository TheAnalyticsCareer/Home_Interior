"use client"

import { useState } from "react"
import { Link } from 'react-router-dom';
import "./StaticBlogCard.css"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Modern Interior Design Trends for 2023",
    excerpt: "Discover the latest interior design trends that are transforming homes this year.",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Interior Design",
    image: "/placeholder.svg?height=400&width=600",
    slug: "modern-interior-design-trends",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Flooring for Your Home",
    excerpt: "A comprehensive guide to selecting the right flooring material for different rooms.",
    date: "May 28, 2023",
    author: "Michael Chen",
    readTime: "7 min read",
    category: "Flooring",
    image: "/placeholder.svg?height=400&width=600",
    slug: "choose-perfect-flooring",
  },
  {
    id: 3,
    title: "The Art of Minimalism in Home Decor",
    excerpt: "Learn how to embrace minimalist principles for a cleaner, more peaceful living space.",
    date: "April 12, 2023",
    author: "Emma Wilson",
    readTime: "4 min read",
    category: "Decor",
    image: "/placeholder.svg?height=400&width=600",
    slug: "minimalism-home-decor",
  },
  {
    id: 4,
    title: "Sustainable Materials for Eco-Friendly Homes",
    excerpt: "Explore environmentally conscious materials that don't compromise on style or quality.",
    date: "March 5, 2023",
    author: "David Rodriguez",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sustainable-materials-eco-friendly",
  },
  {
    id: 5,
    title: "Color Psychology: How to Set the Right Mood in Each Room",
    excerpt: "Understanding how different colors affect mood and how to use them effectively in your home.",
    date: "February 19, 2023",
    author: "Lisa Thompson",
    readTime: "8 min read",
    category: "Color Theory",
    image: "/placeholder.svg?height=400&width=600",
    slug: "color-psychology-room-mood",
  },
  {
    id: 6,
    title: "Small Space Solutions: Making the Most of Limited Square Footage",
    excerpt: "Creative ideas and smart designs for maximizing functionality in compact living areas.",
    date: "January 30, 2023",
    author: "James Wilson",
    readTime: "5 min read",
    category: "Space Planning",
    image: "/placeholder.svg?height=400&width=600",
    slug: "small-space-solutions",
  },
]

export default function StaticBlogCard() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">Insights, guides, and inspiration for your interior design journey</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card-link">
              <article
                className={`blog-card ${hoveredCard === post.id ? "blog-card-hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="blog-card-image-container">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="blog-card-image" />
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.date}</span>
                    <span className="blog-card-dot">•</span>
                    <span className="blog-card-read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-author">
                    <span className="blog-card-author-by">By</span> {post.author}
                  </div>
                  <div className="blog-card-read-more">
                    Read More <span className="blog-card-arrow">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
