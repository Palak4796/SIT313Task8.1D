import React, { useState } from 'react';
import { Form, Header } from 'semantic-ui-react';
import './ArticleForm.css';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tags, setTags] = useState('');  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     // Just upload the image without storing its URL

      const articleData = {
        title,
        abstract,
        articleText,
        tags,
        createdAt: new Date(),
      };

      console.log("Uploading article data:", articleData);

      // Add article data to Firestore
      await addDoc(collection(db, 'articles'), articleData);

      // Reset form state after successful submission
      setTitle('');
      setAbstract('');
      setArticleText('');
      setTags('');
    
      console.log('Article uploaded successfully!');

    } catch (error) {
      console.error("Error uploading article:", error.message);
    }
  };

  return (
    <>
      <Header as='h2' className="article-form-header">What do you want to share?</Header>
      <Form className="article-form" onSubmit={handleSubmit}>
        <Form.Input 
          label="Title" 
          placeholder="Enter a descriptive title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        
        

        <Form.Input 
          label="Abstract" 
          placeholder="Enter a 1-paragraph abstract" 
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
          className="input-field"
        />
        
        <Form.TextArea 
          label="Article Text" 
          placeholder="Enter article content..." 
          value={articleText}
          onChange={(e) => setArticleText(e.target.value)}
          className="input-field"
        />
        
        <Form.Input 
          label="Tags" 
          placeholder="Please add up to 3 tags e.g., Java" 
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="input-field"
        />
        <div className="post-button-container">
          <button type="submit" className="custom-button">Post</button>
        </div>
      </Form>
    </>
  );
};

export default ArticleForm;
