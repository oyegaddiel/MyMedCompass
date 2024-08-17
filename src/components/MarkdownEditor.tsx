import React, { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const MarkdownEditor: React.FC = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = ({ text }: { text: string }) => {
    setContent(text);
  };

  const saveContent = () => {
    // Logic to save content, e.g., to Firebase Firestore
    console.log(content);
  };

  return (
    <div className="markdown-editor">
      <h2 className="text-2xl font-bold mb-4">Create Hospital Entry</h2>
      <MdEditor
        value={content}
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <button
        onClick={saveContent}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Save Entry
      </button>
    </div>
  );
};

export default MarkdownEditor;
