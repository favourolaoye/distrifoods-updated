import React from 'react'
interface ptype{
params: any;
}
export default function ProductDetails({params}: ptype) {
  return (
    <div>ProductDetails for {params.slug}</div>
  )
}
