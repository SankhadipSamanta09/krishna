import CategoryFilter from '@/app/Components/CategoryFilter'
import CollectionHero from '@/app/Components/CollectionHero'
import ProductGrid from '@/app/Components/ProductGrid'
import React from 'react'

const page = () => {
  return (
    <div>
        <CollectionHero />
        <ProductGrid />
      <CategoryFilter />
    </div>
  )
}

export default page
