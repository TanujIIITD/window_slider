import React from "react";

const Content = ({ name, number }) => {
  return (
    <div className={`windows ${name}`}>
      <h1>Window {number}</h1>
      <h2>Component {number}</h2>
      <p>
        DataNeuron is revolutionizing the conventional Supervised NLP Workflows through an automation based SaaS product.
      </p>
      <p>
        Automate Text Data Labeling, Advanced Model Training, LLM Fine-Tuning, and NLP Model Lifecycle Management using a powerful data-centric platform.
      </p>
    </div>
  );
};

export default Content;