"use client";

import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Card } from "../../../components/ui/Card";
import Modal from "../../../components/ui/Modal";
import { useState } from "react";
import type { Post } from "@/lib/types";

export default function Page() {
  const posts = useQuery(api.blog.getPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const textLimit = 100;

  if (!posts) {
    return <div>Loading...</div>;
  }

  const truncateText = (text: string) => {
    if (text.length > textLimit) {
      return text.slice(0, textLimit) + "...";
    }
    return text;
  };

  return (
    <>
      <div className="mb-10 text-center ">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p>
          Here you can find the latest posts, relevant about me and my career.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <li key={post?._id} className="mb-8">
            <Card
              className="mb-0 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto transform transition-transform hover:scale-103"
              onClick={() => setSelectedPost(post)}
            >
              <Image
                src={post.image}
                alt={post.header}
                width={0}
                height={0}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{post.header}</h2>
                <p className="mb-2">{truncateText(post.text)}</p>
                <small>
                  {new Date(post.createdAt).toLocaleDateString("da-DK")}
                </small>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      >
        {selectedPost && (
          <div className="text-gray-900">
            <Image
              src={selectedPost?.image}
              alt={selectedPost?.header}
              width={0}
              height={0}
              className="w-full h-auto object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {selectedPost.header}
            </h2>
            <p className="mb-4">{selectedPost?.text}</p>
            <small>
              {new Date(selectedPost?.createdAt).toLocaleDateString("da-DK")}
            </small>
          </div>
        )}
      </Modal>
    </>
  );
}
