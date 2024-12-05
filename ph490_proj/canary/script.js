const contentContainer = document.getElementById('content-container');
const redOverlay = document.getElementById('red-overlay');

// Array of content (text and image pairs)
const content = [
    { text: "To me, the hypothetical mass of each incident was no more than the surface area of a single droplet.", img: "2.png" },
    { text: "The wetness was tolerable, or I thought so", img: "3.png" },
    { text: "But what was once damp is now swallowed by the same familiar, overpowering body. ", img: "4.png" },
    { text: "As the canary screams echo in my ears,", img: "5.png" },
    {text: "A saturated red bleeds over the peripheral of my vision and the panic settles in. ", img: "6.png" }
];

let currentIndex = 0; // Tracks the current content index
let redOpacity = 0; // Initial opacity of the red overlay
const occupiedPositions = []; // Tracks positions to avoid overlap

// Function to generate random positions without overlap
function getRandomPosition() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    let randomX, randomY, isOverlapping;

    do {
        randomX = Math.random() * (containerWidth - 200); // Adjust size limits
        randomY = Math.random() * (containerHeight - 200); // Adjust size limits
        isOverlapping = occupiedPositions.some(
            ([x, y]) => Math.abs(x - randomX) < 150 && Math.abs(y - randomY) < 150
        );
    } while (isOverlapping);

    occupiedPositions.push([randomX, randomY]);
    return { x: randomX, y: randomY };
}

function handleImageClick(event) {
    // Increase the opacity of the red overlay
    redOpacity += 0.2; // Adjust this value for faster/slower effect
    if (redOpacity > 1) redOpacity = 1; // Cap opacity at 1
    redOverlay.style.backgroundColor = `rgba(255, 0, 0, ${redOpacity})`;

    // Show the next image and text if available
    if (currentIndex < content.length) {
        // Create a new content item
        const newContentItem = document.createElement('div');
        newContentItem.className = 'content-item';

        const newImage = document.createElement('img');
        newImage.src = content[currentIndex].img;
        newImage.alt = `Image ${currentIndex + 2}`;
        newImage.className = 'clickable-image';
        newImage.addEventListener('click', handleImageClick); // Attach click handler to the new image

        const newText = document.createElement('p');
        newText.textContent = content[currentIndex].text;

        newContentItem.appendChild(newImage);
        newContentItem.appendChild(newText);

        // Position the new content randomly
        const { x, y } = getRandomPosition();
        newContentItem.style.left = `${x}px`;
        newContentItem.style.top = `${y}px`;
        newContentItem.style.position = 'absolute';

        contentContainer.appendChild(newContentItem);

        currentIndex++;
    } else {
        // End the sequence
        const finalMessage = document.createElement('a');
        finalMessage.textContent = "LEAVE.";
        finalMessage.href = "../temp.html"; // Link to your other HTML file
        finalMessage.style.fontWeight = 'bold';
        finalMessage.style.color = 'black';
        finalMessage.style.fontSize = '24px'; // Make it larger
        finalMessage.style.textDecoration = 'none'; // Optional: Remove underline
        finalMessage.style.position = 'absolute';
    
        finalMessage.style.transform = 'translate(-50%, -50%)'; // Center anchor point

        // Randomly position the final message
        const { x, y } = getRandomPosition();
        finalMessage.style.left = `${x}px`;
        finalMessage.style.top = `${y}px`;

      
        contentContainer.appendChild(finalMessage);
    }
}



// Attach initial click handler to the first image
document.querySelector('.clickable-image').addEventListener('click', handleImageClick);
