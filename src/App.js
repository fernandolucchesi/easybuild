import './App.css';

import React, { useState } from 'react';

import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';
import TemplateFour from './TemplateFour';
import TemplateFive from './TemplateFive';

function App() {
  const [websiteOne, showWebsiteOne] = useState(false);
  const [websiteTwo, showWebsiteTwo] = useState(false);
  const [websiteThree, showWebsiteThree] = useState(true);

  return <TemplateFive />;
}

export default App;
