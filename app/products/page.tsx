'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Navbar from '../_components/navbar'

const products = [
  { id: 1, name: 'Xpressbite® Peanut Snacks Variants- Milk Sweetened, Vanila & Suya spice', category: 'snacks', price: 199.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Wireless Mouse', category: 'whole food', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'LED Desk Lamp', category: 'whole food', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Noise-Cancelling Headphones', category: 'snacks', price: 149.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Standing Desk', category: 'snacks', price: 299.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Mechanical Keyboard', category: 'whole food', price: 89.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function Productpage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="">
    <Navbar isAuthenticated={false} user={undefined}/>
    <div className="container mx-auto px-4 py-24">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Our products</h1> */}
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="snacks">snacks</SelectItem>
            <SelectItem value="whole food">whole food</SelectItem>
            {/* <SelectItem value="Lighting">Lighting</SelectItem> */}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No products found matching your search.</p>
      )}
    </div></div>
  )
}