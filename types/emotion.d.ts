import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      grey: {
        50: string
        150: string
        250: string
        350: string
        450: string
        550: string
        650: string
        750: string
        850: string
      }
      success: {
        50: string
        150: string
        250: string
        350: string
        450: string
        550: string
        650: string
        750: string
        850: string
      }
      danger: {
        50: string
        150: string
        250: string
        350: string
        450: string
        550: string
        650: string
        750: string
        850: string
      }
      info: {
        50: string
        150: string
        250: string
        350: string
        450: string
        550: string
        650: string
        750: string
        850: string
      }
      white: string
      black: string
    }
    fontSize: {
      10: string
      11: string
      12: string
      13: string
      14: string
      15: string
      16: string
      17: string
      18: string
      19: string
      20: string
    }
    lineHeight: {
      10: string
      11: string
      12: string
      13: string
      14: string
      15: string
      16: string
      17: string
      18: string
      19: string
      20: string
    }
    fontWeight: {
      light: number
      normal: number
      middle: number
      semiBold: number
      bold: number
    }
  }
}
