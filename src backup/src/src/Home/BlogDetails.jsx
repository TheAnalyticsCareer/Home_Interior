import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";
import id1 from "./HomeImg/How-to-choose-the-perfect-flooring.webp";
import id2 from "./HomeImg/aluminium-blog.jpg";
import id3 from "./HomeImg/Flor-carpet-tiles.jpg";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Right Flooring for Every Room",
    excerpt: "A room-by-room guide to selecting flooring that matches functionality, design, and lifestyle needs.",
    content: (
      <>
        <h3>ℹ️ Info</h3>
        <p>
          Flooring plays a crucial role in defining the comfort, style, and durability of your interiors. At <strong>AIDF GROUP</strong>,
          we provide tailored flooring options to suit each room’s purpose — whether it’s warmth for bedrooms or water resistance for kitchens.
        </p>

        <h3>❓ Why Use Purpose-Based Flooring?</h3>
        <ul>
          <li>🏠 Every room has unique traffic, moisture, and comfort needs</li>
          <li>💧 Kitchens and bathrooms need water-resistant solutions</li>
          <li>🎵 Living spaces require acoustic support and visual appeal</li>
          <li>🛠️ Proper flooring increases property value and reduces repairs</li>
        </ul>

        <h3>🆕 What’s New in 2025</h3>
        <ul>
          <li>📦 <strong>Pre-attached underlayment</strong> for easier installation</li>
          <li>🌡️ <strong>Flooring compatible with radiant heating</strong></li>
          <li>🦠 <strong>Anti-microbial vinyl and laminate layers</strong></li>
          <li>🪄 <strong>Scratch-proof finishes with longer lifespan</strong></li>
        </ul>

        <h3>✅ Advantages</h3>
        <ul>
          <li>💪 Long-lasting and durable for high-footfall zones</li>
          <li>🔇 Sound absorption in carpet and wood options</li>
          <li>🌿 Eco-friendly engineered wood and vinyl options</li>
          <li>🧽 Easy to clean and maintain</li>
        </ul>

        <h3>🎯 Benefits</h3>
        <ul>
          <li>✨ Aesthetically uniform rooms</li>
          <li>📈 Enhanced resale value</li>
          <li>🏠 Greater comfort and safety</li>
          <li>🛠️ Lower renovation costs over time</li>
        </ul>

        <h3>📌 Conclusion</h3>
        <p>
          Choosing the right flooring isn't just about style — it's about functionality. <strong>AIDF GROUP</strong> offers specialized
          solutions to meet every room’s unique needs.
        </p>

        <p>
          📞 <strong>Connect with Us:</strong><br />
          ✉️ Email: <a href="mailto:contact@aidfgroup.com">contact@aidfgroup.com</a><br />
          🌐 Website: <a href="https://www.aidfgroup.com" target="_blank" rel="noreferrer">www.aidfgroup.com</a>
        </p>
      </>
    ),
    date: "May 7, 2025",
    category: "Flooring Tips",
    image: id1,
    author: "Anya Sharma",
    tags: ["flooring", "home improvement", "interior design", "renovation"],
    readingTime: "7 minutes",
    paragraphContent: "Flooring plays a crucial role in defining the comfort, style, and durability of your interiors. At AIDF GROUP, we provide tailored flooring options to suit each room’s purpose — whether it’s warmth for bedrooms or water resistance for kitchens. Every room has unique traffic, moisture, and comfort needs. Kitchens and bathrooms need water-resistant solutions. Living spaces require acoustic support and visual appeal. Proper flooring increases property value and reduces repairs. What’s new in 2025 includes pre-attached underlayment for easier installation, flooring compatible with radiant heating, anti-microbial vinyl and laminate layers, and scratch-proof finishes with longer lifespan. Advantages include being long-lasting and durable for high-footfall zones, sound absorption in carpet and wood options, eco-friendly engineered wood and vinyl options, and being easy to clean and maintain. Benefits include aesthetically uniform rooms, enhanced resale value, greater comfort and safety, and lower renovation costs over time. Choosing the right flooring isn't just about style — it's about functionality. AIDF GROUP offers specialized solutions to meet every room’s unique needs. Connect with Us: Email: contact@aidfgroup.com Website: www.aidfgroup.com",
  },
  {
    id: 2,
    title: "Sustainable Carpet Solutions: Comfort, Style, and Responsibility Underfoot",
    excerpt: "Explore how AIDF's eco-conscious carpet tiles combine luxury, performance, and environmental responsibility in modern interiors.",
    content: (
      <>
        <h3>ℹ️ Info</h3>
        <p>
          Sustainable carpet solutions blend luxury, performance, and environmental responsibility. At <strong>AIDF GROUP</strong>,
          we offer eco-conscious carpet tiles that are both stylish and reduce environmental impact, making them ideal for modern interiors.
        </p>

        <h3>❓ Why Choose Sustainable Carpet Solutions?</h3>
        <ul>
          <li>🌍 Reduces environmental impact with recyclable materials</li>
          <li>🧘‍♂️ Promotes healthier indoor environments with low-VOC options</li>
          <li>🏡 Enhances sustainability certifications for buildings</li>
          <li>💡 Reflects the growing demand for eco-conscious design choices</li>
        </ul>

        <h3>🆕 What’s New in 2025</h3>
        <ul>
          <li>♻️ <strong>100% Recycled yarn for all carpet tiles</strong></li>
          <li>🌿 <strong>Zero waste manufacturing processes</strong></li>
          <li>💧 <strong>Water-based, non-toxic adhesives</strong></li>
          <li>🔄 <strong>Take-back programs for end-of-life products</strong></li>
        </ul>

        <h3>✅ Advantages</h3>
        <ul>
          <li>🧪 Non-toxic, hypoallergenic, and safe for all spaces</li>
          <li>♻️ High durability with low environmental impact</li>
          <li>🏆 Improves building certification ratings (LEED, IGBC)</li>
          <li>🔧 Easy to install with modular, pre-cut tiles</li>
        </ul>

        <h3>🎯 Benefits</h3>
        <ul>
          <li>✨ Comfort and style with eco-friendly materials</li>
          <li>📉 Lower lifetime costs thanks to durability and ease of maintenance</li>
          <li>💚 Supports global sustainability efforts and green building standards</li>
          <li>🌍 A positive contribution to the environment and the community</li>
        </ul>

        <h3>📌 Conclusion</h3>
        <p>
          AIDF’s sustainable carpet solutions offer the perfect balance of luxury, performance, and responsibility. With our eco-conscious carpet tiles,
          you can create stylish, comfortable spaces while supporting environmental sustainability.
        </p>

        <p>
          📞 <strong>Connect with Us:</strong><br />
          ✉️ Email: <a href="mailto:contact@aidfgroup.com">contact@aidfgroup.com</a><br />
          🌐 Website: <a href="https://www.aidfgroup.com" target="_blank" rel="noreferrer">www.aidfgroup.com</a>
        </p>
      </>
    ),
    date: "May 7, 2025",
    category: "Sustainable Design",
    image: id3,
    author: "Priya Verma",
    tags: ["sustainable design", "carpets", "eco-friendly", "interior design"],
    readingTime: "6 minutes",
    paragraphContent: "Sustainable carpet solutions blend luxury, performance, and environmental responsibility. At AIDF GROUP, we offer eco-conscious carpet tiles that are both stylish and reduce environmental impact, making them ideal for modern interiors. Why choose sustainable carpet solutions? They reduce environmental impact with recyclable materials, promote healthier indoor environments with low-VOC options, enhance sustainability certifications for buildings, and reflect the growing demand for eco-conscious design choices. What’s new in 2025 includes 100% recycled yarn for all carpet tiles, zero waste manufacturing processes, water-based, non-toxic adhesives, and take-back programs for end-of-life products. Advantages include being non-toxic, hypoallergenic, and safe for all spaces, high durability with low environmental impact, improving building certification ratings (LEED, IGBC), and being easy to install with modular, pre-cut tiles. Benefits include comfort and style with eco-friendly materials, lower lifetime costs thanks to durability and ease of maintenance, supporting global sustainability efforts and green building standards, and a positive contribution to the environment and the community. AIDF’s sustainable carpet solutions offer the perfect balance of luxury, performance, and responsibility. With our eco-conscious carpet tiles, you can create stylish, comfortable spaces while supporting environmental sustainability. Connect with Us: Email: contact@aidfgroup.com Website: www.aidfgroup.com",
  },
  {
    id: 3,
    title: "Aluminum Profiles in Modern Architecture",
    excerpt: "Learn how aluminum profiles are reshaping interior and exterior design across commercial and residential spaces.",
    content: (
      <>
        <h3>ℹ️ Info</h3>
        <p>
          Aluminum profiles are the unsung heroes of modern architecture — combining strength, style, and sustainability.
          At <strong>AIDF GROUP</strong>, we manufacture precision-engineered aluminum profiles for everything from partitions to facades.
        </p>

        <h3>❓ Why Use Aluminum Profiles?</h3>
        <ul>
          <li>💪 High strength-to-weight ratio — ideal for both structure and design</li>
          <li>🧼 Easy to clean and corrosion-resistant</li>
          <li>📏 Versatile shapes for partitions, frames, and railings</li>
          <li>🔁 100% recyclable — environmentally and economically efficient</li>
        </ul>

        <h3>🆕 What's New in 2025</h3>
        <ul>
          <li>🎨 <strong>Custom Powder Coating:</strong> Sleek matte and metallic finishes</li>
          <li>📐 <strong>Ultra-slim lines:</strong> For modern, frameless glass panels</li>
          <li>🔒 <strong>Advanced locking grooves:</strong> Better insulation and safety</li>
          <li>⚙️ <strong>Modular Kits:</strong> Snap-fit systems for faster installation</li>
        </ul>

        <h3>✅ Advantages</h3>
        <ul>
          <li>📐 Precise dimensions and tolerances</li>
          <li>🌧️ Weather and termite resistant</li>
          <li>🛠️ Easy to integrate with other materials like glass or wood</li>
          <li>💼 Ideal for indoor, outdoor, and commercial use</li>
        </ul>

        <h3>🎯 Benefits</h3>
        <ul>
          <li>⚡ Quicker project completion</li>
          <li>✨ Consistent modern design language</li>
          <li>📉 Low maintenance cost</li>
          <li>🌱 Greener, smarter construction options</li>
        </ul>

        <h3>📌 Conclusion</h3>
        <p>
          From sleek partitions to robust structural elements, <strong>AIDF GROUP</strong>'s aluminum profiles are
          redefining what modern interiors and exteriors can achieve — efficiently, elegantly, and sustainably.
        </p>

        <p>
          📞 <strong>Connect with Us:</strong><br />
          ✉️ Email: <a href="mailto:contact@aidfgroup.com">contact@aidfgroup.com</a><br />
          🌐 Website: <a href="https://www.aidfgroup.com" target="_blank" rel="noreferrer">www.aidfgroup.com</a>
        </p>
      </>
    ),
    date: "May 7, 2025",
    category: "Architecture",
    image: id2,
    author: "Rahul Menon",
    tags: ["aluminum profiles", "architecture", "modern design", "construction"],
    readingTime: "8 minutes",
    paragraphContent: "Aluminum profiles are the unsung heroes of modern architecture — combining strength, style, and sustainability. At AIDF GROUP, we manufacture precision-engineered aluminum profiles for everything from partitions to facades. Why use aluminum profiles? They have a high strength-to-weight ratio — ideal for both structure and design, are easy to clean and corrosion-resistant, offer versatile shapes for partitions, frames, and railings, and are 100% recyclable — environmentally and economically efficient. What's new in 2025 includes custom powder coating with sleek matte and metallic finishes, ultra-slim lines for modern, frameless glass panels, advanced locking grooves for better insulation and safety, and modular kits with snap-fit systems for faster installation. Advantages include precise dimensions and tolerances, being weather and termite resistant, easy integration with other materials like glass or wood, and being ideal for indoor, outdoor, and commercial use. Benefits include quicker project completion, consistent modern design language, low maintenance cost, and greener, smarter construction options. From sleek partitions to robust structural elements, AIDF GROUP's aluminum profiles are redefining what modern interiors and exteriors can achieve — efficiently, elegantly, and sustainably. Connect with Us: Email: contact@aidfgroup.com Website: www.aidfgroup.com",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id, 10);

  if (isNaN(blogId)) return <div className="error">Invalid blog ID.</div>;

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) return <div className="error">Blog not found.</div>;

  return (
    <div className="blog-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Blogs
      </button>
      <h1 className="blog-title">{blog.title}</h1>
      <div className="blog-meta">{blog.date} | {blog.category}</div>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">{blog.content}</div>
    </div>
  );
};

export default BlogDetails;
