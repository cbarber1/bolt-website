<main class="relative min-h-screen text-white">
  <!-- Hero Section -->
  <!-- Hero Section -->
<!-- Hero Section -->
<section class="relative z-10 min-h-screen flex items-center text-left py-20">
  <!-- Removed dark gradient overlay to let p5.js background show through -->
  <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
  <div class="container mx-auto px-4 relative">
    <div class="flex flex-col lg:flex-row gap-12 items-center">
      <!-- Left side - Text content -->
      <div class="lg:w-3/5 space-y-6 transform translate-y-0 opacity-100 glass-text">
        <!-- <div class="inline-block px-4 py-1 rounded-full glass-pill mb-4">
          <span class="text-lg font-medium text-green-400">Limited Registration Open</span>
        </div> -->
        <h1 class="text-7xl font-extrabold leading-none md:text-8xl hero-text">
          <span class="stagger-text-1">World's Largest</span>
          <span class="stagger-text-2">Hackathon</span>
          <!-- <span class="stagger-text-3 font-green-400 bg-clip-text font-green-400">2024</span> -->
        </h1>
        <p class="text-xl md:text-2xl text-white max-w-xl stagger-text-4">
          Join the world's largest virtual hackathon with incredible prizes and opportunities.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 stagger-text-5">
          <button class="animated-btn relative overflow-hidden rounded-full glass-button px-8 py-4 text-lg font-bold text-white transition duration-300">
            <span class="relative z-10 flex items-center justify-center">
              Register Now
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
          <button class="relative rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white transition duration-300 hover:bg-white/10">
            <span class="flex items-center justify-center">
              Learn More
            </span>
          </button>
        </div>
        <div class="text-white text-lg mt-8 stagger-text-6 glass-text">
          Virtual Event • Date TBD
        </div>
      </div>
      
      <!-- Right side - Prize showcase with rotating elements -->
      <div class="lg:w-2/5 flex justify-center items-center">
        <div class="prize-showcase relative">
          <!-- Rotating elements -->
          <div class="absolute inset-0 prize-orbit">
            <div class="orbit-ring"></div>
            <div class="orbit-ring" style="animation-delay: -5s;"></div>
            <div class="orbit-ring" style="animation-delay: -10s;"></div>
            
            <!-- Add orbiting dots -->
            <div class="orbit-dot" style="--angle: 0deg; --distance: 170px; --delay: 0s;"></div>
            <div class="orbit-dot" style="--angle: 90deg; --distance: 170px; --delay: -10s;"></div>
            <div class="orbit-dot" style="--angle: 180deg; --distance: 170px; --delay: -20s;"></div>
            <div class="orbit-dot" style="--angle: 270deg; --distance: 170px; --delay: -30s;"></div>
            
            <!-- Add rotating arcs -->
            <div class="orbit-arc" style="--angle: 45deg;"></div>
            <div class="orbit-arc" style="--angle: 135deg;"></div>
            <div class="orbit-arc" style="--angle: 225deg;"></div>
            <div class="orbit-arc" style="--angle: 315deg;"></div>
          </div>
          
          <!-- Central prize display -->
          <div class="glass-prize-container relative flex items-center justify-center p-8">
            <div class="text-center">
              <div class="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">$1M+</div>
              <div class="text-2xl text-white font-medium">in Total Prizes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <!-- Prizes Section -->
  <section class="relative z-10 py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 backdrop-blur-md"></div>
    <div class="container relative mx-auto px-4">
      <div class="mb-16 text-center">
        <span class="inline-block px-4 py-1 rounded-full glass-pill mb-4">
          <span class="text-lg font-medium text-green-400">Incredible Rewards</span>
        </span>
        <h2 class="text-5xl font-bold text-white pb-2">Prize Categories</h2>
        <div class="mx-auto mt-2 h-1 w-24 rounded bg-gradient-to-r from-green-400 to-cyan-400"></div>
        <p class="mx-auto mt-6 max-w-2xl text-xl text-gray-300">Compete for life-changing prizes across multiple categories</p>
      </div>
      
      <!-- 3D prize cards with consistent styling -->
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Grand Prize -->
        <div class="group prize-card rounded-2xl bg-black/40 p-8 backdrop-blur-lg border border-white/5 transition-all duration-500 hover:transform hover:-translate-y-2 relative overflow-hidden">
          <!-- Background glow -->
          <div class="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="relative">
            <!-- Prize icon with animated rings -->
            <div class="mb-8 relative flex justify-center">
              <div class="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-cyan-600 text-3xl font-bold text-white relative">
                <div class="absolute inset-1 rounded-full border-2 border-white/20 animate-spin-very-slow"></div>
                1st
              </div>
            </div>
            
            <h3 class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">Grand Prize</h3>
            <p class="mb-3 text-5xl font-bold text-center text-white">$500,000</p>
            <p class="text-center text-gray-300">For the most innovative solution that demonstrates exceptional technical execution and real-world impact.</p>
          </div>
        </div>
        
        <!-- Runner Up -->
        <div class="group prize-card rounded-2xl bg-black/40 p-8 backdrop-blur-lg border border-white/5 transition-all duration-500 hover:transform hover:-translate-y-2 relative overflow-hidden">
          <!-- Background glow -->
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="relative">
            <!-- Prize icon with animated rings -->
            <div class="mb-8 relative flex justify-center">
              <div class="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 text-3xl font-bold text-white relative">
                <div class="absolute inset-1 rounded-full border-2 border-white/20 animate-spin-very-slow" style="animation-direction: reverse;"></div>
                2nd
              </div>
            </div>
            
            <h3 class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">Runner Up</h3>
            <p class="mb-3 text-5xl font-bold text-center text-white">$300,000</p>
            <p class="text-center text-gray-300">For exceptional execution, creativity, and a solution that pushes technological boundaries.</p>
          </div>
        </div>
        
        <!-- Categories -->
        <div class="group prize-card rounded-2xl bg-black/40 p-8 backdrop-blur-lg border border-white/5 transition-all duration-500 hover:transform hover:-translate-y-2 relative overflow-hidden">
          <!-- Background glow -->
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-green-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="relative">
            <!-- Prize icon with animated rings -->
            <div class="mb-8 relative flex justify-center">
              <div class="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-green-600 text-3xl font-bold text-white relative">
                <div class="absolute inset-1 rounded-full border-2 border-white/20 animate-spin-very-slow" style="animation-delay: -15s;"></div>
                🏆
              </div>
            </div>
            
            <h3 class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">Categories</h3>
            <p class="mb-3 text-5xl font-bold text-center text-white">$200,000</p>
            <p class="text-center text-gray-300">Split across special categories including Best UI/UX, AI Innovation, and Sustainability.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sponsors Section -->
  <section class="relative z-10 py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-sm"></div>
    <div class="container relative mx-auto px-4">
      <div class="mb-12 text-center">
        <span class="inline-block px-4 py-1 rounded-full glass-pill mb-4">
          <span class="text-lg font-medium text-green-400">Our Partners</span>
        </span>
        <h2 class="text-5xl font-bold text-white pb-2">Our Sponsors</h2>
        <div class="mx-auto mt-2 h-1 w-24 rounded bg-gradient-to-r from-green-400 to-cyan-400"></div>
        <p class="mx-auto mt-6 max-w-2xl text-xl text-gray-300">Backed by leading technology companies and innovation partners</p>
      </div>
      
      <!-- Infinite Scrolling Sponsors Carousel -->
      <div class="sponsors-carousel-container relative max-w-[90vw] mx-auto">
        <!-- Fade edge masks -->
        <div class="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/70 to-transparent z-10"></div>
        
        <!-- Continuous Carousel Track -->
        <div class="sponsors-carousel-wrapper overflow-hidden">
          <div class="sponsors-track flex animate-marquee">
            {#each [...Array(20)] as _, i}
              <div class="sponsor-item flex-shrink-0 w-48 md:w-56 lg:w-64 px-4 mx-3">
                <div class="group h-48 relative rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-green-400/30 overflow-hidden flex items-center justify-center">
                  <!-- Animated background effect -->
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div class="relative w-full h-full rounded-xl flex items-center justify-center">
                    <!-- Sponsor logo placeholder - all using the same size now -->
                    <div class="w-4/5 aspect-square max-w-[140px] rounded-lg bg-white/10 flex items-center justify-center p-4">
                      {#if i % 4 === 0}
                        <svg class="w-full h-full text-white/40" viewBox="0 0 100 100" fill="currentColor">
                          <circle cx="50" cy="50" r="40" />
                        </svg>
                      {:else if i % 4 === 1}
                        <svg class="w-full h-full text-white/40" viewBox="0 0 100 100" fill="currentColor">
                          <rect x="10" y="10" width="80" height="80" rx="5" />
                        </svg>
                      {:else if i % 4 === 2}
                        <svg class="w-full h-full text-white/40" viewBox="0 0 100 100" fill="currentColor">
                          <polygon points="50,10 90,90 10,90" />
                        </svg>
                      {:else}
                        <svg class="w-full h-full text-white/40" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M30,10 L70,10 L90,50 L70,90 L30,90 L10,50 Z" />
                        </svg>
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Sponsor CTA -->
      <div class="mt-16 text-center">
        <a href="#" class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/30 text-white font-medium hover:bg-gradient-to-r hover:from-green-400/30 hover:to-cyan-400/30 transition-all duration-300">
          Become a Sponsor
        </a>
      </div>
    </div>
  </section>

  <!-- Judges Section -->
  <section class="relative z-10 py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 backdrop-blur-md"></div>
    <div class="container relative mx-auto px-4">
      <div class="mb-16 text-center">
        <span class="inline-block px-4 py-1 rounded-full glass-pill mb-4">
          <span class="text-lg font-medium text-green-400">Expert Panel</span>
        </span>
        <h2 class="text-5xl font-bold text-white pb-2">Meet the Judges</h2>
        <div class="mx-auto mt-2 h-1 w-24 rounded bg-gradient-to-r from-green-400 to-cyan-400"></div>
        <p class="mx-auto mt-6 max-w-2xl text-xl text-gray-300">Industry leaders and experts evaluating your innovations</p>
      </div>
      <div class="grid gap-10 md:grid-cols-3">
        {#each [
          { name: "Levelsio ", position: "Vibe Coder", img: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg" },
          { name: "Logan Kilpatrick", position: "Lead Product of Google AI Studio", img: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg" },
          { name: "Placeholder name", position: "Placeholder", img: "https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg" }
        ] as judge, i}
          <div class="group rounded-2xl bg-black/40 p-8 backdrop-blur-md border border-white/5 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-400/10 relative overflow-hidden">
            <!-- Background glow effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="relative">
              <div class="relative mx-auto mb-6">
                <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400/40 to-cyan-400/40 opacity-50 blur-lg group-hover:opacity-75"></div>
                <div class="relative mx-auto h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-green-400 to-cyan-600 p-1">
                  <!-- Judge image with fallback -->
                  <img 
                    src={judge.img} 
                    alt={judge.name}
                    class="h-full w-full rounded-full object-cover"
                    onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%%22 height=%22100%%22 viewBox=%220 0 100 100%22><rect width=%22100%%22 height=%22100%%22 fill=%22%23333%22/><text x=%2250%%22 y=%2250%%22 font-family=%22Arial%22 font-size=%2220%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23666%22>${judge.name.charAt(0)}${judge.name.split(' ')[1].charAt(0)}</text></svg>';"
                  />
                </div>
              </div>
              <h3 class="mb-2 text-2xl font-bold text-center text-white">{judge.name}</h3>
              <p class="mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-medium">{judge.position}</p>
              <p class="text-sm text-center text-gray-400">
                Leading figure in the AI and tech industry.
              </p>
              
              <!-- Social media links -->
              <div class="flex justify-center space-x-4 mt-6">
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-400/20 transition-colors cursor-pointer">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </div>
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-400/20 transition-colors cursor-pointer">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-400/20 transition-colors cursor-pointer">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>
<style>
  /* Keep the body transparent so the p5 background can show through */
  :global(body) {
    background: transparent !important;
    font-family: 'Inter', sans-serif;
  }
  
  /* Enhance scrolling experience */
  main {
    scroll-behavior: smooth;
  }
  
  /* Glass elements that let background show through */
  .glass-text {
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: inline-block;
  }
  
  .glass-pill {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .glass-button {
    background: rgba(52, 211, 153, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(52, 211, 153, 0.3);
  }
  
  /* Prize showcase styles */
  .prize-showcase {
    width: 360px;
    height: 360px;
    position: relative;
  }
  
  .glass-prize-container {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    overflow: hidden;
  }
  
  .glass-prize-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 70%);
    z-index: -1;
  }
  
  .prize-orbit {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
  
  .orbit-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    animation: rotate 40s linear infinite;
  }
  
  .orbit-dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(52, 211, 153, 0.7);
    top: 50%;
    left: 50%;
    transform: rotate(var(--angle)) translateX(var(--distance)) rotate(calc(var(--angle) * -1));
    animation: orbit 40s linear infinite;
    animation-delay: var(--delay);
    box-shadow: 0 0 10px rgba(52, 211, 153, 0.5);
  }
  
  .orbit-arc {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 340px;
    height: 340px;
    transform: translate(-50%, -50%) rotate(var(--angle));
    animation: rotateReverse 30s linear infinite;
  }
  
  .orbit-arc::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 40px;
    height: 40px;
    background: rgba(52, 211, 153, 0.1);
    border: 1px solid rgba(52, 211, 153, 0.3);
    border-radius: 50%;
    transform: translateX(-50%);
  }
  
  /* Prize cards animations */
  .prize-card {
    transition: transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .prize-card:hover {
    transform: translateY(-8px);
  }
  
  .animate-pulse-slow {
    animation: pulse 6s infinite;
  }
  
  .animate-spin-very-slow {
    animation: spin-slow 60s linear infinite;
  }
  
  @keyframes orbit {
    from {
      transform: rotate(var(--angle)) translateX(var(--distance)) rotate(calc(var(--angle) * -1));
    }
    to {
      transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--distance)) rotate(calc((var(--angle) + 360deg) * -1));
    }
  }
  
  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  
  @keyframes rotateReverse {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
  
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  /* Hero section animations */
  .hero-text {
    line-height: 1;
    letter-spacing: -0.03em;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }
  
  .stagger-text-1 {
    display: block;
    animation: fadeInUp 0.8s 0.1s both;
  }
  
  .stagger-text-2 {
    display: block;
    animation: fadeInUp 0.8s 0.3s both;
  }
  
  .stagger-text-3 {
    display: inline-block;
    animation: fadeInUp 0.8s 0.5s both;
  }
  
  .stagger-text-4 {
    animation: fadeInUp 0.8s 0.7s both;
  }
  
  .stagger-text-5 {
    animation: fadeInUp 0.8s 0.9s both;
  }
  
  .stagger-text-6 {
    animation: fadeInUp 0.8s 1.1s both;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  /* Animated button */
  .animated-btn {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
  .animated-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  .animated-btn:hover::after {
    left: 100%;
  }
  
  /* Ensure text is legible while letting background show */
  h1, h2, h3 {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  }
  
  /* Infinite carousel animation */
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .sponsors-carousel-container {
    position: relative;
    overflow: hidden;
  }
  
  .sponsors-carousel-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .sponsors-track {
    display: flex;
    animation: marquee 60s linear infinite;
  }
  
  .sponsors-track:hover {
    animation-play-state: paused;
  }
  
  .sponsor-item {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .sponsor-item:hover {
    transform: scale(1.05);
    z-index: 20;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<script>
  // Add this to your existing script or to a new script tag at the end of the file
  import { onMount } from 'svelte';
  
  onMount(() => {
    const track = document.querySelector('.sponsors-track');
    
    if (!track) return;
    
    // Clone the track items to create a seamless loop
    const items = document.querySelectorAll('.sponsor-item');
    const clonedItems = Array.from(items).map(item => item.cloneNode(true));
    clonedItems.forEach(item => track.appendChild(item));
    
    // Adjust animation speed based on screen size
    function adjustSpeed() {
      const windowWidth = window.innerWidth;
      let speed = '60s';
      
      if (windowWidth < 768) {
        speed = '40s';
      } else if (windowWidth < 1024) {
        speed = '50s';
      } else {
        speed = '60s';
      }
      
      track.style.animationDuration = speed;
    }
    
    // Initial adjustment and add event listener for resize
    adjustSpeed();
    window.addEventListener('resize', adjustSpeed);
    
    // Pause animation on hover for better user experience
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
    
    return () => {
      window.removeEventListener('resize', adjustSpeed);
    };
  });
</script>