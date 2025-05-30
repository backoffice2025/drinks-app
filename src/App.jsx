import React, { useState, useEffect } from 'react'
import drinksData from './drinksData'
import './App.css'; 

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % drinksData.length)
        setFade(true) // fade in new slide
      }, 500)
    }, 5000) // 5 seconds per slide

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + drinksData.length) % drinksData.length)
      setFade(true)
    }, 300)
  }

  const nextSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % drinksData.length)
      setFade(true)
    }, 300)
  }

  const goToSlide = (index) => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex(index)
      setFade(true)
    }, 300)
  }

  const { name, price, image } = drinksData[currentIndex]

  return (
    <div
      style={{
        maxWidth: 600,
        margin: '50px auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <h1 style={{ marginBottom: 30, fontWeight: '700' }}>🍹 Drink Menu</h1>

      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 16,
          boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
          border: '1px solid #eee',
        }}
      >
        <img
  src={image}
  alt={name}
  style={{
    width: '100%',
    height: 'auto', // ← allows image to adjust height naturally
    maxHeight: '500px', // ← optional: restricts overly tall images
    objectFit: 'contain', // ← ensures full image is visible
    borderRadius: 16,
    opacity: fade ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  }}
/>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '20px 30px',
            background: 'rgba(0, 0, 0, 0.5)',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            color: 'white',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: '700' }}>{name}</h2>
          <p style={{ margin: '8px 0 0', fontSize: 22, fontWeight: '600' }}>
            ₹{price.toFixed(2)}
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Drink"
          style={{
            position: 'absolute',
            top: '50%',
            left: 15,
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: 50,
            height: 50,
            cursor: 'pointer',
            fontSize: 28,
            fontWeight: '700',
            color: '#333',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#ddd')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.8)')}
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Drink"
          style={{
            position: 'absolute',
            top: '50%',
            right: 15,
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: 50,
            height: 50,
            cursor: 'pointer',
            fontSize: 28,
            fontWeight: '700',
            color: '#333',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#ddd')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.8)')}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 12 }}>
        {drinksData.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            style={{
              cursor: 'pointer',
              width: currentIndex === idx ? 16 : 12,
              height: currentIndex === idx ? 16 : 12,
              borderRadius: '50%',
              backgroundColor: currentIndex === idx ? '#007BFF' : '#bbb',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </div>
  )
}
