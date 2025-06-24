"use client";

import Image from "next/image";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import { Card } from "../../../components/ui/Card";

export default function Page() {
  const posts = useQuery(api.blog.getPosts);
  const createPost = useMutation(api.blog.createPost);

  const textLimit = 100;
  const truncateText = (text) => {
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
      {/* <button onClick={addDummyPost}>Add Dummy Post</button> */}
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <li key={post._id} className="mb-8">
            <Card className="mb-0 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
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
    </>
  );
}
