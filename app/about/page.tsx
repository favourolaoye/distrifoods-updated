import Image from 'next/image';
import { Truck, Leaf, Users, Heart } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../_components/navbar';
import foodimage from "../_components/food-image.jpg";

export default function AboutPage() {
  return (
    <div className="">
      <Navbar isAuthenticated={false} user={undefined}/>
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-400">
        <Image
          src={foodimage}
          alt="Fresh produce background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About Distrifoods
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-xl text-gray-600">
          At Distrifood, we're committed to bringing fresh, high-quality produce to your table. 
          We believe in supporting local farmers, promoting sustainable practices, and making 
          healthy food accessible to all.
        </p>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Reliable Delivery", description: "We ensure timely and efficient delivery of fresh produce." },
              { icon: Leaf, title: "Sustainability", description: "We're committed to eco-friendly practices and packaging." },
              { icon: Users, title: "Community Focus", description: "We support local farmers and strengthen communities." },
              { icon: Heart, title: "Quality First", description: "We prioritize the freshness and quality of our products." },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <value.icon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
            Distrifoods Nigeria PL14374 began as a Market Development Firm, in the FMCGs Sector, in Abuja 2004 and later Jos 2006 as a licensee to Wilson Foods, and Rite Foods. We became a legal entity on the 23rd of March 2009 and subsequently acquired additional franchises - Uacfoods, Leventis Foods, Queens Confectioneries, Nourish Loaf, Butterfield Bakery, and Mamacass Bakery. Over the years, we have honed expertise in the Marketing of Processed shelf stable foods, Flour based Products, Snacks and Drinks, developed a market for, and ensuring the stability of these above mentioned Brands in Plateau & Bauchi States. We have been able to maintain a retail supply chain that have consistently provided daily need/staple foods to Nigerians Plateau , Bauchi, Kaduna, Delta, Oyo, Lagos States & Abuja FCT. through Supermarkets, Shops, & Neighborhood marts scattered in these States.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We&apos;ve faced challenges along the way, from logistics hurdles to changing market 
              demands. But with each obstacle, we&apos;ve grown stronger and more committed to our mission.
            </p>
            <p className="text-lg text-gray-600">
              Today, we&apos;re proud to be a leader in sustainable food distribution, constantly 
              innovating to improve our services and reduce our environmental impact.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Distrifood team"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Us in Our Mission</h2>
          <p className="text-xl text-white mb-8">
            Experience the Distrifood difference. Fresh, sustainable, and delivered to your doorstep.
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
           <Link href="/products"> Shop Now</Link>
          </button>
        </div>
      </section>
    </div>
   </div>
  )
}