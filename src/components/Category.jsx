import { useParams } from "react-router-dom";
import React from "react";

function Category({ categories }) {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);

  return (
    <React.Fragment>
      {Object.entries(categories)
        .filter(([category]) => category === decodedCategoryName)
        .map(([category, emojis], index) => (
          <div key={index} className="category">
            <h3>{category}</h3>
            <div className="emoji-cards">
              {emojis.map((emoji, idx) => (
                <div key={idx} className="emoji-card">
                  <div
                    className="emoji"
                    dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}
                  />
                  <div className="emoji-info">
                    <div className="emoji-name">{emoji.name}</div>
                    <div className="emoji-code">
                      HTML Code: {emoji.htmlCode}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </React.Fragment>
  );
}

export default Category;
