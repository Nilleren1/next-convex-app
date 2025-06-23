"use client"

import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

export default function Page() {
  const posts = useQuery(api.blog.getPosts)

  return (
    <>
      <h1>Blog</h1>
      <p>Here you can find the latest posts, relevant about me and my career.</p>
      <ul>
        {posts?.map((post) => (
          <li key={post._id}>
            <h2>{post.header}</h2>
            <img src={post.image} alt={post.header} style={{ maxWidth: 200 }} />
            <p>{post.text}</p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </>
  )
}