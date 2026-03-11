"use client"

import React, { useEffect, useRef } from "react"

import { Gradient } from "./stripe-shader"
import vertexShader from './shaders/vertex.js'
import noiseShader from './shaders/noise.js'
import blendShader from './shaders/blend.js'
import fragmentShader from './shaders/fragment.js'

interface GradientType {
  initGradient: (canvas: HTMLCanvasElement | string) => void
}

interface AnimatedGradientProps {
  color1?: string
  color2?: string
  color3?: string
  color4?: string
  className?: string
}

export function AnimatedGradient({
  color1 = "#a960ee",
  color2 = "#ff333d",
  color3 = "#90e0ff",
  color4 = "#ffcb57",
  className = "absolute inset-0 z-0 h-full w-full rounded-[inherit]",
}: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const gradient = new (Gradient as unknown as { new (options: { shaderFiles: { vertex: string; noise: string; blend: string; fragment: string } }): GradientType }) ({ shaderFiles: { vertex: vertexShader, noise: noiseShader, blend: blendShader, fragment: fragmentShader } })
    if (canvasRef.current) {
      gradient.initGradient(canvasRef.current)
    }
  }, [color1, color2, color3, color4])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={
        {
          "--gradient-color-1": color1,
          "--gradient-color-2": color2,
          "--gradient-color-3": color3,
          "--gradient-color-4": color4,
        } as React.CSSProperties
      }
    />
  )
}
