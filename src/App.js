import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'

export const App = () => (
  <div>
    <ListOfCategories />
    <PhotoCard />
    <GlobalStyle />
  </div>
)