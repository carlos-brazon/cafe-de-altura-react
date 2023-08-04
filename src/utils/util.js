import React from 'react'

export const replaceDot = (number) => {
  return (number.toFixed(2)).replace('.', ',').concat('€')
}
