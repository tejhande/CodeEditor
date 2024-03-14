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
