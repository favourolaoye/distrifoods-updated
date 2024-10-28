import Image from 'next/image'
import Link from 'next/link'
import { Truck, Leaf, ShoppingBag, Star } from 'lucide-react'
import bread from "../_components/bread.png";
import apple from "../_components/apple.png";
import spinach from "../_components/spinach.jpg";
import seyi from "../_components/seyi.jpg";
import foodImage from "../_components/food-image.jpg";
export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Fresh Food, <span className="text-green-300">Delivered</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-green-100 sm:text-xl md:mt-5 md:max-w-3xl">
                Distrifoods brings organic, locally-sourced produce right to your doorstep. Eat healthier, support local farmers, and enjoy convenient delivery.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8">
              <Image
                src={foodImage}
                alt="Fresh produce selection"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Promise</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to get your groceries
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Fast Delivery',
                  description: 'Get your groceries delivered on the same day in select areas.',
                  icon: Truck,
                },
                {
                  name: 'Organic Produce',
                  description: 'We offer a wide range of certified organic fruits and vegetables.',
                  icon: Leaf,
                },
                {
                  name: 'Wide Selection',
                  description: 'Choose from thousands of products, from fresh produce to pantry staples.',
                  icon: ShoppingBag,
                },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Organic Apples", price: 4.99, image: apple },
              { name: "Fresh Spinach", price: 2.49, image:spinach },
              { name: "Whole Grain Bread", price: 3.99, image: bread }
            ].map((product, index) => (
              <div key={index} className="p-3 w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-green-600 font-bold mt-1">${product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="relative bg-gray-50 rounded-xl p-8 md:p-12">
            <blockquote className="text-lg md:text-xl font-medium text-gray-900 text-center">
              <p>
                "Distrifoods has transformed how I shop for groceries. The quality of their organic produce is unmatched, and the convenience of home delivery is a game-changer. I'm a customer for life!"
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4">
              <Image
                src={seyi}
                alt="Favour O."
                width={60}
                height={60}
                className="w-14 h-14 rounded-full"
              />
              <div className="text-base">
                <div className="font-semibold text-gray-900">Favour O.</div>
                <div className="text-gray-500">Loyal Customer</div>
              </div>
            </figcaption>
            <div className="absolute top-4 right-4 text-green-500 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
          </figure>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to try Distrifoods?</span>
            <span className="block text-green-300">Start your healthy journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}