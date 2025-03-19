<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  
  let container;
  let sketch;
  let p5;

  class Walker {
    constructor(p, x, y) {
      this.p = p;
      this.x = x;
      this.y = y;
      this.history = [];
      
      // More variation in trail length (8-50)
      this.trailLength = p.floor(p.random(8, 51));
      
      // More variation in noise offsets for more unpredictable movement
      this.noiseOffsetX = p.random(1000);
      this.noiseOffsetY = p.random(2000);
      
      // More varied speeds (0.5-4)
      this.speed = p.random(0.5, 4);
      
      const colorSchemes = [
        { r: 50, g: 80, b: 200 },    // Medium blue
        { r: 70, g: 130, b: 230 },   // Bright blue
        { r: 30, g: 60, b: 110 },    // Dark blue
        { r: 80, g: 200, b: 200 },   // Teal
        { r: 100, g: 220, b: 255 },  // Light blue
        { r: 255, g: 150, b: 100 },  // Coral accent
        { r: 200, g: 200, b: 255 },  // Pale blue
        { r: 20, g: 30, b: 80 }      // Deep blue
      ];
      // Select a color scheme and add slight variation
      const scheme = p.random(colorSchemes);
      this.color = p.color(
        scheme.r + p.random(-20, 20),
        scheme.g + p.random(-20, 20),
        scheme.b + p.random(-20, 20),
        p.random(180, 255)  // Varied opacity
      );
      
      // Varied rectangle sizes
      this.width = p.random(3, 10);
      this.height = p.random(3, 10);
      
      // Sometimes make longer rectangles (lines)
      if (p.random() < 0.3) {
        if (p.random() < 0.5) {
          this.width = p.random(20, 80);
          this.height = p.random(1, 5);
        } else {
          this.width = p.random(1, 5);
          this.height = p.random(20, 80);
        }
      }
      
      // Direction preference - some walkers prefer horizontal/vertical movements
      this.horizontalBias = p.random(-0.2, 0.2);
      
      // Direction change frequency
      this.changeFrequency = p.random(0.005, 0.03);
      
      // Different movement patterns - sometimes move diagonally
      this.movementType = p.floor(p.random(3));
      
      // Small chance of creating a stationary "landmark" element 
      this.isStationary = p.random() < 0.05;
      if (this.isStationary) {
        this.width = p.random(5, 50);
        this.height = p.random(5, 50);
      }
    }

    update() {
      // Don't move if this is a stationary element
      if (this.isStationary) return;
      
      // Previous position for edge detection
      const prevX = this.x;
      const prevY = this.y;
      
      // Use Perlin noise to determine direction with more unpredictable movement
      const noiseValueX = this.p.noise(this.noiseOffsetX);
      const noiseValueY = this.p.noise(this.noiseOffsetY);
      
      // Apply direction bias
      let adjustedNoiseX = noiseValueX + this.horizontalBias;
      let adjustedNoiseY = noiseValueY - this.horizontalBias;
      
      // Determine movement based on pattern type
      if (this.movementType === 0) {
        // 90-degree movements (original style but with bias)
        const combined = (adjustedNoiseX + adjustedNoiseY) / 2;
        
        if (combined < 0.25) {
          this.x += this.speed; // right
        } else if (combined < 0.5) {
          this.x -= this.speed; // left
        } else if (combined < 0.75) {
          this.y += this.speed; // down
        } else {
          this.y -= this.speed; // up
        }
      } else if (this.movementType === 1) {
        // Diagonal grid movement
        const combined = (adjustedNoiseX + adjustedNoiseY) / 2;
        
        if (combined < 0.25) {
          this.x += this.speed;
          this.y += this.speed;
        } else if (combined < 0.5) {
          this.x -= this.speed;
          this.y += this.speed;
        } else if (combined < 0.75) {
          this.x -= this.speed;
          this.y -= this.speed;
        } else {
          this.x += this.speed;
          this.y -= this.speed;
        }
      } else {
        // Movement with longer straight paths
        // Only change direction occasionally
        if (this.p.random() < this.changeFrequency) {
          this.currentDirection = this.p.floor(this.p.random(4));
        }
        
        // Move based on current direction
        switch(this.currentDirection) {
          case 0: this.x += this.speed; break;
          case 1: this.x -= this.speed; break;
          case 2: this.y += this.speed; break;
          case 3: this.y -= this.speed; break;
        }
      }
      
      // Handle screen wrapping with smaller padding for more elements on screen
      const padding = 200;
      
      if (this.x < -padding) {
        this.x = this.p.width + padding;
        this.history = [];
      }
      if (this.x > this.p.width + padding) {
        this.x = -padding;
        this.history = [];
      }
      if (this.y < -padding) {
        this.y = this.p.height + padding;
        this.history = [];
      }
      if (this.y > this.p.height + padding) {
        this.y = -padding;
        this.history = [];
      }
      
      // Update noise offset for next frame (varied rates)
      this.noiseOffsetX += 0.01 + (this.p.random() * 0.01);
      this.noiseOffsetY += 0.01 + (this.p.random() * 0.01);
      
      // Store position in history
      this.history.push({ x: this.x, y: this.y });
      
      // Remove oldest positions if history is too long
      if (this.history.length > this.trailLength) {
        this.history.shift();
      }
    }
    
    display() {
      const p = this.p;
      
      // Only draw if we have enough points or we're stationary
      if (this.history.length < 2 && !this.isStationary) return;
      
      // Draw the trail or stationary element
      if (this.isStationary) {
        p.noStroke();
        p.fill(this.color);
        p.rect(this.x, this.y, this.width, this.height);
      } else {
        // Draw the head of the trail with slightly different characteristics
        if (this.history.length > 0) {
          const newest = this.history[this.history.length - 1];
          p.noStroke();
          p.fill(this.color);
          p.rect(newest.x, newest.y, this.width, this.height);
        }
        
        // Draw older parts of trail with fading effect
        for (let i = 0; i < this.history.length - 1; i++) {
          const pos = this.history[i];
          const alpha = p.map(i, 0, this.history.length, 50, 200);
          const c = p.color(p.red(this.color), p.green(this.color), p.blue(this.color));
          
          p.stroke(0);
          p.fill(c);
          
          // Slightly reduced size for trail elements
          const sizeRatio = p.map(i, 0, this.history.length, 0.7, 1);
          p.rect(pos.x, pos.y, this.width * sizeRatio, this.height * sizeRatio);
        }
      }
    }
  }

  onMount(async () => {
    // Only run in the browser
    if (!browser) return;
    
    // Dynamically import p5 only on client-side
    const p5Module = await import('p5');
    p5 = p5Module.default;
    
    if (!p5) return;
    
    sketch = new p5((p) => {
      const walkers = [];
      const numWalkers = 100; // Increased for more density
      let currentFrame = 0;

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        
        // Set styling directly on the canvas element
        const canvasEl = canvas.elt;
        if (canvasEl) {
          canvasEl.style.position = 'fixed';
          canvasEl.style.top = '0';
          canvasEl.style.left = '0';
          canvasEl.style.width = '100vw';
          canvasEl.style.height = '100vh';
          canvasEl.style.zIndex = '-9999';
          canvasEl.style.pointerEvents = 'none';
        }
        
        p.background(0); // Pure black background
        
        // Create walkers
        for (let i = 0; i < numWalkers; i++) {
          walkers.push(new Walker(
            p,
            p.random(p.width),
            p.random(p.height)
          ));
        }
        
        // Add grid lines (subtle)
        createGrid();
      };
      
      function createGrid() {
        // Add some static grid lines with varied opacity
        const gridWalkers = [];
        const gridDensity = 40; // Higher number = fewer grid lines
        
        // Vertical lines
        for (let x = 0; x < p.width; x += p.width/gridDensity) {
          if (p.random() < 0.7) { // 70% chance of creating a line
            const walker = new Walker(p, x, p.random(p.height));
            walker.width = p.random(1, 2);
            walker.height = p.random(p.height * 0.1, p.height * 0.9);
            walker.isStationary = true;
            walker.color = p.color(180, 180, 180, p.random(30, 80));
            gridWalkers.push(walker);
          }
        }
        
        // Horizontal lines
        for (let y = 0; y < p.height; y += p.height/gridDensity) {
          if (p.random() < 0.7) {
            const walker = new Walker(p, p.random(p.width), y);
            walker.width = p.random(p.width * 0.1, p.width * 0.9);
            walker.height = p.random(1, 2);
            walker.isStationary = true;
            walker.color = p.color(180, 180, 180, p.random(30, 80));
            gridWalkers.push(walker);
          }
        }
        
        // Add these to the main walkers array
        walkers.push(...gridWalkers);
        
        // Add dots at grid intersections
        for (let x = 0; x < p.width; x += p.width/gridDensity) {
          for (let y = 0; y < p.height; y += p.height/gridDensity) {
            if (p.random() < 0.2) { // 20% chance of dot at intersection
              const walker = new Walker(p, x, y);
              walker.width = walker.height = p.random(1, 3);
              walker.isStationary = true;
              walker.color = p.color(255, 255, 255, p.random(100, 200));
              walkers.push(walker);
            }
          }
        }
      }

      p.draw = () => {
        // Pure black background each frame
        p.background(0);
        
        // Update and display walkers
        for (const walker of walkers) {
          walker.update();
          walker.display();
        }
        
        // Add new walkers occasionally
        if (p.frameCount % 100 === 0 && walkers.length < 300) {
          walkers.push(new Walker(
            p,
            p.random(p.width),
            p.random(p.height)
          ));
        }
        
        // Add subtle vignette effect
        drawVignette();
        
        currentFrame++;
      };
      
      function drawVignette() {
        // Create a subtle vignette effect
        p.noFill();
        for (let i = 0; i < 50; i++) {
          const alpha = p.map(i, 0, 50, 0, 50);
          p.stroke(0, alpha);
          p.ellipse(p.width/2, p.height/2, p.width - i*10, p.height - i*10);
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        // Recreate grid on resize
        walkers.length = 0; // Clear existing walkers
        
        // Create new walkers
        for (let i = 0; i < numWalkers; i++) {
          walkers.push(new Walker(
            p,
            p.random(p.width),
            p.random(p.height)
          ));
        }
        
        // Create new grid
        createGrid();
      };
    }, container);
    
    // Force all content above p5 by applying styles to the body content container
    if (browser && typeof document !== 'undefined') {
      // Find the main SvelteKit body container and make sure it's above the canvas
      const svelteKitContainer = document.querySelector('body > div');
      if (svelteKitContainer) {
        svelteKitContainer.style.position = 'relative';
        svelteKitContainer.style.zIndex = '1';
      }
    }
  });

  onDestroy(() => {
    if (browser && sketch) {
      sketch.remove();
    }
  });
</script>

<div bind:this={container} class="fixed top-0 left-0 w-full h-full pointer-events-none" style="z-index: -9999;"></div>