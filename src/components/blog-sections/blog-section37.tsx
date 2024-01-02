import React from "react";

function BlogSection37() {
  const blogData = {
    category: "Category",
    title: "Blog title heading will go here",
    dec: "A portfolio section on a website serves as a showcase for a person or business's work, accomplishments, and skills. Its purpose is to provide visitors with an idea of what they can expect from the individual or company",
    avatar: "../images/header_image_1.svg",
    name: "Full Name",
    date: "11 jan 2022",
    time: "5 min read",
  };
  return (
    <div className="p-6 md:p-20">
      <div className="flex flex-col gap-5">
        <p>Blog</p>
        <h1 className="text-4xl font-extrabold">Short heading goes here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 md:pt-20 pb-4 md:pb-10">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="card">
            <figure>
              <img
                className="rounded-2xl"
                src="../images/header_image_1.svg"
                alt="Movie"
              />
            </figure>
            <div className="card-body text-left flex flex-col gap-5">
              <p>{blogData.category}</p>
              <h2 className="card-title">{blogData.title}</h2>
              <p className="line-clamp-2">{blogData.dec}</p>
              <div className="flex gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={blogData.avatar} alt="avatar" />
                  </div>
                </div>
                <div>
                  <p>{blogData.name}</p>
                  <p>
                    {blogData.date}{" "}
                    <span className="font-bold text-xl ">.</span>{" "}
                    <span>{blogData.time}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="btn btn-md md:btn-lg btn-outline w-28 md:w-32">
          view all
        </button>
      </div>
    </div>
  );
}

export default BlogSection37;
