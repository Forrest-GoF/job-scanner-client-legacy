import React from 'react'

export type ButtonStyledProps = {
  color?: 'success' | 'info' | 'danger' | 'normal'
}

export type Props = {
  borderRadius: string
  color: string
  bgColor: string
  type: 'button' | 'submit' | 'reset'
  onClick: () => void
  children: React.ReactNode
} & ButtonStyledProps
