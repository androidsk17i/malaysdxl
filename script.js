/**
 * Malay Lady Prompt Generator
 * This script handles the generation of prompts for the JuggernautXL_JuggXILightningByRD checkpoint
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const ageInput = document.getElementById('age');
    const hairStyleInput = document.getElementById('hairStyle');
    const outfitInput = document.getElementById('outfit');
    const backgroundInput = document.getElementById('background');
    const cameraLensSelect = document.getElementById('cameraLens');
    const negativePromptInput = document.getElementById('negativePrompt');
    const generateBtn = document.getElementById('generateBtn');
    const randomBtn = document.getElementById('randomBtn');
    const promptResult = document.getElementById('promptResult');
    const negativeResult = document.getElementById('negativeResult');
    const copyStatus = document.getElementById('copyStatus');
    const themeToggle = document.getElementById('themeToggle');
    const copyrightText = document.getElementById('copyrightText');
    
    // Default negative prompt as specified by the user
    const defaultNegativePrompt = "unrealistic proportions, cartoon, anime, illustration, CGI, Unreal, Airbrushed, Digital, fused fingers";
    
    // Track previous random selections to avoid repetition
    let previousSelections = {
        hairStyle: null,
        outfit: null,
        background: null,
        cameraLens: null,
        age: null
    };
    
    // Arrays of options for each category
    const hairStyles = [
        "long wavy hair", "short bob cut", "pixie cut", "shoulder-length straight hair",
        "curly hair with highlights", "long straight black hair", "layered hair with bangs",
        "braided updo", "sleek ponytail", "messy bun", "side-swept waves", "natural curls",
        "half-up half-down style", "blunt cut with side part", "asymmetrical bob",
        "long layers with face-framing pieces", "slicked back hair", "voluminous curls",
        "straight hair with side bangs", "textured lob", "beachy waves", "high bun",
        "low ponytail", "braided crown", "wet look hair", "feathered layers",
        "straight hair with middle part", "tousled waves", "sleek straight hair", "long braids"
    ];
    
    const outfits = [
        "traditional Malay dress", "modern baju kurung", "elegant kebaya", "casual jeans and blouse",
        "formal evening gown", "business suit", "floral sundress", "batik sarong", "silk tudung outfit",
        "contemporary hijab style", "traditional wedding attire", "casual t-shirt and pants",
        "modern office wear", "colorful maxi dress", "songket fabric outfit", "lace kebaya top with sarong",
        "modern batik dress", "casual cotton kurung", "formal kebaya with intricate embroidery",
        "simple white blouse with colorful sarong", "modern hijab with western clothing",
        "traditional Malay costume with gold accessories", "casual ethnic-inspired outfit",
        "modern interpretation of baju melayu", "silk blouse with tailored pants",
        "contemporary batik jumpsuit", "modest swimwear", "casual ethnic print top with jeans",
        "modern kurung with geometric patterns", "traditional ceremonial dress"
    ];
    
    const backgrounds = [
        "tropical beach", "modern city skyline", "lush rainforest", "traditional Malay village",
        "luxurious hotel lobby", "sunset by the ocean", "rice paddy field", "modern office setting",
        "historical building", "botanical garden", "riverside scene", "mountain landscape",
        "upscale restaurant", "traditional market", "modern shopping mall", "rural countryside",
        "elegant living room", "traditional wooden house", "urban street scene", "misty morning forest",
        "coastal fishing village", "modern architectural landmark", "waterfall in jungle",
        "tea plantation", "night city lights", "traditional palace grounds", "mosque courtyard",
        "sandy desert", "tropical island resort", "bustling night market"
    ];
    
    // Array of camera lens options
    const cameraLenses = [
        "85mm portrait lens, shallow depth of field",
        "35mm wide angle lens",
        "50mm standard lens",
        "135mm telephoto lens",
        "24mm wide angle lens",
        "70-200mm zoom lens",
        "macro lens",
        "fisheye lens"
    ];
    
    // Additional descriptive elements to enhance randomness
    const skinTones = [
        "warm olive", "golden tan", "medium brown", "honey-colored", "caramel", 
        "light brown", "rich brown", "deep tan", "natural brown", "sun-kissed"
    ];
    
    const facialExpressions = [
        "with a confident smile", "with a subtle smile", "with a serene expression",
        "looking thoughtfully", "with a gentle gaze", "with a radiant smile",
        "with a composed expression", "with a warm smile", "looking elegant",
        "with a dignified expression"
    ];
    
    const lightingConditions = [
        "soft natural lighting", "golden hour sunlight", "diffused daylight",
        "gentle window light", "warm ambient lighting", "natural outdoor lighting",
        "soft directional lighting", "morning light", "afternoon sunlight",
        "professional studio lighting"
    ];
    
    const photographyStyles = [
        "candid photography", "portrait photography", "fashion photography",
        "documentary style", "lifestyle photography", "editorial photography",
        "natural light photography", "environmental portrait", "fine art photography",
        "contemporary photography"
    ];
    
    // Add event listeners to buttons
    generateBtn.addEventListener('click', generatePrompt);
    randomBtn.addEventListener('click', generateRandomPrompt);
    themeToggle.addEventListener('click', toggleTheme);
    
    // Set default negative prompt
    negativePromptInput.value = defaultNegativePrompt;
    
    // Initialize theme from localStorage
    initTheme();
    
    // Initialize typewriter effect for copyright text
    initTypewriter();
    
    /**
     * Initializes the theme based on localStorage or system preference
     */
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        } else if (savedTheme === 'light') {
            document.body.classList.remove('dark-theme');
        } else {
            // Check system preference if no saved theme
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            }
        }
    }
    
    /**
     * Toggles between light and dark theme
     */
    function toggleTheme() {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    /**
     * Initializes the typewriter effect for the copyright text
     */
    function initTypewriter() {
        const text = "© 2025 ANDROIDSK17I ALL RIGHTS RESERVED";
        let i = 0;
        
        // Clear any existing content
        copyrightText.textContent = '';
        
        // Type out the text character by character
        function typeWriter() {
            if (i < text.length) {
                copyrightText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start the typewriter effect
        typeWriter();
    }
    
    /**
     * Generates a prompt based on user inputs and automatically copies to clipboard
     */
    function generatePrompt() {
        // Get values from inputs
        const age = ageInput.value || '35';
        const hairStyle = hairStyleInput.value || 'long wavy hair';
        const outfit = outfitInput.value || 'traditional Malay dress';
        const background = backgroundInput.value || 'tropical beach';
        const cameraLens = cameraLensSelect.value || '85mm portrait lens, shallow depth of field';
        const negativePrompt = negativePromptInput.value || defaultNegativePrompt;
        
        // Validate age is within range
        const ageNum = parseInt(age);
        if (ageNum < 30 || ageNum > 40) {
            alert('Please enter an age between 30 and 40.');
            return;
        }
        
        // Construct the prompt with enhanced realism parameters
        const prompt = `A highly detailed photograph of a beautiful Malay woman, age ${age}, with thick and large breasts, natural skin texture with pores, realistic facial features, natural skin tone with subtle imperfections, ${hairStyle}, wearing ${outfit}, standing confidently in ${background}, professional photography, natural lighting, ${cameraLens}, high resolution DSLR, soft natural shadows, subtle skin details, hyperrealistic, photorealistic, ultra-detailed, 8k resolution, JuggernautXL_JuggXILightningByRD style.`;
        
        // Display the prompts
        promptResult.textContent = prompt;
        negativeResult.textContent = negativePrompt;
        
        // Add a highlight effect to show the prompts have been updated
        promptResult.classList.add('highlight');
        negativeResult.classList.add('highlight');
        setTimeout(() => {
            promptResult.classList.remove('highlight');
            negativeResult.classList.remove('highlight');
        }, 300);
        
        // Automatically copy to clipboard (only positive prompt)
        copyToClipboard(prompt);
    }
    
    /**
     * Gets a random item from an array that is different from the previous selection
     * @param {Array} array - The array to select from
     * @param {*} previousItem - The previously selected item to avoid
     * @returns {*} A random item from the array
     */
    function getRandomNonRepeatingItem(array, previousItem) {
        if (array.length <= 1) return array[0];
        
        let newItem;
        do {
            newItem = array[Math.floor(Math.random() * array.length)];
        } while (newItem === previousItem && array.length > 1);
        
        return newItem;
    }
    
    /**
     * Generates a prompt with truly random values from the predefined arrays
     * Ensures variety by avoiding repetition and adding random descriptive elements
     */
    function generateRandomPrompt() {
        // Generate random age between 30-40, different from previous if possible
        const randomAge = previousSelections.age ? 
            (previousSelections.age + Math.floor(Math.random() * 9) + 1) % 11 + 30 : 
            Math.floor(Math.random() * 11) + 30;
        
        // Get random values from arrays, avoiding previous selections
        const randomHairStyle = getRandomNonRepeatingItem(hairStyles, previousSelections.hairStyle);
        const randomOutfit = getRandomNonRepeatingItem(outfits, previousSelections.outfit);
        const randomBackground = getRandomNonRepeatingItem(backgrounds, previousSelections.background);
        const randomCameraLens = getRandomNonRepeatingItem(cameraLenses, previousSelections.cameraLens);
        
        // Get random additional descriptive elements
        const randomSkinTone = skinTones[Math.floor(Math.random() * skinTones.length)];
        const randomExpression = facialExpressions[Math.floor(Math.random() * facialExpressions.length)];
        const randomLighting = lightingConditions[Math.floor(Math.random() * lightingConditions.length)];
        const randomStyle = photographyStyles[Math.floor(Math.random() * photographyStyles.length)];
        
        // Store current selections as previous for next time
        previousSelections = {
            hairStyle: randomHairStyle,
            outfit: randomOutfit,
            background: randomBackground,
            cameraLens: randomCameraLens,
            age: randomAge
        };
        
        // Set the values in the input fields
        ageInput.value = randomAge;
        hairStyleInput.value = randomHairStyle;
        outfitInput.value = randomOutfit;
        backgroundInput.value = randomBackground;
        
        // Set the selected camera lens
        for (let i = 0; i < cameraLensSelect.options.length; i++) {
            if (cameraLensSelect.options[i].value === randomCameraLens) {
                cameraLensSelect.selectedIndex = i;
                break;
            }
        }
        
        // Construct a truly random prompt with additional elements
        const prompt = `A highly detailed photograph of a beautiful Malay woman, age ${randomAge}, with thick and large breasts, ${randomSkinTone} skin tone with natural texture and pores, realistic facial features ${randomExpression}, ${randomHairStyle}, wearing ${randomOutfit}, standing confidently in ${randomBackground}, ${randomStyle}, ${randomLighting}, ${randomCameraLens}, high resolution DSLR, soft natural shadows, subtle skin details, hyperrealistic, photorealistic, ultra-detailed, 8k resolution, JuggernautXL_JuggXILightningByRD style.`;
        
        // Display the prompts
        promptResult.textContent = prompt;
        negativeResult.textContent = negativePromptInput.value || defaultNegativePrompt;
        
        // Add a highlight effect to show the prompts have been updated
        promptResult.classList.add('highlight');
        negativeResult.classList.add('highlight');
        setTimeout(() => {
            promptResult.classList.remove('highlight');
            negativeResult.classList.remove('highlight');
        }, 300);
        
        // Automatically copy to clipboard (only positive prompt)
        copyToClipboard(prompt);
    }
    
    /**
     * Copies the generated prompt to clipboard (only positive prompt)
     */
    function copyToClipboard(positivePrompt) {
        // Create text to copy (only positive prompt)
        const textToCopy = positivePrompt;
        
        try {
            // Use the modern Clipboard API if available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy)
                    .then(() => showCopySuccess())
                    .catch(err => {
                        console.error('Failed to copy text: ', err);
                        fallbackCopyMethod(textToCopy);
                    });
            } else {
                // Fall back to older method
                fallbackCopyMethod(textToCopy);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy to clipboard. Please try again or copy manually.');
        }
    }
    
    /**
     * Fallback copy method using document.execCommand
     */
    function fallbackCopyMethod(text) {
        // Create a temporary textarea element to copy from
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed'; // Prevent scrolling to bottom
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            // Execute copy command
            const successful = document.execCommand('copy');
            if (successful) {
                showCopySuccess();
            } else {
                throw new Error('Copy command was unsuccessful');
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy to clipboard. Please try again or copy manually.');
        }
        
        // Remove the temporary textarea
        document.body.removeChild(textarea);
    }
    
    /**
     * Shows a success message when copy is successful
     */
    function showCopySuccess() {
        copyStatus.textContent = 'Positive prompt copied to clipboard!';
        copyStatus.style.opacity = 1;
        
        // Hide the message after 2 seconds
        setTimeout(() => {
            copyStatus.style.opacity = 0;
        }, 2000);
    }
    
    // Initialize with a default prompt
    generatePrompt();
}); 