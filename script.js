const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output').contentWindow.document;

function updateOutput() {
    output.open();
    output.writeln(
        `<html>
            <head>
                <style>${cssCode.value}</style>
            </head>
            <body>${htmlCode.value}</body>
            <script>${jsCode.value}</script>
        </html>`
    );
    output.close();
}

document.querySelectorAll('.code-editor').forEach(editor => {
    editor.addEventListener('keyup', updateOutput);
});

updateOutput(); // Initial update

// Fullscreen mode implementation
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenBtn = document.getElementById('fullscreen-toggle');
    const outputSection = document.querySelector('.output-section');
    
    function enterFullscreen() {
        outputSection.classList.add('fullscreen');
        document.body.classList.add('fullscreen-active');
    }
    
    function exitFullscreen() {
        outputSection.classList.remove('fullscreen');
        document.body.classList.remove('fullscreen-active');
    }
    
    fullscreenBtn.addEventListener('click', function() {
        if (outputSection.classList.contains('fullscreen')) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && outputSection.classList.contains('fullscreen')) {
            exitFullscreen();
        }
    });
});