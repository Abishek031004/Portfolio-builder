import React from 'react';

function Preview({ formData }) {
  const {
    name,
    bio,
    skills,
    projects,
    contact,
    experience,
    education,
  } = formData;

  const renderList = (text) =>
    text
      ? text.split(',').map((item, i) => <li key={i}>{item.trim()}</li>)
      : null;

  return (
    <div id="portfolio-preview" className="preview-container">
      <h1>{name || 'Your Name'}</h1>
      <p>{bio || 'Short bio will appear here.'}</p>

      {contact && (
        <>
          <h3>Contact</h3>
          <p>{contact}</p>
        </>
      )}

      <h3>Skills</h3>
      <ul>
        {renderList(skills) || <li>Add some skills...</li>}
      </ul>

      <h3>Projects</h3>
      <ul>
        {renderList(projects) || <li>Add some projects...</li>}
      </ul>

      <h3>Experience</h3>
      <ul>
        {renderList(experience) || <li>Add your experience...</li>}
      </ul>

      <h3>Education</h3>
      <ul>
        {renderList(education) || <li>Add your education...</li>}
      </ul>
    </div>
  );
}

export default Preview;
