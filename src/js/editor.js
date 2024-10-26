import { getContent, putContent } from './database';

const editor = document.querySelector('#editor');  

// Load saved content on startup
window.addEventListener('load', async () => {
  const savedContent = await getContent();
  editor.value = savedContent;
});

// Save content when user clicks off the editor
editor.addEventListener('blur', () => {
  putContent(editor.value);
});

// Export a function to get the editor instance
export default function getEditor() {
  return editor;
}
