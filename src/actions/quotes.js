// TODO: Create action creators as defined in tests
import React from 'react'

export const addQuote = (quote) => ({type: "ADD_QUOTE", quote})

export const removeQuote = (quoteId) => ({type: "REMOVE_QUOTE", quoteId})