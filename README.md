# Malay Lady Prompt Generator

A web-based tool for generating prompts to create realistic images of Malay women using the JuggernautXL_JuggXILightningByRD checkpoint.

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
- Clean, responsive user interface

## Usage

1. Open `index.html` in any modern web browser
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