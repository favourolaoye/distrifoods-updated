import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react'
import foodImage from "../_components/food-image.jpg";
import Navbar from '../_components/navbar';
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Organic Produce",
    excerpt: "Discover why organic produce is not just a trend, but a healthier choice for you and the environment.",
    author: "Jane Doe",
    date: "May 15, 2023",
    slug: "benefits-of-organic-produce",
    category: "Health"
  },
  {
    id: 2,
    title: "5 Easy Recipes Using Distrifoods Products",
    excerpt: "Learn how to create delicious meals using our high-quality ingredients with these simple recipes.",
    author: "John Smith",
    date: "May 10, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "easy-recipes-distrifoods-products",
    category: "Recipes"
  },
  {
    id: 3,
    title: "Understanding Food Labels: A Comprehensive Guide",
    excerpt: "Navigate the complex world of food labels with our easy-to-understand guide.",
    author: "Emily Johnson",
    date: "May 5, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "understanding-food-labels",
    category: "Education"
  },
  {
    id: 4,
    title: "Sustainable Farming Practices: From Farm to Table",
    excerpt: "Explore how sustainable farming practices are shaping the future of food production and consumption.",
    author: "Michael Brown",
    date: "April 30, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "sustainable-farming-practices",
    category: "Sustainability"
  }
]

export default function Blog() {
  return (
    <div className="">
      <Navbar isAuthenticated={false} user={undefined}/>
    <div className="bg-gray-50 min-h-screen py-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
             Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover the latest insights, recipes, and news from the world of fresh, organic food.
          </p>
        </section>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${
                index === 0 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-64 w-full">
                  <Image
                    src={foodImage}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-4 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center text-green-600 font-semibold">
                    Read More
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>   
    </div>
  )
}