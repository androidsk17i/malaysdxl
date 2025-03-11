# Malay Lady Prompt Generator

A web-based tool for generating prompts to create realistic images of Malay women using the JuggernautXL_JuggXILightningByRD checkpoint.

## Live Demo

The generator is live and available at: [https://androidsk17i.github.io/malaysdxl/](https://androidsk17i.github.io/malaysdxl/)

## Features

- Input form for customizing age, hair style, outfit, and background
- Camera lens selection for different photography styles
- Negative prompt textbox for specifying unwanted elements
- Advanced random prompt generator with non-repetitive variations
- Generates well-structured prompts optimized for photorealistic results
- Simplified negative prompt focusing on key issues to avoid
- Automatic copy of positive prompt to clipboard
- Dark/light theme toggle with system preference detection
- Retro typewriter effect in the footer
- Visitor information display (IP, location, browser, OS, time)
- Easy embedding in other websites with customization options
- Clean, responsive user interface

## Usage

1. Open `index.html` in any modern web browser or visit [https://androidsk17i.github.io/malaysdxl/](https://androidsk17i.github.io/malaysdxl/)
2. Toggle between dark and light themes using the sun/moon button in the top-right corner
3. Fill in the form fields with your desired attributes:
   - Age (30-40)
   - Hair style (e.g., long wavy hair)
   - Outfit (e.g., traditional Malay dress)
   - Background (e.g., tropical beach)
   - Camera lens (e.g., 85mm portrait lens, wide angle lens, etc.)
4. Customize the negative prompt if needed (default negative prompt is provided)
5. Click "Generate Prompt" to create your prompt based on your inputs
6. Alternatively, click "Random Prompt" to automatically generate a unique, non-repetitive prompt with additional random elements
7. The positive prompt is automatically copied to your clipboard
8. A confirmation message will appear when the prompt is copied
9. View your visitor information at the bottom of the page (IP address, location, browser details, and current time)

## Embedding in Other Websites

You can easily embed this prompt generator into your own website using one of the following methods:

### Method 1: Using the Embedding Script (Recommended)

The simplest and most flexible way to embed the generator is using our embedding script:

1. Include the embedding script in your HTML:

```html
<script src="https://androidsk17i.github.io/malaysdxl/embed.js"></script>
```

2. Create a container element and call the embedding function:

```html
<div id="generator-container"></div>

<script>
  // Basic embedding with default options
  embedPromptGenerator('#generator-container');
</script>
```

3. Customize the embedding with options:

```javascript
embedPromptGenerator('#generator-container', {
  width: '100%',
  height: '700px',
  theme: 'dark', // 'light', 'dark', or 'auto'
  showVisitorInfo: false,
  showFooter: true,
  borderRadius: '15px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
});
```

See `embed-example.html` for a complete working example with different configurations.

### Method 2: Iframe Embedding

You can also use a simple iframe pointing to the live version:

```html
<iframe 
  src="https://androidsk17i.github.io/malaysdxl/" 
  width="100%" 
  height="800px" 
  style="border: none; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);"
  title="Malay Lady Prompt Generator">
</iframe>
```

Adjust the width, height, and styling as needed to fit your website's design.

### Method 3: Full Integration

For more control and better integration with your website, you can include all the necessary files:

1. Copy the following files to your website:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Include the generator in a specific div on your page:

```html
<div id="prompt-generator-container"></div>

<script>
  // Load the generator into the container
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('prompt-generator-container');
    
    // Load HTML content
    fetch('https://androidsk17i.github.io/malaysdxl/index.html')
      .then(response => response.text())
      .then(html => {
        // Extract the main container content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const generatorContent = doc.querySelector('.container').outerHTML;
        
        // Insert into your page
        container.innerHTML = generatorContent;
        
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://androidsk17i.github.io/malaysdxl/script.js';
        document.body.appendChild(script);
      });
  });
</script>
```

3. Add the CSS to your page:

```html
<link rel="stylesheet" href="https://androidsk17i.github.io/malaysdxl/styles.css">
```

### Method 4: WordPress Integration

To embed the generator in WordPress:

1. Create a new page and use the Custom HTML block with the iframe code:

```html
<iframe 
  src="https://androidsk17i.github.io/malaysdxl/" 
  width="100%" 
  height="800px" 
  style="border: none; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);"
  title="Malay Lady Prompt Generator">
</iframe>
```

2. Alternatively, create a custom shortcode in your theme's functions.php:

```php
function prompt_generator_shortcode() {
    return '<div class="prompt-generator-wrapper">
              <iframe 
                src="https://androidsk17i.github.io/malaysdxl/" 
                width="100%" 
                height="800px" 
                style="border: none; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);"
                title="Malay Lady Prompt Generator">
              </iframe>
            </div>';
}
add_shortcode('prompt_generator', 'prompt_generator_shortcode');
```

Then use the shortcode `[prompt_generator]` in any page or post.

## Advanced Randomization

The random prompt generator uses several techniques to ensure variety:
- Tracks previous selections to avoid repetition
- Adds random descriptive elements like skin tones and facial expressions
- Varies photography styles and lighting conditions
- Uses mathematical algorithms to ensure age variation
- Combines elements in unique ways for virtually unlimited prompt variations

## Prompt Optimization

The generator creates prompts specifically designed to produce realistic photographs by:
- Including natural skin texture and subtle imperfections
- Offering various camera lens options for different photography styles:
  - Portrait lenses (85mm) for flattering facial features
  - Wide angle lenses (24mm, 35mm) for environmental portraits
  - Standard lenses (50mm) for natural perspective
  - Telephoto lenses (135mm) for compressed perspective
  - Specialty lenses (macro, fisheye) for creative effects
- Using natural lighting and shadow descriptions
- Using a focused negative prompt that avoids key issues like unrealistic proportions, cartoon styles, and digital artifacts

## Predefined Options

The generator includes multiple predefined options for each of the following categories:
- Hair styles (e.g., long wavy hair, pixie cut, braided updo)
- Outfits (e.g., traditional Malay dress, modern baju kurung, elegant kebaya)
- Backgrounds (e.g., tropical beach, modern city skyline, traditional Malay village)
- Camera lenses (e.g., portrait, wide angle, telephoto, macro)
- Skin tones (e.g., warm olive, golden tan, honey-colored)
- Facial expressions (e.g., confident smile, thoughtful gaze)
- Lighting conditions (e.g., golden hour, soft window light)
- Photography styles (e.g., portrait, fashion, documentary)

## Files

- `index.html` - The main HTML structure
- `styles.css` - CSS styling for the interface
- `script.js` - JavaScript functionality for generating prompts

## Customization

You can easily modify the prompt template, predefined options, and default negative prompt in the `script.js` file by editing the relevant functions and arrays.

## License

This project is open source and available for personal and commercial use. 